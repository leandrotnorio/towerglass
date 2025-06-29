'use client';
import Image from 'next/image';
import React from 'react';
import Carousel from '../components/Carousel.jsx';
import TestimonialsCarousel from '../components/TestmonialsCarousel.jsx'
import ButtonPrimary from '@/components/Buttonprimary.jsx';

const images = [
  '/images.jpg',
  '/images.jpg',
  '/images.jpg',
  '/images.jpg',
];

const testmonials = [
  {
    name: "Leandro Tenorio",
    date: "07/10/2024",
    stars: 5,
    message: "Excelente serviço, muito satisfeito!",
    image: "/fotoperfil.jpg",
  },
  {
    name: "Maria Silva",
    date: "05/09/2024",
    stars: 4,
    message: "Muito bom, mas poderia melhorar o atendimento.",
    image: "/fotoperfil.jpg",
  },
  {
    name: "Carlos Souza",
    date: "12/08/2024",
    stars: 5,
    message: "Atendimento ótimo, recomendo!",
    image: "/fotoperfil.jpg",
  },
  {
    name: "João Oliveira",
    date: "22/07/2024",
    stars: 4,
    message: "Bom, mas poderia ter mais opções.",
    image: "/fotoperfil.jpg",
  },
];

export default function HomePage() {
  return (
    <section className="bg-white shadow-lg">

      {/* HERO com imagem de fundo profissional */}
      <div className="relative mt-[76px] flex items-center justify-center text-center  h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
        
        
        {/* Imagem de fundo */}
        <div
          className="absolute top-0 h-[30rem]   bg-no-repeat bg-center bg-cover overflow-hidden"
          style={{
            backgroundImage: "url('/guardacorpoescada.png')",
          }}
        > <div className='py-[4rem] mr-[100px]'>
            <h1 className="text-[25px] mb-4 sm:text-5xl font-extrabold text-blue-700">
              Descubra a sacada de como tornar seu ambiente em alta performance de luxo para crescimento tanto pessoal quanto empresarial
            </h1>
            <p className="text-white text-lg sm:text-xl font-semibold">
              Uma experiência única, que mudará sua vida pra sempre.
            </p>
            <ButtonPrimary/>
          </div>
          </div>
      </div>

      {/* Seção Obras */}
      <div className=" text-center mt-8">
        <Carousel 
        images={images}
        speed={1}
        showButtons={true}
        showIndicators={true}
        />
      </div>
      <div className='text-center'>
        <TestimonialsCarousel 
        reviews={testmonials}

        />
      </div>
    </section>
  );
}
