'use client'

import React, { useState, useEffect } from 'react'
import {
  BookOpen,
  FileSpreadsheet,
  Users,
  Check,
  ShoppingCart,
  X,
  CreditCard,
  ArrowRight,
  Loader2,
  Download,
  FileText,
  Play
} from 'lucide-react'
import { Product } from '@/lib/types'
import { products } from '@/lib/data'

interface StoreSectionProps {
  cart: Product[]
  setCart: React.Dispatch<React.SetStateAction<Product[]>>
  checkoutProduct: Product | null
  setCheckoutProduct: (product: Product | null) => void
  triggerToast: (msg: string) => void
}

export default function StoreSection({
  cart,
  setCart,
  checkoutProduct,
  setCheckoutProduct,
  triggerToast
}: StoreSectionProps) {
  // Checkout Steps State
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal')
  const [paymentStep, setPaymentStep] = useState<'form' | 'loading' | 'success'>('form')

  // Form Inputs
  const [checkoutName, setCheckoutName] = useState('')
  const [checkoutEmail, setCheckoutEmail] = useState('')
  const [checkoutPhone, setCheckoutPhone] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [cardFocused, setCardFocused] = useState(false)
  const [invoiceId, setInvoiceId] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Map icon strings to dynamic Lucide icons
  const renderProductIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className="w-6 h-6 text-blue-600" />
      case 'pdf':
        return <FileText className="w-6 h-6 text-red-500" />
      case 'spreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
      case 'users':
        return <Users className="w-6 h-6 text-cyan-600" />
      case 'video':
        return <Play className="w-6 h-6 text-blue-600 fill-blue-600/10" />
      default:
        return <BookOpen className="w-6 h-6 text-blue-600" />
    }
  }

  const handleAddToCart = (product: Product) => {
    if (cart.find((item) => item.id === product.id)) {
      triggerToast(`"${product.name}" ya está listo para comprar en tu orden.`)
      return
    }
    setCart([...cart, product])
    triggerToast(`🛒 ¡"${product.name}" agregado a tu orden de compra en Córdobas!`)
  }

  const handleOpenCheckout = (product: Product) => {
    setCheckoutName('')
    setCheckoutEmail('')
    setCheckoutPhone('')
    setCardNumber('')
    setCardExpiry('')
    setCardCvv('')
    setPaymentStep('form')
    setCheckoutProduct(product)
  }

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault()

    if (!checkoutName || !checkoutEmail || !checkoutPhone) {
      triggerToast('⚠️ Por favor completa tus datos básicos de contacto.')
      return
    }

    if (paymentMethod === 'card' && (!cardNumber || !cardExpiry || !cardCvv)) {
      triggerToast('⚠️ Por favor completa los datos de tu tarjeta simulada.')
      return
    }

    setPaymentStep('loading')

    setTimeout(() => {
      const randomFolio = 'DR-NI-' + Math.floor(100000 + Math.random() * 900000)
      setInvoiceId(randomFolio)
      setPaymentStep('success')

      if (checkoutProduct) {
        triggerToast(`🎉 ¡Pago Simulado Exitoso de C$ ${checkoutProduct.price.toLocaleString()} Córdobas!`)
      }
    }, 1800)
  }

  return (
    <section id="store" className="py-24 max-w-7xl mx-auto px-6">
      
      {/* Section Header */}
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900">
          Aprende a Optimizar tu Comercio Local
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm">
          Herramientas prácticas adaptadas a la realidad del comercio. Elige tu herramienta, simula el pago y obtén tu recibo en Córdobas.
        </p>
      </div>

      {/* Catalog Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {products.map((product) => {
          // Determine clean minimalist inline badge classes
          let badgeStyle = 'bg-blue-50 text-blue-700 border-blue-150'
          if (product.id === 'ebook-pulpero') {
            badgeStyle = 'bg-amber-50 text-amber-700 border-amber-200/60'
          } else if (product.id === 'software-nego-ia') {
            badgeStyle = 'bg-blue-50 text-blue-700 border-blue-200/60'
          } else if (product.id === 'mentoria-vip') {
            badgeStyle = 'bg-rose-50 text-rose-700 border-rose-200/60'
          }

          const savings = product.priceOriginal - product.price

          return (
            <div
              key={product.id}
              className="bg-white border border-slate-150 rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative group hover:border-blue-500/20 hover:shadow-xl transition-all duration-300 flex-1"
            >
              <div className="space-y-5">
                
                {/* Header Row: Inline Badge & Rounded Square Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100/60 text-blue-600">
                    {renderProductIcon(product.iconType)}
                  </div>
                  {product.tag && (
                    <span className={`px-2.5 py-1 text-[9px] font-black tracking-widest uppercase rounded-full border ${badgeStyle}`}>
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <div className="space-y-1.5 text-left">
                  <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">
                    {product.description}
                  </p>
                </div>

                {/* Price tag */}
                <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                  <div className="text-left">
                    <p className="text-2xl font-black text-slate-900 tracking-tight">
                      C$ {product.price.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                      Moneda Nacional
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 line-through font-bold">C$ {product.priceOriginal}</p>
                    <span className="text-[9px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200/50 px-2 py-0.5 rounded-md mt-1 inline-block uppercase tracking-wider">
                      Ahorra C$ {savings}
                    </span>
                  </div>
                </div>

                {/* Checklist of Benefits */}
                <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-bold text-left leading-normal">
                      <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* CTA Buttons */}
              <div className="mt-8 grid grid-cols-12 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="col-span-3 py-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-350 hover:bg-slate-100/50 text-slate-600 hover:text-slate-950 transition-all flex items-center justify-center cursor-pointer active:scale-95 shadow-sm"
                  title="Agregar al carrito"
                >
                  <ShoppingCart className="w-4.5 h-4.5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenCheckout(product)}
                  className="col-span-9 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 rounded-2xl text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer text-center active:scale-95 flex items-center justify-center gap-1.5"
                >
                  Comprar Ahora
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )
        })}
      </div>

      {/* --- SIMULATED CHECKOUT DIALOG MODAL --- */}
      {checkoutProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-2xl p-5 sm:p-7 md:p-8 scrollbar-thin">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setCheckoutProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-950 transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* STEP 1: BILLING DETAILS FORM */}
            {paymentStep === 'form' && (
              <div className="space-y-6">
                <div className="text-left pr-10">
                  <span className="text-[9px] tracking-wider bg-blue-50 border border-blue-100 text-blue-700 font-extrabold px-3 py-1 rounded-full uppercase">
                    SIMULADOR DE CHECKOUT EXCLUSIVO
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-2">
                    Adquirir: {checkoutProduct.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed font-semibold">
                    Esto es una simulación de compra pedagógica. Completa tus datos para emitir un recibo digital en Córdobas de Don Rudy.
                  </p>
                </div>

                <form onSubmit={handleSimulatePayment} className="space-y-6">
                  
                  {/* Part 1: Contact Details */}
                  <div className="space-y-3 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">1. Datos de Contacto</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Nombre Completo</label>
                        <input
                          type="text"
                          required
                          value={checkoutName}
                          onChange={(e) => setCheckoutName(e.target.value)}
                          placeholder="Juan Pérez"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none transition-all font-semibold"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Correo Electrónico</label>
                        <input
                          type="email"
                          required
                          value={checkoutEmail}
                          onChange={(e) => setCheckoutEmail(e.target.value)}
                          placeholder="juan.perez@gmail.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none transition-all font-semibold"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Teléfono Móvil (WhatsApp)</label>
                      <input
                        type="text"
                        required
                        value={checkoutPhone}
                        onChange={(e) => setCheckoutPhone(e.target.value)}
                        placeholder="+505 8888 8888"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:border-blue-500 focus:outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Part 2: Payment Provider Selection Tabs */}
                  <div className="space-y-3 pt-2 text-left">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">2. Método de Pago</h4>
                    <div className="grid grid-cols-2 gap-4">
                      
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`p-3.5 sm:p-4 rounded-2xl border text-center font-bold text-xs transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                          paymentMethod === 'paypal'
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350'
                        }`}
                      >
                        <span className="text-base font-black tracking-tighter italic text-blue-600">PayPal</span>
                        <span className="text-[9px] text-slate-500 font-bold">Pago Rápido Simulado</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`p-3.5 sm:p-4 rounded-2xl border text-center font-bold text-xs transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                          paymentMethod === 'card'
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 text-slate-650" />
                        <span className="text-[9px] text-slate-500 font-bold">Tarjeta Simulación 3D</span>
                      </button>

                    </div>
                  </div>

                  {/* Credit Card Detailed Inputs (Shows only when 'card' is selected) */}
                  {paymentMethod === 'card' && (
                    <div className="grid md:grid-cols-12 gap-6 items-center pt-2">
                      
                      {/* Flipping 3D Credit Card Visual */}
                      <div className="md:col-span-5 flex justify-center">
                        <div
                          className={`relative w-full max-w-[210px] aspect-[1.58/1] rounded-2xl p-4 flex flex-col justify-between text-white font-mono shadow-md transition-all duration-500 transform ${
                            cardFocused ? 'bg-gradient-to-tr from-blue-750 to-blue-500' : 'bg-gradient-to-tr from-slate-900 to-slate-800'
                          }`}
                          style={{
                            transform: cardFocused ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            transformStyle: 'preserve-3d',
                            perspective: '1000px'
                          }}
                        >
                          {!cardFocused ? (
                            <div className="flex flex-col justify-between h-full w-full" style={{ backfaceVisibility: 'hidden' }}>
                              <div className="flex justify-between items-center">
                                <div className="w-7 h-5 bg-amber-400 rounded-md" />
                                <span className="text-[8px] font-black tracking-wider uppercase">C$ CÓRDOBA</span>
                              </div>
                              <div className="text-xs font-bold tracking-widest text-slate-100 text-left">
                                {cardNumber || '•••• •••• •••• ••••'}
                              </div>
                              <div className="flex justify-between text-[7px] uppercase text-left">
                                <div className="truncate max-w-[105px]">
                                  <p className="text-[5px] text-slate-400 font-semibold">Titular</p>
                                  <p className="font-bold truncate">{checkoutName || 'DON RUDY'}</p>
                                </div>
                                <div>
                                  <p className="text-[5px] text-slate-400 font-semibold">Expiración</p>
                                  <p className="font-bold">{cardExpiry || 'MM/AA'}</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col justify-between h-full w-full pt-2" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                              <div className="w-full h-6 bg-black -mx-4" />
                              <div className="self-end bg-white text-black px-2 py-0.5 rounded text-[10px] text-right font-black mr-2">
                                {cardCvv || '•••'}
                              </div>
                              <p className="text-[5px] text-center text-slate-350 font-sans">
                                Solo válido en este simulador escolar.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Numeric Inputs */}
                      <div className="md:col-span-7 space-y-3 text-left">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase block">Número de Tarjeta</label>
                          <input
                            type="text"
                            required
                            maxLength={19}
                            value={cardNumber}
                            onFocus={() => setCardFocused(false)}
                            onChange={(e) => {
                              let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
                              let matches = v.match(/\d{4,16}/g)
                              let match = (matches && matches[0]) || ''
                              let parts = []

                              for (let i = 0, len = match.length; i < len; i += 4) {
                                parts.push(match.substring(i, i + 4))
                              }

                              if (parts.length > 0) {
                                setCardNumber(parts.join(' '))
                              } else {
                                setCardNumber(v)
                              }
                            }}
                            placeholder="4000 1234 5678 9010"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-900 focus:border-blue-500 focus:outline-none transition-all font-mono"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold text-slate-400 uppercase block">Expiración</label>
                            <input
                              type="text"
                              required
                              maxLength={5}
                              onFocus={() => setCardFocused(false)}
                              value={cardExpiry}
                              onChange={(e) => {
                                let v = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
                                if (v.length >= 2) {
                                  setCardExpiry(v.substring(0, 2) + '/' + v.substring(2, 4))
                                } else {
                                  setCardExpiry(v)
                                }
                              }}
                              placeholder="12/28"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-900 focus:border-blue-500 focus:outline-none transition-all font-mono"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[9px] font-bold text-slate-400 uppercase block">CVV</label>
                            <input
                              type="text"
                              required
                              maxLength={3}
                              onFocus={() => setCardFocused(true)}
                              onBlur={() => setCardFocused(false)}
                              value={cardCvv}
                              onChange={(e) => setCardCvv(e.target.value.replace(/[^0-9]/gi, ''))}
                              placeholder="123"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-900 focus:border-blue-500 focus:outline-none transition-all font-mono"
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Submit checkout CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-left">
                      <p className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Total a Simular</p>
                      <p className="text-lg font-black text-slate-900">C$ {checkoutProduct.price.toLocaleString()} Córdobas</p>
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-blue-600/10 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wide active:scale-95"
                    >
                      Confirmar Pago
                      <ArrowRight className="w-4.5 h-4.5" />
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* STEP 2: SIMULATED PAYMENT PROCESSING LOADER */}
            {paymentStep === 'loading' && (
              <div className="py-20 flex flex-col items-center justify-center space-y-6 text-center animate-fadeIn">
                <Loader2 className="w-14 h-14 text-blue-600 animate-spin" />
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wider">Procesando Transacción Sandbox</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto font-medium">
                    Conectando de forma segura al emisor simulado. Generando boleta oficial en Córdobas...
                  </p>
                </div>
              </div>
            )}

            {/* STEP 3: TRANSACTION SUCCESS & DIGITAL RECEIPT */}
            {paymentStep === 'success' && (
              <div className="space-y-6 animate-fadeIn">
                
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 animate-bounce">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-emerald-600 uppercase tracking-wide">
                    ¡Simulación Aprobada!
                  </h3>
                  <p className="text-slate-500 text-xs max-w-sm">
                    Tu boleta digital oficial de RudyNegocios ha sido emitida con éxito en moneda nacional.
                  </p>
                </div>

                {/* Printable Invoice */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-6 relative overflow-hidden text-left">
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400" />
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">RUDYNEGOCIOS S.A.</h4>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Folio Fiscal: {invoiceId}</p>
                    </div>
                    <span className="text-[8px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                      APROBADO
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-[9px] text-slate-400 font-bold uppercase block">Pulpero Comprador</p>
                      <p className="font-bold text-slate-800">{checkoutName}</p>
                      <p className="text-[9px] text-slate-505">{checkoutEmail}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-[9px] text-slate-400 font-bold uppercase block">Fecha de Pago</p>
                      <p className="font-bold text-slate-800">
                        {mounted
                          ? new Date().toLocaleDateString([], { day: 'numeric', month: 'long', year: 'numeric' })
                          : 'Cargando...'}
                      </p>
                      <p className="text-[9px] text-slate-505">Nicaragua - Córdobas (C$)</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-[9px] text-slate-400 font-bold uppercase block">Descripción de la Herramienta</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-700">{checkoutProduct.name}</span>
                      <span className="font-black text-slate-900">C$ {checkoutProduct.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-slate-800">
                    <span className="uppercase text-slate-500">Monto Acreditado (Córdobas)</span>
                    <span className="text-blue-700 text-sm md:text-base font-black">C$ {checkoutProduct.price.toLocaleString()}</span>
                  </div>
                </div>

                {/* Final receipt actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => {
                      triggerToast('💾 Recibo digital descargado con éxito en tu dispositivo.')
                    }}
                    className="w-full sm:w-1/2 bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Download className="w-4 h-4 text-blue-600 animate-pulse" />
                    Descargar Recibo
                  </button>
                  <button
                    onClick={() => setCheckoutProduct(null)}
                    className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3.5 rounded-xl transition-all cursor-pointer text-center active:scale-95 shadow-md hover:shadow-lg"
                  >
                    Entendido
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </section>
  )
}
