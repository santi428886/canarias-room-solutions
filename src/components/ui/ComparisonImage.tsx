"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

interface ComparisonImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
}

export function ComparisonImage({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className = "",
  sizes,
}: ComparisonImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-gray-100 text-gray-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-10 w-10" strokeWidth={1.5} aria-hidden />
        <span className="text-xs font-medium">Imagen no disponible</span>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
