'use client';
import Image from 'next/image';
import React from 'react';
import Carousel from '../components/Carousel.jsx';
import TestimonialsCarousel from '../components/TestmonialsCarousel.jsx'

const images = [
  '/images.jpg',
  '/images.jpg',
  '/images.jpg',
  '/images.jpg',
];

export default function HomePage() {
  return (
    <section className="bg-white shadow-lg rounded-xl">

      {/* HERO com imagem de fundo profissional */}
      <div className="relative mt-[5rem] flex items-center justify-center text-center  h-[221px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        
        
        {/* Imagem de fundo */}
        <div
          className="absolute top-0  py-6 rounded-t-xl bg-no-repeat bg-center bg-cover overflow-hidden"
          style={{
            backgroundImage: "url('/images.jpg')",
          }}
        >
           <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 m-2">
            Tecnologia em engenharia de vidro
          </h1>
          <p className="text-white text-lg sm:text-xl font-semibold">
            Transparência, inovação e estrutura para grandes obras.
          </p>
          </div>
      </div>

      {/* Seção Obras */}
      <div className=" text-center mt-8">
        <h2 className="text-5xl sm:text-6xl font-bold text-blue-700">
          OBRAS
        </h2>
        <Carousel 
        images={images}
        speed={1}
        showButtons={true}
        showIndicators={true}
        />
      </div>
      <div className='text-center'>
        <h2 className='text-4xl py-2 sm:text-6xl font-bold text-blue-700'>DEPOIMENTOS</h2>
        <TestimonialsCarousel/>
      </div>
    </section>
  );
}
