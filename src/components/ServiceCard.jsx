import React from 'react'
import { Clock } from 'lucide-react'

export default function ServiceCard({ title, price, duration, description, popular }){
  return (
    <div className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer overflow-hidden">
      {popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-500 to-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">POPULAR</div>
      )}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{title}</h3>
        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold shadow-sm">{price}</span>
      </div>
      <p className="text-slate-500 mb-4 text-sm leading-relaxed">{description}</p>
      <div className="flex items-center text-slate-400 text-xs font-medium border-t border-slate-50 pt-4 mt-auto">
        <Clock size={14} className="mr-1 text-cyan-500" />
        {duration}
      </div>
    </div>
  )
}
