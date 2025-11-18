import React from 'react'

const services = [
  { id: 1, name: 'Manicura Clásica', price: '$15' },
  { id: 2, name: 'Manicura con Gel', price: '$25' },
  { id: 3, name: 'Decoración (por uña)', price: '$3' },
  { id: 4, name: 'Pedicura', price: '$20' },
  { id: 5, name: 'Retiro de Gel', price: '$10' }
]

export default function Servicios(){
  return (
    <section id="servicios" className="py-10">
      <h3 className="text-2xl font-semibold mb-6">Servicios y Precios</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map(s => (
          <div key={s.id} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
            <h4 className="font-medium text-lg">{s.name}</h4>
            <p className="text-blue-600 font-semibold mt-2">{s.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
