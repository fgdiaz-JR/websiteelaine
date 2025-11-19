import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import TestimonialCard from './components/TestimonialCard'

const App = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) })
    }, observerOptions)
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-cyan-200 selection:text-blue-900">
      <Navbar scrolled={scrolled} />
      <main className="pt-16">
        <Hero />
        <Services />
        <Gallery />

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Clientas Felices</h2>
                <p className="text-slate-500">No solo hacemos uñas, creamos confianza. Mira lo que dicen de nosotros.</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <div className="flex text-yellow-400">{[1,2,3,4,5].map(i => <span key={i}>★</span>)}</div>
                <span className="font-bold text-slate-800">4.9/5.0</span>
                <span className="text-slate-400">(500+ Reseñas)</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard name="Sofía Rodríguez" rating={5} text="¡Increíble atención! Elaine replicó a la perfección." />
              <TestimonialCard name="Valentina M." rating={5} text="Superó mis expectativas con limpieza y técnica." />
              <TestimonialCard name="Camila Torres" rating={4} text="Soft Gel me duró 4 semanas intactas." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
