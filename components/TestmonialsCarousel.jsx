import Image from "next/image";
import React, { useState } from "react";

const testmonials = [
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom",
        image: "/fotoperfil.jpg"
    },   
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom",
        image: "/fotoperfil.jpg"
    },
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom",
        image: "/fotoperfil.jpg"
    },
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom",
        image: "/fotoperfil.jpg"
    }
]

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
        <div className='mx-auto p-6 bg-gray-400'>
            <h2></h2>
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
                <p className="mb-4 text-white">Com base em {testmonials.length} avaliações</p>
                <div className="py-6 bg-gray-200 rounded-lg shadow-lg text-center">
                    
                    <Image src={image} alt="foto da pessoa" width={50} height={24} className="rounded-full ms-6 mb-4 flex justify-start"/>
                    <p className="font-semibold">{name} <span className="text-gray-500 ml-1">{date}</span></p>
                    
                    <p className="italic">"{message}"</p>
                    <div className="flex justify-center mb-2">{Array.from({ length: 5 }) .map((_, i) => (<Image 
                    key={i}
                    src="/f.svg"
                    alt="estrela"
                    width={20}
                    height={24}
                    className={i < stars ? '' : 'opacity-30'}
                    />))}</div>
                    <div className="flex justify-center mt-4">
                    </div>
                 </div>
                <button onClick={prev} className="px-3 py-1 mr-2 my-6 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition">anterior</button>
                <button onClick={next} className="px-3 py-1 ml-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition">proximo</button>
        </div>
    )
}