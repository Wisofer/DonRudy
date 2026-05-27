'use client'

import React, { useState } from 'react'
import { Sparkles } from 'lucide-react'
import Navbar from '@/components/donrudy/Navbar'
import Hero from '@/components/donrudy/Hero'
import VideoShowcase from '@/components/donrudy/VideoShowcase'
import MermaCalculator from '@/components/donrudy/MermaCalculator'
import StoreSection from '@/components/donrudy/StoreSection'
import Testimonials from '@/components/donrudy/Testimonials'
import PreguntasOro from '@/components/donrudy/PreguntasOro'
import ConsultorioChat from '@/components/donrudy/ConsultorioChat'
import Footer from '@/components/donrudy/Footer'
import { Product } from '@/lib/types'
import { products } from '@/lib/data'

export default function Page() {
  // --- Global Shared States ---
  const [cart, setCart] = useState<Product[]>([])
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null)

  // Shared Toast Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)

  const triggerToast = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 4500)
  }

  // Navbar Interactions
  const handleCartClick = () => {
    if (cart.length > 0) {
      setCheckoutProduct(cart[0])
    } else {
      triggerToast('🛒 Tu carrito en Córdobas está vacío. ¡Elige una herramienta abajo!')
    }
  }

  const handleVerPlantillas = () => {
    // Open modal directly with the main templates
    setCheckoutProduct(products[1])
  }

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] text-foreground font-sans overflow-x-hidden">
      
      {/* Decorative Smooth Background Blur Spotlights */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] glow-spot-blue rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] glow-spot-gray rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] glow-spot-blue rounded-full opacity-60 pointer-events-none" />

      {/* 1. Header & Navigation */}
      <Navbar
        cartCount={cart.length}
        onCartClick={handleCartClick}
        onVerPlantillas={handleVerPlantillas}
      />

      {/* 2. Hero Header Block */}
      <Hero />

      {/* 3. TikTok Live Videos */}
      <VideoShowcase />

      {/* 4. Sliders Loss ROI Simulator */}
      <MermaCalculator />

      {/* 5. Spreadsheet Products Store Catalog & Payment Simulator */}
      <StoreSection
        cart={cart}
        setCart={setCart}
        checkoutProduct={checkoutProduct}
        setCheckoutProduct={setCheckoutProduct}
        triggerToast={triggerToast}
      />

      {/* 6. Real Corner Store Testimonials Section */}
      <Testimonials />

      {/* 7. Gold Business FAQ Accordion */}
      <PreguntasOro />

      {/* 7. Floating Chatbot Consultorio widget */}
      <ConsultorioChat />

      {/* 8. Footnotes & Legal Info */}
      <Footer />

      {/* Shared Global Toast Notification Popup */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce glass-panel p-4 rounded-xl border border-blue-500/20 text-blue-700 flex items-center gap-3 shadow-2xl bg-white pointer-events-none">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <p className="font-bold text-sm">{toastMessage}</p>
        </div>
      )}

    </main>
  )
}
