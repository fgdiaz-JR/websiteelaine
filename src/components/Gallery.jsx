import React, { useState } from 'react'

const IMAGES = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f8d2f3e6b4d9f6a8f2a3f9b1c4d5e6a',
  'https://images.unsplash.com/photo-1543163521-1bf539caa5a3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f6f9e454af7a8b4a1e1d6f3c2a4b8c0',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b9d0e6a3b5c7d9f0e1a2b3c4d5e6f7a',
  'https://images.unsplash.com/photo-1600180758890-59d9b6f04b86?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b8b1b3f8e8f0c3a2c3b5ca1fb9b7f2a',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8b9d0e6a3b5c7d9f0e1a2b3c4d5e6f7a'
]

export default function Gallery(){
  const [active, setActive] = useState(null)

  return (
    <section id="galeria" className="py-10">
      <h3 className="text-2xl font-semibold mb-6">Galería</h3>

      <div className="flex gap-3 overflow-x-auto py-2 div">
        {IMAGES.map((src,i) => (
          <img key={i} src={src} alt={`uñas-${i}`} onClick={() => setActive(src)} className="w-40 h-40 object-cover rounded-lg cursor-pointer shadow-sm" />
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <img src={active} alt="ampliada" className="max-h-[80vh] rounded-lg shadow-lg" />
        </div>
      )}
    </section>
  )
}
