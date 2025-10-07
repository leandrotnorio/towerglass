'use client';
import React, { useEffect, useRef, useState } from 'react';

const InfiniteAutoCarousel = ({ images = [], speed = 0.1 }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const isPausedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    const slideWidth = container.scrollWidth / 2 / images.length;

    const updateIndex = () => {
      const index = Math.floor(container.scrollLeft / slideWidth) % images.length;
      setCurrentIndex(index);
    };

    const scroll = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;

        updateIndex(); // atualiza a bolinha

        const totalScrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= totalScrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    container.addEventListener('scroll', updateIndex);
    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
      container.removeEventListener('scroll', updateIndex);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [images, speed]);

  const pauseScroll = () => {
    isPausedRef.current = true;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const resumeScrollWithDelay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 1000);
  };

  const handleDotClick = (index) => {
    const container = scrollRef.current;
    if (container) {
      const slideWidth = container.scrollWidth / 2 / images.length;
      container.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
      });
      pauseScroll();
      resumeScrollWithDelay();
    }
  };

  return (
    <div
      className=" pb-6 lg:mb-6 overflow-hidden"
      role="region"
      aria-label="Carrossel automático de imagens"
      onMouseEnter={pauseScroll}
      onMouseLeave={resumeScrollWithDelay}
      onTouchStart={pauseScroll}
      onTouchEnd={resumeScrollWithDelay}
      onTouchCancel={resumeScrollWithDelay}
      onTouchMove={pauseScroll}
    >
      <h2 className="text-5xl my-8  sm:text-6xl font-bold text-blue-700">OBRAS</h2>

      <div
        ref={scrollRef}
        className="flex overflow-hidden overflow-x-scroll space-x-14 no-scrollbar"
        style={{ scrollSnapType: 'none', scrollBehavior: 'auto' }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="lg:h-[400px] h-[400px] w-[250px]  object-cover flex-shrink-0 rounded-lg shadow-md"
            
          />
        ))}
      </div>

      {/* Indicadores de bolinhas */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-blue-700 scale-125' : 'bg-gray-300'
            } transition-all duration-300`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteAutoCarousel;

