import React from 'react'
import { Calendar, Instagram, CheckCircle2 } from 'lucide-react'
import Button from './Button'

export default function Hero({ setHoveredIndex }){
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-cyan-200 rounded-full blur-[80px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white rounded-full border border-blue-100 shadow-sm animate-bounce-slow">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></span>
            <span className="text-slate-600 font-semibold text-xs tracking-wide uppercase">Nueva colección de Verano</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Tus uñas son el lienzo de <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">tu personalidad.</span>
          </h1>

          <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">Experimenta el cuidado profesional con técnicas de vanguardia. Desde diseños minimalistas hasta arte complejo, en un ambiente diseñado para ti.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button primary>
              <Calendar size={18} />
              Agendar Cita
            </Button>
            <Button>
              <Instagram size={18} />
              Ver Portafolio
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Productos Premium</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Esterilización Grado Médico</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500"/> Garantía de 7 días</div>
          </div>
        </div>
      </div>
    </section>
  )
}
