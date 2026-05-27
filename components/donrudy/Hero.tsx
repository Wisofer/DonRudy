'use client'

import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:py-28 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

        {/* Left: Content */}
        <div className="md:col-span-7 space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              "Antes de emprender <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                hay que aprender."
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              ¿Fuga de dinero por mermas o inventario vencido? Descarga las plantillas exactas en <strong>Córdobas</strong> de Don Rudy y toma el control de tu negocio hoy.
            </p>
          </div>

          {/* Micro Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 max-w-lg">
            <div>
              <p className="text-2xl font-black text-blue-600">90K+</p>
              <p className="text-xs text-slate-500 font-bold">TikTok @rua7404</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800">100%</p>
              <p className="text-xs text-slate-500 font-bold">Moneda Nacional</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-800">Córdobas</p>
              <p className="text-xs text-slate-500 font-bold">Cálculos Reales</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 pt-6 justify-center md:justify-start">

            {/* TikTok Icon Button */}
            <a
              href="https://www.tiktok.com/@rua7404"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-950 hover:text-white hover:border-slate-950 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-black/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              title="Síguenos en TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.21 2.34 2.01 3.84 2.27v3.83c-1.39-.1-2.74-.61-3.85-1.48a6.592 6.592 0 0 1-2.31-3.04c-.03.74-.03 1.48-.03 2.22 0 2.94-.03 5.89-.01 8.83-.02 1.34-.34 2.69-1 3.88-.66 1.18-1.65 2.14-2.85 2.76-1.2.62-2.58.91-3.92.83-1.34-.08-2.65-.56-3.73-1.36-1.07-.81-1.85-1.99-2.22-3.32-.38-1.33-.29-2.76.24-4.03.54-1.27 1.51-2.31 2.73-2.95 1.21-.65 2.61-.88 3.96-.66v3.9c-.77-.2-1.59-.1-2.29.28-.7.38-1.22.99-1.47 1.74-.24.75-.17 1.58.2 2.27.37.69.99 1.19 1.74 1.4.75.21 1.57.11 2.25-.28.69-.39 1.17-.99 1.39-1.74.19-.74.19-1.52.19-2.29-.01-3.7-.01-7.41-.01-11.11z" />
              </svg>
            </a>

            {/* Facebook Icon Button */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-[#1877F2]/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              title="Síguenos en Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>

            {/* Instagram Icon Button */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-[#ee2a7b]/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm"
              title="Síguenos en Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Modern Circular Profile Frame */}
        <div className="md:col-span-5 relative w-full flex justify-center py-6">
          <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">

            {/* Pulsating Glowing Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-pulse" />

            {/* Inner Glow Decorative Ring */}
            <div className="absolute inset-2 rounded-full border border-blue-500/10 bg-blue-500/5 animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Main Circular Profile & Portrait Container */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-50 via-sky-100/50 to-white border border-white shadow-xl flex items-center justify-center overflow-hidden group">
              {/* Radial Blur Glow */}
              <div className="absolute w-48 h-48 rounded-full bg-blue-300/30 filter blur-xl animate-pulse" />

              <Image
                src="/donrudy-removebg-preview.png"
                alt="Don Rudy"
                width={240}
                height={240}
                className="object-contain group-hover:scale-105 transition-transform duration-500 relative z-10 bottom-2"
                priority
              />
            </div>

            {/* Circular active brand status badge */}
            <span className="absolute bottom-6 right-6 w-5 h-5 rounded-full bg-emerald-400 border-4 border-white shadow-md animate-pulse z-20" />

          </div>
        </div>

      </div>
    </section>
  )
}
