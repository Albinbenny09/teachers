// src/components/HeroCarousel.tsx
'use client';
import { useEffect, useMemo, useState } from 'react';
import OptimizedImage from './OptimizedImage';

export type CarouselImage = { url: string; title?: string | null; subtitle?: string | null };

export default function HeroCarousel({ images }: { images: CarouselImage[] }) {
  const imgs = useMemo(() => images, [images]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload next image
  useEffect(() => {
    if (imgs.length === 0) return;
    
    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    // Preload current and next image
    if (imgs[index]?.url) {
      preloadImage(imgs[index].url);
    }
    if (imgs[(index + 1) % imgs.length]?.url) {
      preloadImage(imgs[(index + 1) % imgs.length].url);
    }
  }, [imgs, index]);

  // Handle image load events
  const handleImageLoad = (imageIndex: number) => {
    if (imageIndex === 0) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (imgs.length === 0) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % imgs.length), 5000);
    return () => clearInterval(id);
  }, [imgs.length]);

  if (imgs.length === 0) {
    return (
      <div className="relative w-full h-[60vh] min-h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-slate-300 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="text-slate-500 text-lg font-medium">No images available</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[60vh] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-10"></div>
      
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 animate-pulse z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <div className="text-slate-600 font-medium">Loading beautiful moments...</div>
            </div>
          </div>
        </div>
      )}

      {imgs.map((it, i) => (
        it.url && it.url.trim() ? (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <OptimizedImage
              src={it.url}
              alt={it.title || "slide"}
              fill
              priority={i === 0}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              quality={90}
              carousel={true}
              onLoad={() => handleImageLoad(i)}
            />
            
            {/* Content overlay */}
            {(it.title || it.subtitle) && (
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
                    {it.title && (
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif leading-tight">
                        {it.title}
                      </h2>
                    )}
                    {it.subtitle && (
                      <p className="text-xl text-white/95 font-medium leading-relaxed">
                        {it.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null
      ))}

      {/* Navigation arrows */}
      {imgs.length > 1 && (
        <>
          <button
            onClick={() => setIndex((prev) => (prev - 1 + imgs.length) % imgs.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-white/25 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-white/35 transition-all duration-500 group/arrow shadow-2xl hover:shadow-3xl hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-7 h-7 group-hover/arrow:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setIndex((prev) => (prev + 1) % imgs.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 w-14 h-14 bg-white/25 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white hover:bg-white/35 transition-all duration-500 group/arrow shadow-2xl hover:shadow-3xl hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-7 h-7 group-hover/arrow:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Navigation dots */}
      {imgs.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-4 bg-white/25 backdrop-blur-xl rounded-2xl px-6 py-3 shadow-2xl border border-white/20">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  i === index 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Progress bar */}
      {imgs.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20 z-30">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-linear shadow-lg"
            style={{ width: `${((index + 1) / imgs.length) * 100}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}