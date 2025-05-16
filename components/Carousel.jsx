'use client';
import React, { useEffect, useState, useRef } from 'react';

const InfiniteAutoCarousel = ({ images = [], interval = 2000 }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(images.length); // Definir o estado para currentIndex

  // Duplicamos as imagens para simular looping visual
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    const slideWidth = container.offsetWidth;
    let index = currentIndex; // Usando o currentIndex do estado
    container.scrollLeft = index * slideWidth;

    const autoScroll = setInterval(() => {
      index += 1;
      setCurrentIndex(index); // Atualiza o estado de currentIndex

      container.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
      });

      // Quando atingir o final das imagens duplicadas, reinicia suavemente
      if (index >= duplicatedImages.length - 1) {
        setTimeout(() => {
          setCurrentIndex(images.length); // Resetando o currentIndex
          container.scrollLeft = images.length * slideWidth; // Posiciona novamente no meio
        }, 500); // tempo suficiente para terminar a transição
      }
    }, interval);

    return () => clearInterval(autoScroll);
  }, [images, interval, currentIndex]); // Adicionando currentIndex como dependência

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const slideWidth = container.offsetWidth;
    setCurrentIndex(index);
    container.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scroll-smooth space-x-4 px-4 scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Obra ${index + 1}`}
            className="w-full h-100 mt-6 object-cover rounded-lg shadow-md flex-shrink-0"
            style={{
              minWidth: '100%',
              scrollSnapAlign: 'center',
            }}
          />
        ))}
      </div>
      <div className="flex justify-center py-3 mb-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-3 rounded-full transition-all duration-200 ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteAutoCarousel;

