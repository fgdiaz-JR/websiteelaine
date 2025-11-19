import React, { useState } from 'react'
import { Instagram } from 'lucide-react'
import Button from './Button'

const galleryImages = [
  { id: 1, url: 'https://placehold.co/800x600/2563EB/ffffff?text=Blue+Nails+1', alt: 'Manicura azul' },
  { id: 2, url: 'https://placehold.co/800x600/06B6D4/ffffff?text=Soft+Gel+2', alt: 'Soft Gel Tips' },
  { id: 3, url: 'https://placehold.co/800x600/0369A1/ffffff?text=Acrilico+3', alt: 'Uñas Acrílico' },
  { id: 4, url: 'https://placehold.co/800x600/38BDF8/ffffff?text=Nail+Art+4', alt: 'Nail Art' },
  { id: 5, url: 'https://placehold.co/800x600/1D4ED8/ffffff?text=Pedicura+5', alt: 'Pedicura' }
]

export default function Gallery(){
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-12">
          <Instagram className="mx-auto mb-4 text-cyan-400" size={40} />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Inspiración y Diseños Recientes</h2>
          <p className="text-blue-200 text-lg">Explora nuestro portafolio. ¡Pasa el mouse sobre una imagen para verla!</p>
        </div>

        <div className="flex justify-center max-w-7xl mx-auto h-[400px] overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/30">
          {galleryImages.map((image, index) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              className={`h-full object-cover border-2 border-blue-500 rounded-2xl cursor-pointer transition-all duration-700 ease-in-out ${hoveredIndex === index ? 'w-full filter saturate-100 shadow-xl shadow-cyan-500/50' : 'w-10 filter grayscale hover:filter-none'} ${index > 0 ? 'ml-1' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setActive(image.url)}
            />
          ))}
        </div>

        <Button className="bg-white text-slate-900 hover:bg-cyan-50 border-none mx-auto mt-12">Ver Feed Completo</Button>

        {active && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={() => setActive(null)}>
            <img src={active} alt="ampliada" className="max-h-[80vh] rounded-lg shadow-lg" />
          </div>
        )}
      </div>
    </section>
  )
}
