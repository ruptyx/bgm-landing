'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Values', href: '#values' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-6 lg:px-8 py-2 lg:py-3
      bg-[#F3F3F3]/80 backdrop-blur-md border-b border-white/20
      transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="max-w-[1312px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/bgm.png"
            alt="BGM Logo"
            width={120}
            height={40}
            className="w-20 md:w-24 lg:w-28 h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-xs font-medium text-gray-700 hover:text-[#16467B] transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* CTA Buttons */}
        <div className="hidden lg:flex gap-2">
          {/* Contact Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="
              px-3 py-2 md:px-4 md:py-2
              text-xs md:text-sm
              font-medium
              text-[#16467B]
              border border-[#16467B]
              rounded-full
              hover:bg-[#16467B] hover:text-white
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#16467B] focus:ring-offset-2
            "
            aria-label="Contact us"
          >
            Contact
          </button>

          {/* Submit Button */}
          <button
            onClick={() => scrollToSection('#contact')}
            className="
              px-3 py-2 md:px-4 md:py-2
              text-xs md:text-sm
              font-medium
              text-white
              bg-[#16467B]
              rounded-full
              hover:bg-[#0f3559]
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-[#16467B] focus:ring-offset-2
            "
            aria-label="Submit"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-3 pb-3 border-t border-gray-200/50 bg-[#F3F3F3]/90 backdrop-blur-md">
          <div className="flex flex-col gap-2 mt-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-sm font-medium text-gray-700 hover:text-[#16467B] transition-colors duration-200 py-1"
              >
                {item.label}
              </button>
            ))}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-3 py-2 text-xs font-medium text-[#16467B] border border-[#16467B] rounded-full hover:bg-[#16467B] hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-3 py-2 text-xs font-medium text-white bg-[#16467B] rounded-full hover:bg-[#0f3559] transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}