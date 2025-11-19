import React from 'react'

export default function Button({ children, primary, className = '', onClick }){
  return (
    <button onClick={onClick} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 ${primary ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-blue-500/30 border border-transparent' : 'bg-white text-blue-600 border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50'} ${className}`}>
      {children}
    </button>
  )
}
