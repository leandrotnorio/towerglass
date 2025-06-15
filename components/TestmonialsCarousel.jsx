import Image from "next/image";
import React, { useState } from "react";

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
    stars: 5,
    message: "obra finalizada no prazo, comprometimento e eficiencia na entrega do serviço",
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
    stars: 5,
    message: "há muito tempo não recebia um serviço com execelencia aqui na minha empresa agt superou !!!",
    image: "/fotoperfil.jpg",
  },
  {
    name: "gustavo ferreira",
    date: "22/07/2024",
    stars: 4,
    message: "Bom, mas poderia ter mais opções.",
    image: "/fotoperfil.jpg",
  },
  {
    name: "Arthur Oliveira",
    date: "22/07/2024",
    stars: 5,
    message: "visitei ontem o projeto do comercial ficou show!!!",
    image: "/fotoperfil.jpg",
  },
];

export default function TestimonialsCarousel(){
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent((current + 1) % testmonials.length);
    }

    const prev = () => {
        setCurrent((current - 1 + testmonials.length) % testmonials.length); 
    }

    const { name, date, stars, message, image } = testmonials[current]

    return (
        <div className='p-6 bg-gray-200 text-center'>
            <h2 className='text-5xl text-center flex py-4 sm:text-6xl font-bold text-blue-700'>DEPOIMENTOS</h2>
            <p></p>
            <div className="flex justify-center mb-4">
                <Image 
                alt="Logo do Google"
                src="/logogoogle.svg"
                width={100}
                height={40}
                />
            </div>
            <div className="flex justify-center mb-4">
                {Array.from({length:5}).map((_, i) => (
                    <Image 
                    key={i}
                    src="/f.svg"
                    alt="estrela"
                    width={35}
                    height={24}
                    className={i < stars ? '' : 'opacity-30'}
                    />
                ))}
            </div>
            <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).at((_, i) => ( <Image 
                    key={i}
                    src="/f.svg"
                    alt="estrela"
                    width={30}
                    height={24}
                    className={i < stars ? '' : 'opacity-30'}
                    />))}
            </div>
                <p className="mb-4 text-black">Com base em {testmonials.length} avaliações</p>
                <div className="w-full sm:w-80 md:w-96 lg:w-1/3 py-6 bg-white rounded-lg shadow-md flex flex-col items-center">

                    <div className="flex justify-start items-center space-x-3">
                        <Image src={image} alt="foto da pessoa" width={55} height={0} className="rounded-full mb-4"/>
                        <p className="font-semibold  flex justify-center items center">{name} <span className="text-gray-500 ml-3">{date}</span></p>
                    </div>
                        <p className="italic m-2 mb-4">"{message}"</p>
                    <div className="flex justify-center">{Array.from({ length: 5 }) .map((_, i) => (<Image 
                     key={i}
                     src="/f.svg"
                     alt="estrela"
                     width={20}
                     height={24}
                     className={i < stars ? '' : 'opacity-30'}/>))}
                   </div>
                    <div className="flex justify-center mt-4">
                    </div>
                    </div>
                    <button onClick={prev} className="px-3 py-1 mr-2 my-6 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition">anterior</button>
                    <button onClick={next} className="px-3 py-1 ml-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition">proximo</button>
            </div>
    )
}







/*import React, { useState } from 'react';
import Image from 'next/image';

const TestimonialsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const reviews = reviews[currentIndex]; // Obtendo o review atual

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="relative w-full sm:w-80 md:w-96 lg:w-1/3">
        <div className="flex justify-center items-center">
          {/* Card de Avaliação */
          //<TestimonialsCarousel reviews={reviews} />
       // </div>//

       // {/* Controles do Carrossel */}//
       /* <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
          <button
            onClick={prev}
            className="p-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            &#8249;
          </button>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
          <button
            onClick={next}
            className="p-2 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel*/
