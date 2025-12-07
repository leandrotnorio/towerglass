'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Building2, Home, DoorClosed, PanelsTopLeft, ShowerHead, Layers } from 'lucide-react';

const projetos = [
  {
    titulo: 'Fachada Corporativa',
    categoria: 'Comercial',
    imagem: '/imgs/espelhos.jpg',
    icone: Building2,
  },
  {
    titulo: 'Portas de Vidro Escritório',
    categoria: 'Comercial',
    imagem: '/imgs/img-guarda-corpo.jpg',
    icone: DoorClosed,
  },
  {
    titulo: 'Box Residencial',
    categoria: 'Residencial',
    imagem: '/imgs/img-personalisados.jpg',
    icone: ShowerHead,
  },
  {
    titulo: 'Sacada Envidraçada',
    categoria: 'Residencial',
    imagem: '/imgs/img-vidros-especiais.jpg',
    icone: PanelsTopLeft,
  },
  {
    titulo: 'Fachada de Loja',
    categoria: 'Comercial',
    imagem: '/imgs/espelhos.jpg',
    icone: Layers,
  },
  {
    titulo: 'Espelhos Decorativos',
    categoria: 'Residencial',
    imagem: '/imgs/img-box-banheiros.jpg',
    icone: Home,
  },
];

export default function ProjetosSection() {
  const [filtro, setFiltro] = useState('Todos');

  const projetosFiltrados =
    filtro === 'Todos' ? projetos : projetos.filter((p) => p.categoria === filtro);

  return (
    <section id='projetos' className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-[40px] font-medium text-blue-800 mb-3">Nossos Projetos</h2>
        <p className="text-gray-700 font-bold mb-10">
          Conheça alguns dos projetos que já realizamos com excelência.
        </p>

        {/* Botões de Filtro */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full flex gap-2 shadow-inner">
            {['Todos', 'Residencial', 'Comercial'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filtro === cat
                    ? 'bg-white text-blue-700 shadow-md'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {projetosFiltrados.map((projeto, index) => {
            const Icone = projeto.icone;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    fill
                    className="object-cover hover:brightness-105 transition-all duration-500"
                  />
                </div>

                <div className="p-5 flex items-center justify-between text-left">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{projeto.titulo}</h3>
                    <p className="text-sm text-gray-500">{projeto.categoria}</p>
                  </div>
                  <Icone className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
