'use client'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import ButtonPrimary from './Buttonprimary'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const [showNavbar, setShowNavbar] = useState(true)
  const lastScrollY = useRef(0)

  const logoagt = '/agtvidroslogo.svg'

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Serviços', href: '#services' },
    //{ name: 'Produtos', href: '/products' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Contato', href: '#contato' },
  ]

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY

      if (menuOpen) {
        setMenuOpen(false)
      }

      if (currentY > lastScrollY.current && currentY > 50) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <nav
      className={`bg-white shadow-md w-full fixed z-40 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className=" px-2 sm:px-6 lg:px-16 py-2">
        <div className="flex justify-between h-[4rem] items-center">
          {/* Logo */}
          <Link href="/">
            <h1 className="font-semibold text-blue-800 text-[25px]" >AGT</h1>
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
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-800 font-bold text-gray-500 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ButtonPrimary/>
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
  )
}

