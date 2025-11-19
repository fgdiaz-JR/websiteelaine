import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  { id: 1, title: 'Manicura Gel Soft', price: '$45.000', duration: '60 min', description: 'Alineación de la uña natural (kapping) y esmaltado en gel semipermanente.', popular: true },
  { id: 2, title: 'Esculpidas Acrílico', price: '$90.000', duration: '120 min', description: 'Extensión estructural con polímeros de alta gama.' },
  { id: 3, title: 'Nail Art Premium', price: '+$15.000', duration: 'Varía', description: 'Diseños a mano alzada, encapsulados, efectos aurora, cromo y cristales.' },
  { id: 4, title: 'Pedicura Spa Deluxe', price: '$65.000', duration: '75 min', description: 'Relajación total con exfoliación y masaje.' },
  { id: 5, title: 'Soft Gel Tips', price: '$75.000', duration: '90 min', description: 'Sistema de extensión ligero y natural.', popular: true },
  { id: 6, title: 'Retiro & Detox', price: '$25.000', duration: '40 min', description: 'Retiro seguro con torno y tratamiento hidratante.' }
]

export default function Services(){
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Menú de Servicios</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-4"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">Calidad y estilo en cada detalle. Todos nuestros servicios incluyen manicura rusa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(s => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
