
// Função de rolagem manual para o usuario

/*'use client';
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

export default InfiniteAutoCarousel;}*/










// Função de rolagem automática para o usuario



/*'use client';
import React, { useEffect, useRef } from 'react';

const InfiniteAutoCarousel = ({ images = [], speed = 0.9 }) => {
  const scrollRef = useRef(null);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    const totalWidth = container.scrollWidth / 2; // largura original
    container.scrollLeft = 0;

    let animationFrameId;

    const scrollStep = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // Quando atinge o final da primeira metade, reinicia
      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, speed]);

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scroll-smooth space-x-4 px-4 scrollbar-hide"
        style={{
          scrollSnapType: 'none', // Desabilita o snap para rolagem suave
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
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteAutoCarousel;*/





// Função de rolagem automática e manual para o usuario


/*'use client';
import React, { useEffect, useRef } from 'react';

const InfiniteAutoCarousel = ({ images = [], speed = 0.01 }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    let rafId;

    const scroll = () => {
      container.scrollLeft += speed;

      const totalScrollWidth = container.scrollWidth / 2;

      if (container.scrollLeft >= totalScrollWidth) {
        container.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(scroll);
    };

    rafId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(rafId);
  }, [images, speed]);

  return (
    <div className="w-full mb-6 lg:mb-6 overflow-hidden">
      <div
        ref={scrollRef}
        className="flex m-2 overflow-x-scroll space-x-6 scrollbar-hide"
        style={{
          scrollSnapType: 'none',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="lg:h-96 m-4 object-cover flex-shrink-0 rounded-lg shadow-md"
            style={{
              minWidth: '100%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteAutoCarousel;*/








/*'use client';
import React, { useEffect, useRef, useState } from 'react';

const InfiniteAutoCarousel = ({ images = [], speed = 0.01 }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isHoveredRef = useRef(false); // ref para guardar o estado atualizado
  const [isHovered, setIsHovered] = useState(false);

  // Sincroniza o estado com a ref para ter sempre o valor atualizado no loop
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    const scroll = () => {
      if (!isHoveredRef.current) {  // verifica a ref para pausar se hover
        container.scrollLeft += speed;

        const totalScrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= totalScrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [images, speed]);

  return (
    <div
      className="w-full mb-6 lg:mb-6 overflow-hidden"
      role="region"
      aria-label="Carrossel automático de imagens"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className="flex m-2 overflow-x-scroll space-x-6 scrollbar-hide"
        style={{ scrollSnapType: 'none' }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="lg:h-96 m-4 object-cover flex-shrink-0 rounded-lg shadow-md"
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteAutoCarousel;*/




// pausa de 2s no carousel desktop

/*'use client';
import React, { useEffect, useRef, useState } from 'react';

const InfiniteAutoCarousel = ({ images = [], speed = 0.01 }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const isPausedRef = useRef(false);

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    const scroll = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;

        const totalScrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= totalScrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [images, speed]);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    // Espera 2 segundos antes de voltar o scroll automático
    timeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  };

  return (
    <div
      className="w-full mb-6 lg:mb-6 overflow-hidden"
      role="region"
      aria-label="Carrossel automático de imagens"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollRef}
        className="flex m-2 overflow-x-scroll space-x-6 scrollbar-hide"
        style={{ scrollSnapType: 'none' }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="lg:h-96 m-4 object-cover flex-shrink-0 rounded-lg shadow-md"
            style={{ minWidth: '100%' }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteAutoCarousel;*/





/*'use client';
import React, { useEffect, useRef } from 'react';

const InfiniteAutoCarousel = ({ images = [], speed = 0.1 }) => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const isPausedRef = useRef(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const duplicatedImages = [...images, ...images];

  const totalScrollWidth = container.scrollWidth / 2;
  const slideWidth = container.scrollWidth / images.length / 2; // Largura de um slide
  const index = Math.floor(container.scrollLeft / slideWidth) % images.length;
  setCurrentIndex(index);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || images.length === 0) return;

    const scroll = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;
        const totalScrollWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= totalScrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationRef.current);
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
    }, 2000);
  };

  return (
    <div
      className="w-full mb-6 lg:mb-6 overflow-hidden"
      role="region"
      aria-label="Carrossel automático de imagens"
      onMouseEnter={pauseScroll}
      onMouseLeave={resumeScrollWithDelay}
      onTouchStart={pauseScroll}
      onTouchEnd={resumeScrollWithDelay}
      onTouchCancel={resumeScrollWithDelay}
      onTouchMove={pauseScroll}
    >
       <h2 className="text-5xl py-4 sm:text-6xl font-bold text-blue-700">OBRAS</h2>
      <div
        ref={scrollRef}
        className="flex mx-2 my-8 px-4  overflow-x-scroll space-x-8 scrollbar-hide"
        style={{ scrollSnapType: 'none', scrollBehavior: 'auto' }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="lg:h-[400px] h-[400px] w-24 object-cover flex-shrink-0 rounded-lg shadow-md"
            style={{ minWidth: '80%' }}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
  {images.map((_, index) => (
    <span
      key={index}
      className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-blue-700' : 'bg-gray-400'} transition-all duration-300`}
    />
  ))}
</div>
    </div>
  );
};

export default InfiniteAutoCarousel;*/




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
        className="flex  overflow-x-scroll space-x-20 no-scrollbar"
        style={{ scrollSnapType: 'none', scrollBehavior: 'auto' }}
      >
        {duplicatedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="lg:h-[400px] h-[400px] w-[250px] object-cover flex-shrink-0 rounded-lg shadow-md"
            
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

