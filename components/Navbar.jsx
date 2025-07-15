'use client'
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'; // Adicionando faBars para o menu

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const buttonRef = useRef(null);


  const logoagt = '/agtvidroslogo.svg';

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Nossos Serviços', href: '/services' },
    { name: 'Produtos', href: '/products' },
    { name: 'Tecnologias', href: '#tecnologias' },
    { name: 'Sobre nós', href: '/about' },
    { name: 'Contato', href: '#contato' },
  ];

useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;

    if (menuOpen) {
      setMenuOpen(false);
    }

    if (currentY > lastScrollY.current) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    lastScrollY.current = currentY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [menuOpen]);




  return (
    <nav className={`bg-blue-700 shadow-md w-full fixed z-40 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-[4rem] items-center">
          {/* Logo */}
          <Link href="/">
            <Image src={logoagt} alt="Logo" width={150} height={10} />
          </Link>

          {/* Botão Mobile */}
          <div className="md:hidden pr-0">
            <button
    ref={buttonRef}
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-2xl focus:outline-none"
    aria-label="Toggle menu"
  >
    {menuOpen ? (
      <FontAwesomeIcon icon={faTimes} className="text-white" />
    ) : (
      <FontAwesomeIcon icon={faBars} className="text-white" />
    )}
  </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-red-700 text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
        ref={menuRef}
          className={`md:hidden transform transition-all transition-ease-linear duration-5000 bg-blue-700 px-6 pt-6 space-y-7 shadow-md fixed z-50 top-[60px] sm:top-[59px] md:top-[44px] right-0 w-1/2 h-[27rem] ${
            menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}

        >
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
  );
}
