'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProductImage {
  src: string;
  alt: string;
}

interface ProductCarouselProps {
  company: string;
  description: string;
  images: ProductImage[];
  color: string;
}

export default function ProductCarousel({ company, description, images, color }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`${color} p-6 text-white`}>
        <h3 className="text-2xl font-bold mb-2">{company}</h3>
        <p className="text-white/90">{description}</p>
      </div>

      <div className="relative">
        <div className="relative h-64 md:h-96 overflow-hidden bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 cursor-pointer"
              onClick={() => setIsFullscreen(true)}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close fullscreen"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
