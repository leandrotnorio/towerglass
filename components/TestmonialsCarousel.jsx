import Image from "next/image";
import React, { useState } from "react";

const testmonials = [
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom"
    },   
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom"
    },
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom"
    },
    {
        name: "Leandro Tenorio",
        date: "07/10/2024",
        stars: 5,
        message: "Muito bom"
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

    const { name, date, stars, message } = testmonials[current]

    return (
        <div className='max-w-md mx-auto p-6 bg-white rounded-lg'>
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
                    width={24}
                    height={24}
                    className={i < stars ? '' : 'opacity-30'}
                    />
                ))}
            </div>

        </div>
    )
}