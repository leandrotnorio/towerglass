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
      <div className='p-6 lg:justify-items-center bg-gray-200 text-center'>
        <h2 className='text-5xl text-center flex justify-center py-4 sm:text-6xl font-bold text-blue-700'>DEPOIMENTOS</h2>
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
              className="opacity-100"
            />
          ))}
        </div>
        <p className="mb-16 text-black">Com base em 2.845 avaliações</p>
        <div className="w-full overflow-hidden mx-auto sm:w-[500px] md:w-96 lg:w-1/3 sm: py-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
          <Image alt="Logo do Google" src="/googlesemfundo1.svg" width={30} height={40} className="relative bottom-4 right-[125px] sm:bottom-2 sm:right-32 z-10"/>
          <div className="flex flex-col absolute justify-start items-center space-x-4">
          <Image src={image} alt="foto da pessoa" width={80} height={0} className="rounded-full mb-4 -mt-20"/>
            <p className="font-bold text-xl  flex justify-center items center">{name}</p>
            <p className="text-gray-600 text-lg">{date}</p>
          </div>
          <p className="font-normal text-xl mx-4 mt-12 mb-4">"{message}"</p>
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
};
