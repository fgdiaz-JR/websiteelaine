import React from 'react'
import { Home, List, Image, Mail } from 'lucide-react'
import Button from './Button'

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Servicios', href: '#services' },
  { name: 'Galería', href: '#gallery' },
  { name: 'Contacto', href: '#contact' }
]

export default function Navbar({ scrolled }){
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-16">
          <a href="#home" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-lg">E</div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">ELAINE</span>
              <span className="block text-[10px] text-cyan-600 tracking-[0.2em] uppercase font-bold -mt-1 ml-0.5">Nails Studio</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors relative group">
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button primary className="px-5 py-2 text-sm">Reservar</Button>
          </div>

          <div className="md:hidden w-8 h-8"></div>
        </div>
      </div>
    </nav>
  )
}
