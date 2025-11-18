import React from 'react'
import { IoHomeOutline, IoPersonOutline, IoMailOutline } from 'react-icons/io5'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow">E</div>
          <div>
            <h1 className="text-lg font-semibold">Elaine</h1>
            <p className="text-sm text-gray-500">Salón de Uñas</p>
          </div>
        </div>

        <nav>
          <ul className="flex items-center gap-4">
            <li className="">
              <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md text-blue-600 hover:bg-blue-50">
                <span className="icon"><IoHomeOutline size={20} /></span>
                <span className="text">Inicio</span>
              </a>
            </li>
            <li>
              <a href="#servicios" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                <span className="icon"><IoPersonOutline size={20} /></span>
                <span className="text">Servicios</span>
              </a>
            </li>
            <li>
              <a href="#galeria" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
                <span className="icon"><IoMailOutline size={20} /></span>
                <span className="text">Galería</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
