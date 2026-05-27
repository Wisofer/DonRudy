'use client'

import React, { useState } from 'react'
import { Star, Check, ChevronLeft, ChevronRight, MessageSquarePlus, Quote, X } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  location: string
  shopName: string
  text: string
  productBought: string
  stars: number
  badge: string
}

export default function Testimonials() {
  // Carousel State (used on mobile only)
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  // Form State
  const [formName, setFormName] = useState('')
  const [formShop, setFormShop] = useState('')
  const [formLocation, setFormLocation] = useState('')
  const [formProduct, setFormProduct] = useState('Mini-Curso en Video')
  const [formRating, setFormRating] = useState(5)
  const [formText, setFormText] = useState('')

  const testimonials: Testimonial[] = [
    {
      id: 'testimonial-1',
      name: 'Doña Xiomara Toruño',
      location: 'León, Nicaragua',
      shopName: 'Pulpería El Rosario',
      text: '“Tenía un gran problema con productos vencidos en bodega, especialmente panes y embutidos. Con la guía en PDF de Nego Control, mi hijo imprimió las hojas de control físico y ahora no se nos pasa una sola fecha en el mostrador. ¡Salvamos más de C$ 4,500 en mermas en el primer mes!”',
      productBought: 'Guía Sistema Nego Control',
      stars: 5,
      badge: 'Tienda Controlada'
    },
    {
      id: 'testimonial-2',
      name: 'Don Humberto Pastora',
      location: 'Matagalpa, Nicaragua',
      shopName: 'Mini-Súper La Amistad',
      text: '“El mini-curso en videos de Don Rudy es excelente. Paso muy ocupado atendiendo en el mostrador, pero ponía los videos cortos de 5 minutos en el celular mientras ordenaba los estantes. Apliqué su técnica de negociación con el camión repartidor de gaseosas y logré mejores descuentos. ¡Se paga solo!”',
      productBought: 'Mini-Curso en Video',
      stars: 5,
      badge: 'Pulpero Verificado'
    },
    {
      id: 'testimonial-3',
      name: 'Marlon Gutiérrez',
      location: 'Managua, Riguero',
      shopName: 'Pulpería San Antonio',
      text: '“La mentoría 1-a-1 con Don Rudy fue clave. Analizó las fotos de mis exhibidores por videollamada y me recomendó reacomodar los dulces y snacks justo al lado de la caja de cobro. Las compras por impulso se dispararon de inmediato. ¡Ahora la gente no se va sin llevar algo extra!”',
      productBought: 'Mentoría VIP 1-a-1',
      stars: 5,
      badge: 'Éxito Rotundo'
    }
  ]

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleOpenModal = () => {
    setFormName('')
    setFormShop('')
    setFormLocation('')
    setFormProduct('Mini-Curso en Video')
    setFormRating(5)
    setFormText('')
    setSubmitted(false)
    setIsModalOpen(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName || !formShop || !formLocation || !formText) {
      alert('Por favor completa todos los campos para inspirar a otros pulperos.')
      return
    }
    setSubmitted(true)
  }

  const activeT = testimonials[activeIndex]

  return (
    <section id="testimonials" className="py-20 bg-slate-50/50 border-y border-slate-200/40 relative z-30 select-none">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        
        {/* Title block */}
        <div className="space-y-3 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Pulperos que cambiaron sus reglas de negocio
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Comerciantes locales en toda Nicaragua que tomaron el control de su inventario, eliminaron mermas silenciosas y dispararon sus ventas diarias.
          </p>
        </div>

        {/* 1. DESKTOP VIEW: Beautiful 3-Column Grid (hidden on mobile/tablet) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 items-stretch pt-4 text-left">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-150 rounded-3xl p-6.5 flex flex-col justify-between relative overflow-hidden hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Background Quote Watermark */}
              <Quote className="absolute right-4 top-4 w-20 h-20 text-slate-100/50 pointer-events-none rotate-180 transform" />
              
              <div className="space-y-4 relative z-10">
                
                {/* Header: Stars & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] bg-slate-50 border border-slate-200 text-slate-500 font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {t.badge}
                  </span>
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-slate-600 text-xs leading-relaxed font-semibold italic">
                  {t.text}
                </p>

              </div>

              {/* User details */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                    {t.name}
                    <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-emerald-600 shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  </h4>
                  <p className="text-[9px] text-slate-400 font-bold mt-0.5">
                    {t.shopName} · {t.location}
                  </p>
                </div>
                <span className="text-[8px] bg-blue-50 text-blue-700 font-black px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
                  {t.productBought}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* 2. MOBILE VIEW: 1-Card Carousel Frame (hidden on desktop) */}
        <div className="block md:hidden space-y-6">
          <div className="relative max-w-2xl mx-auto px-10 py-2">
            
            {/* Active Card Card */}
            <div className="bg-white border border-slate-150 rounded-3xl p-6 shadow-xl shadow-slate-100 relative overflow-hidden text-left animate-fadeIn">
              
              <Quote className="absolute right-4 top-4 w-24 h-24 text-slate-100/50 pointer-events-none rotate-180 transform" />
              
              <div className="space-y-5 relative z-10">
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(activeT.stars)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] bg-slate-50 border border-slate-200 text-slate-500 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeT.badge}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold italic">
                  {activeT.text}
                </p>

                <div className="pt-5 border-t border-slate-100 flex flex-col justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      {activeT.name}
                      <span className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-250 flex items-center justify-center text-emerald-600 shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    </h4>
                    <p className="text-[9px] text-slate-400 font-bold mt-0.5">
                      {activeT.shopName} · {activeT.location}
                    </p>
                  </div>
                  <span className="self-start text-[8px] bg-blue-50 text-blue-700 font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {activeT.productBought}
                  </span>
                </div>

              </div>
            </div>

            {/* Left Arrow Controller */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-slate-350 transition-all cursor-pointer active:scale-95 z-20"
              title="Anterior testimonio"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow Controller */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-slate-350 transition-all cursor-pointer active:scale-95 z-20"
              title="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Carousel Indicator Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Share Experience CTA Button (Visible to all) */}
        <div className="pt-4 animate-fadeIn">
          <button
            type="button"
            onClick={handleOpenModal}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-blue-600 hover:text-blue-700 font-extrabold text-xs tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-blue-500" />
            Compartir mi Experiencia
          </button>
        </div>

      </div>

      {/* --- SIMULATED SUBMIT TESTIMONIAL MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-[500px] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-950 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Step 1: Form Inputs */}
            {!submitted ? (
              <div className="space-y-6">
                <div className="text-left">
                  <span className="text-[9px] tracking-wider bg-blue-50 border border-blue-100 text-blue-700 font-extrabold px-3 py-1 rounded-full uppercase">
                    CUÉNTANOS TU CASO DE ÉXITO
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">
                    Inspirá a otros Pulperos
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    ¿Te ayudaron las plantillas o videos de Don Rudy? Comparte tu experiencia real en el comercio.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Row 1: Name */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Tu Nombre y Apellido</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Doña Maria Borge"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* Row 2: Shop and Location */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Nombre de tu Negocio</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Pulpería La Bendición"
                        value={formShop}
                        onChange={(e) => setFormShop(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold"
                      />
                    </div>
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Ciudad / Departamento</label>
                      <input
                        type="text"
                        required
                        placeholder="Ej: Masaya, Nicaragua"
                        value={formLocation}
                        onChange={(e) => setFormLocation(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Row 3: Product Select */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Herramienta Adquirida</label>
                      <select
                        value={formProduct}
                        onChange={(e) => setFormProduct(e.target.value)}
                        className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold cursor-pointer"
                      >
                        <option value="Mini-Curso en Video">Mini-Curso en Video</option>
                        <option value="Guía Sistema Nego Control">Guía Sistema Nego Control</option>
                        <option value="Mentoría VIP 1-a-1">Mentoría VIP 1-a-1</option>
                      </select>
                    </div>
                    
                    {/* Interactive Clickable Stars */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Tu Calificación</label>
                      <div className="flex gap-1 h-9 items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormRating(star)}
                            className="text-slate-300 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                            title={`Calificar con ${star} estrellas`}
                          >
                            <Star
                              className={`w-5 h-5 ${
                                star <= formRating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Review Message */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Tu Historia / Comentario</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Ej: Tenía muchas pérdidas en quesos vencidos. Gracias al control físico de entradas y salidas que aprendí de Don Rudy, ahora..."
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                      className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:bg-white focus:border-blue-500 outline-none transition-all font-semibold resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.98] cursor-pointer mt-2"
                  >
                    Enviar mi Testimonio
                  </button>
                </form>
              </div>
            ) : (
              /* Step 2: Success submission feedback screen */
              <div className="py-8 px-4 text-center space-y-5 animate-scaleIn">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900">
                    ¡Gracias por compartir, compa!
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto font-semibold">
                    Tu historia de éxito ha sido enviada para la revisión de Don Rudy. Pronto inspirará a miles de pulperos a lo largo y ancho de Nicaragua.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200/60 p-4.5 rounded-2xl text-left max-w-sm mx-auto space-y-1">
                  <h5 className="text-[10px] font-black text-slate-700 uppercase tracking-wider">Tu testimonio enviado:</h5>
                  <p className="text-[11px] text-slate-600 font-semibold italic">“{formText}”</p>
                  <p className="text-[9px] text-slate-400 font-bold mt-2 text-right">
                    — {formName}, {formShop}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Cerrar Ventana
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  )
}
