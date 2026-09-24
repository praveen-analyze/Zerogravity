import React, { useState, useEffect, useRef } from "react";
import { Camera, ImageOff } from "lucide-react";

/**
 * LazyImage component with progressive shimmer placeholder,
 * intersection observer, native lazy loading, async decoding,
 * smooth blur-up fade in, and fallback recovery.
 */
export const LazyImage = ({
  src,
  fallback,
  alt = "Zero Gravity Photography",
  className = "",
  imgClassName = "",
  aspectRatio = "",
  objectFit = "object-cover",
  priority = false,
  onClick = null,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (!hasError && fallback) {
      setHasError(true);
    }
  };

  const imageSource = hasError && fallback ? fallback : src;

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-transparent select-none ${aspectRatio} ${className}`}
      onClick={onClick}
    >
      {/* Skeleton Shimmer Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 skeleton-shimmer flex items-center justify-center pointer-events-none">
          <div className="text-[#323644] flex flex-col items-center gap-1.5 animate-pulse">
            <Camera className="w-5 h-5 opacity-50 text-[#c5a880]" />
            <span className="text-[9px] tracking-widest uppercase font-mono text-[#666c80]">
              Zero Gravity
            </span>
          </div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={imageSource}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={handleLoad}
          onError={handleError}
          className={`block w-full h-full ${objectFit} transition-transform duration-700 ease-out ${imgClassName} ${
            isLoaded
              ? "opacity-100 blur-0"
              : "opacity-0 blur-sm"
          }`}
        />
      )}

      {/* Fallback indicator if error occurs and fallback fails */}
      {hasError && !fallback && (
        <div className="absolute inset-0 bg-[#12141a] flex items-center justify-center text-[#7e859b]">
          <ImageOff className="w-6 h-6 mr-2" />
          <span className="text-xs">Image unavailable</span>
        </div>
      )}
    </div>
  );
};
