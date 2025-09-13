import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  onLoad?: () => void;
  carousel?: boolean; // Special flag for carousel images
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  sizes = '(min-width: 768px) 50vw, 100vw',
  priority = false,
  quality = 85,
  onLoad,
  carousel = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [useOriginal, setUseOriginal] = useState(false);

  // Generate optimized image path - convert to WebP format
  const getOptimizedSrc = (originalSrc: string) => {
    if (!originalSrc || originalSrc.startsWith('http')) {
      return originalSrc; // External URLs or empty, return as-is
    }
    
    // Replace /image/ with /image/optimized/ and change extension to .webp
    const pathParts = originalSrc.split('/');
    const filename = pathParts[pathParts.length - 1];
    const nameWithoutExt = filename.split('.')[0];
    
    return originalSrc.replace('/image/', '/image/optimized/').replace(filename, `${nameWithoutExt}.webp`);
  };

  // Get the current source (optimized or original based on fallback state)
  const currentSrc = useOriginal ? src : getOptimizedSrc(src);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    // If optimized image fails, try original image
    if (!useOriginal) {
      setUseOriginal(true);
    } else {
      setIsLoading(false);
    }
  };

  // Don't render if no valid source
  if (!src || !currentSrc) {
    return (
      <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${fill ? 'w-full h-full' : ''}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-400 text-sm">No image</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      {isLoading && (
        <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse ${fill ? 'w-full h-full' : ''}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      <Image
        src={currentSrc}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
}
