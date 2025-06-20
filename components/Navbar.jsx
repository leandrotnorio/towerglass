'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Nossos Serviços', href: '/services' },
  { name: 'Produtos', href: '/products' },
  { name: 'Tecnologias', href: '#tecnologias' },
  { name: 'Sobre nós', href: '/about' },
  { name: 'Contato', href: '#contato' },
]

  useEffect(() => {
    const el = menuRef.current
    if (el) {
      if (menuOpen) {
        // Abre: maxHeight igual à altura total do conteúdo para animar a expansão
        el.style.maxHeight = el.scrollHeight + 'px'
      } else {
        // Fecha: maxHeight zero para animar recolhimento
        el.style.maxHeight = '0px'
      }
    }
  }, [menuOpen])


  return (
    <nav className="bg-blue-700 shadow-md w-full fixed z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-[5rem] items-center">

          {/* Logo */}
            <div className="bg-blue-800 rounded-xl px-3 py-3 text-xl font-bold text-white">
              <Link href="/">AGT Vidros</Link>
            </div>

          {/* Botão Mobile */}
        <div className="sm:hidden pr-0">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>


          {/* Menu Desktop */}
          <div className="hidden sm:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-red-700 text-white transition">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="sm:hidden transition-[max-height] duration-300 ease-in-out bg-blue-800 px-6 pt-6 space-y-7 shadow-md fixed z-50 top-[79px] right-0 w-1/2 h-[27rem]">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-xl font-extrabold text-white hover:text-blue-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
