import React from 'react'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-semibold">Elaine</h4>
          <p className="text-sm text-gray-500">Salón de Uñas • Calidad y estilo</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaInstagram /></a>
          <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF/></a>
        </div>
      </div>
    </footer>
  )
}
