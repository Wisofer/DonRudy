'use client'

import React, { useState } from 'react'
import { ShoppingCart, X, Menu } from 'lucide-react'
import Image from 'next/image'

interface NavbarProps {
  cartCount: number
  onCartClick: () => void
  onVerPlantillas?: () => void
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Click-Outside Backdrop Shield */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className="sticky top-4 z-50 w-full px-4">
        {/* Main Navbar Pill */}
        <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl px-5 py-3 shadow-lg shadow-slate-900/5">
          <div className="flex items-center justify-between">

            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3 select-none">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-50 to-sky-100 border border-blue-200/60 flex items-center justify-center overflow-hidden shrink-0 relative shadow-sm hover:scale-105 transition-transform">
                <Image
                  src="/donrudy-removebg-preview.png"
                  alt="Rudy Logo"
                  width={36}
                  height={36}
                  className="object-contain mt-1"
                  priority
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm" />
              </div>
              <span className="font-black text-lg tracking-tight text-slate-900">
                Rudy<span className="text-blue-600">Negocios</span>
              </span>
            </div>

            {/* Desktop Menu Links */}
            <div className="hidden lg:flex gap-1 items-center">
              {[
                { label: 'Diagnóstico', href: '#roi-calculator' },
                { label: 'Herramientas', href: '#store' },
                { label: 'Consejos', href: '#videos' },
                { label: 'Testimonios', href: '#testimonials' },
                { label: 'Preguntas', href: '#wisdom' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-600 hover:text-blue-600 font-extrabold text-[10px] tracking-widest uppercase px-3 py-2 rounded-lg hover:bg-blue-50/70 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Cart */}
              <button
                type="button"
                onClick={onCartClick}
                className="relative p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-blue-600 transition-all cursor-pointer shadow-sm active:scale-95 duration-200"
                title="Ver Carrito"
              >
                <ShoppingCart className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-blue-600 text-white font-black text-[8px] flex items-center justify-center border border-white shadow-md animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-all cursor-pointer active:scale-95 duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen
                  ? <X className="w-4 h-4" />
                  : <Menu className="w-4 h-4" />
                }
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown — absolutely positioned to float over content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 z-50 max-w-6xl mx-auto mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden animate-fadeIn">
            <div className="py-2">
              {[
                { label: 'Diagnóstico', href: '#roi-calculator' },
                { label: 'Herramientas', href: '#store' },
                { label: 'Consejos', href: '#videos' },
                { label: 'Testimonios', href: '#testimonials' },
                { label: 'Preguntas', href: '#wisdom' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center px-6 py-3.5 text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 font-extrabold text-xs tracking-widest uppercase transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
