'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Loader2, Send } from 'lucide-react'
import Image from 'next/image'
import { rudyResponses } from '@/lib/data'
import { ChatMessage } from '@/lib/types'

export default function ConsultorioChat() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'rudy',
      text: '¡Hola compa! Le saluda Don Rudy. "Antes de emprender hay que aprender", esa es mi ley. He cargado mis mejores consejos de pulpería aquí para que no cometa errores. ¿Qué duda tiene sobre su negocio hoy?',
      timestamp: '16:00'
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Scroll automatico al recibir mensajes
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages, isTyping])

  const handleSendChatMessage = (textToSend?: string) => {
    const text = textToSend || chatInput
    if (!text.trim()) return

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setChatMessages((prev) => [...prev, userMsg])
    if (!textToSend) setChatInput('')

    // Respuesta simulada de Don Rudy
    setIsTyping(true)

    setTimeout(() => {
      let replyText = rudyResponses.general
      const lower = text.toLowerCase()

      if (
        lower.includes('oxxo') ||
        lower.includes('competencia') ||
        lower.includes('supermercado') ||
        lower.includes('tienda grande')
      ) {
        replyText = rudyResponses.oxxo
      } else if (
        lower.includes('cerveza') ||
        lower.includes('bebida') ||
        lower.includes('helado') ||
        lower.includes('refrigerador') ||
        lower.includes('luz')
      ) {
        replyText = rudyResponses.cerveza
      } else if (
        lower.includes('proveedor') ||
        lower.includes('repartidor') ||
        lower.includes('coca') ||
        lower.includes('sabritas') ||
        lower.includes('bimbo')
      ) {
        replyText = rudyResponses.proveedor
      }

      const rudyMsg: ChatMessage = {
        id: Math.random().toString(),
        sender: 'rudy',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setChatMessages((prev) => [...prev, rudyMsg])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="Consultorio de Don Rudy"
      >
        <MessageSquare className="w-6 h-6" />
        {!isChatOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white border-2 border-white font-black text-[9px] flex items-center justify-center animate-bounce">
            1
          </span>
        )}
      </button>

      {/* Chat Window Panel */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-48px)] sm:w-full max-w-[360px] md:max-w-[400px] h-[520px] bg-white border border-slate-200 rounded-3xl flex flex-col justify-between overflow-hidden shadow-2xl animate-slideUp">
          
          {/* Chat Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-950 border-b border-white/5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-sky-100 border border-blue-200/50 flex items-center justify-center overflow-hidden shrink-0 relative shadow-inner">
                <Image
                  src="/donrudy-removebg-preview.png"
                  alt="Don Rudy Chat Avatar"
                  width={36}
                  height={36}
                  className="object-contain mt-1"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#090C15]" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-black">El Consultorio de Don Rudy</h4>
                <p className="text-[9px] text-blue-400 font-bold uppercase tracking-wider">Sabiduría de Pulpería</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages List Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-slate-50 flex flex-col">
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'self-end ml-auto' : 'self-start'}`}
              >
                <div
                  className={`p-3.5 rounded-2xl text-xs leading-relaxed font-medium shadow-sm text-left ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-none shadow-md shadow-blue-600/10'
                      : 'bg-white border border-slate-200/70 text-slate-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
                <span className={`text-[8px] text-slate-400 mt-1.5 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Rudy is Typing Loader */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs self-start">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-600" />
                <span>Don Rudy está buscando consejo...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Preset Question Chips */}
          <div className="px-4 py-2.5 border-t border-slate-100 bg-white flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
            <button
              onClick={() => handleSendChatMessage('¿Cómo competir contra los grandes supermercados?')}
              className="text-[9px] font-bold bg-blue-50/60 hover:bg-blue-100/60 border border-blue-100/80 text-blue-700 hover:border-blue-300 px-3.5 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              💡 Competencia de Cadenas
            </button>
            <button
              onClick={() => handleSendChatMessage('¿Cómo controlo el stock de refrescos y cerveza?')}
              className="text-[9px] font-bold bg-blue-50/60 hover:bg-blue-100/60 border border-blue-100/80 text-blue-700 hover:border-blue-300 px-3.5 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              🍻 Control de Cerveza
            </button>
            <button
              onClick={() => handleSendChatMessage('¿Cómo le pido descuentos a Bimbo y Coca-Cola?')}
              className="text-[9px] font-bold bg-blue-50/60 hover:bg-blue-100/60 border border-blue-100/80 text-blue-700 hover:border-blue-300 px-3.5 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap"
            >
              🤝 Tratar Proveedores
            </button>
          </div>

          {/* Typing Form Input */}
          <div className="p-3 border-t border-slate-100 bg-white flex gap-2 items-center">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendChatMessage()
              }}
              placeholder="Escribe tu duda compa..."
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleSendChatMessage()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  )
}
