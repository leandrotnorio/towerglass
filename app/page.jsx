'use client';
import React from 'react';
import Carousel from '../components/Carousel.jsx';

const images = [
  '/images.jpg',
  '/images.jpg',
  '/images.jpg',
  '/images.jpg',
];

export default function HomePage() {
  return (
    <main className="bg-black shadow-lg rounded-lg">

      {/* HERO com imagem de fundo profissional */}
      <section className="relative mt-24 flex items-center justify-center text-center p-4 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        
        {/* Imagem de fundo */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 m-6 rounded-xl bg-no-repeat bg-center bg-cover overflow-hidden"
          style={{
            backgroundImage: "url('/images.jpg')",
          }}
        >
          {/* Camada escura para contraste */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="relative z-10 bg-white bg-opacity-80 p-6 rounded-xl shadow-lg max-w-2xl m-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
            Tecnologia em engenharia de vidro
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl font-semibold">
            Transparência, inovação e estrutura para grandes obras.
          </p>
        </div>
      </section>

      {/* Seção Obras */}
      <section className=" text-center">
        <h2 className="text-5xl sm:text-6xl font-bold text-blue-700 mb-8">
          Obras
        </h2>
        <Carousel
          images={images}
          interval={2000}
          showIndicators={true}
          showButtons={true}
        />
      </section>
    </main>
  );
}
