import React from 'react'

export default function Hero(){
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Elaine — Salón de Uñas</h2>
          <p className="text-gray-600 mb-6">Cuida tus uñas con estilo: diseños modernos, esmaltes de calidad y un equipo profesional que entiende tu estilo.</p>
          <div className="flex gap-3">
            <a href="#servicios" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Reservar cita</a>
            <a href="#galeria" className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-100">Ver galería</a>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1600180758890-59d9b6f04b86?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b8b1b3f8e8f0c3a2c3b5ca1fb9b7f2a" alt="uñas" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  )
}
