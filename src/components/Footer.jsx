import React from 'react'
import { Instagram, Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'

export default function Footer(){
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-16 pb-8 mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900">ELAINE</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Elevando el estándar del cuidado de uñas. Un espacio donde la técnica profesional se encuentra con el arte moderno.</p>
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"><Instagram size={20} /></div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors cursor-pointer"><Mail size={20} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Explorar</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-slate-500 hover:text-blue-600 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#gallery" className="text-slate-500 hover:text-blue-600 transition-colors">Galería de Diseños</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">Política de Citas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Visítanos</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-slate-500 group"><MapPin size={18} className="mr-3 text-blue-600 flex-shrink-0 group-hover:animate-bounce"/> <span>Av. Siempre Viva 123, Local 4<br/>Ciudad Capital</span></li>
              <li className="flex items-center text-slate-500 group"><Phone size={18} className="mr-3 text-blue-600 flex-shrink-0"/> <span className="group-hover:text-blue-600 transition-colors">+57 300 123 4567</span></li>
              <li className="flex items-center text-slate-500"><Clock size={18} className="mr-3 text-blue-600 flex-shrink-0"/> <span>Lun - Sab: 9:00 AM - 7:00 PM</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Recibe 10% OFF en tu primera cita al suscribirte.</p>
            <div className="flex shadow-sm rounded-lg overflow-hidden">
              <input type="email" placeholder="Tu email" className="flex-1 px-4 py-2.5 bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
              <button className="bg-blue-600 text-white px-4 hover:bg-blue-700 transition-colors"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Elaine Nails Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-blue-600">Privacidad</a><a href="#" className="hover:text-blue-600">Términos</a></div>
        </div>
      </div>
    </footer>
  )
}
