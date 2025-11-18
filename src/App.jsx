import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <Servicios />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
