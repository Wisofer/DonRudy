'use client'

import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 py-16 bg-gradient-to-b from-white to-slate-50/50 relative z-30">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-left">

        {/* Brand Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 select-none">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-50 to-sky-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <Image
                src="/donrudy-removebg-preview.png"
                alt="Don Rudy Logo"
                width={30}
                height={30}
                className="object-contain mt-0.5"
              />
            </div>
            <span className="font-black text-slate-900 text-lg tracking-tight">
              Rudy<span className="text-blue-600">Negocios</span>
            </span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs font-semibold">
            "Antes de emprender hay que aprender". Plataforma educativa especializada en optimización y control para pulperías y micro-comercio local en Nicaragua.
          </p>
        </div>

        {/* Column 2: Tools Links */}
        <div>
          <h5 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Herramientas</h5>
          <ul className="space-y-2.5 text-[11px] text-slate-500 font-semibold">
            <li>
              <a href="#roi-calculator" className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block">
                Juego Diagnóstico
              </a>
            </li>
            <li>
              <a href="#store" className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block">
                Mini-Curso en Video
              </a>
            </li>
            <li>
              <a href="#store" className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block">
                Planilla Nego Control
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Community Links */}
        <div>
          <h5 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Comunidad</h5>
          <ul className="space-y-2.5 text-[11px] text-slate-500 font-semibold">
            <li>
              <a href="https://www.tiktok.com/@rua7404" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block">
                TikTok @rua7404
              </a>
            </li>
            <li>
              <a href="#store" className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block">
                Grupo VIP de WhatsApp
              </a>
            </li>
            <li>
              <a href="#wisdom" className="hover:text-blue-600 hover:translate-x-1 transition-all duration-300 inline-block">
                Preguntas de Oro
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 mt-12 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider select-none">
        <p>© 2026 RudyNegocios. Todos los derechos simulados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Condiciones Sandbox</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
