'use client'

import React, { useState } from 'react'
import { Award, ChevronDown } from 'lucide-react'
import { faqList } from '@/lib/data'

export default function PreguntasOro() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null)

  return (
    <section id="wisdom" className="py-24 max-w-4xl mx-auto px-6">

      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900">
          Preguntas Frecuentes de Oro
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto text-sm">
          Consejos directos listos para aplicar en tu tienda local. Haz clic en las tarjetas de cristal para ver los secretos de Don Rudy.
        </p>
      </div>

      {/* Custom Accordion Grid */}
      <div className="space-y-4 text-left">
        {faqList.map((faq, idx) => (
          <div
            key={idx}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
              faqOpenIndex === idx
                ? 'border-blue-500/30 shadow-lg shadow-blue-500/2 bg-gradient-to-tr from-white to-blue-50/5'
                : 'border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
            }`}
          >
            <button
              onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
              className="w-full text-left p-5 flex items-center gap-4 text-sm font-black text-slate-900 hover:text-blue-600 transition-colors cursor-pointer group"
            >
              {/* Numbering Badge */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-black text-xs border transition-all duration-300 ${
                faqOpenIndex === idx
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/10'
                  : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100'
              }`}>
                {idx + 1}
              </div>
              
              <span className="flex-1 text-xs sm:text-sm font-black leading-snug">{faq.q}</span>
              
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  faqOpenIndex === idx ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>

            {faqOpenIndex === idx && (
              <div className="px-6 pb-6 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-slideDown font-medium">
                {/* Rudy Avatar Bubble Response */}
                <div className="flex gap-4 items-start bg-slate-50 border border-slate-150 rounded-2xl p-4.5 mt-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-50 to-sky-100 border border-blue-200 shadow-sm overflow-hidden flex items-center justify-center shrink-0 mt-0.5">
                    {/* Don Rudy circular profile avatar */}
                    <img
                      src="/donrudy-removebg-preview.png"
                      alt="Don Rudy"
                      className="w-8 h-8 object-contain mt-1"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-blue-600 font-extrabold uppercase tracking-widest">💬 La Ley de Don Rudy:</p>
                    <p className="text-slate-600 text-xs leading-relaxed font-bold">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  )
}
