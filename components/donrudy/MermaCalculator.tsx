'use client'

import React, { useState } from 'react'
import { Sparkles, Trophy, RotateCcw, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react'

interface Question {
  id: number
  title: string
  description: string
  options: {
    text: string
    loss: number
    emoji: string
    feedback: string
  }[]
}

const quizQuestions: Question[] = [
  {
    id: 1,
    title: '1. ¿Qué haces cuando un cliente del barrio te pide FIADO?',
    description: 'La sagrada ley de la pulpería en Nicaragua. ¿Cómo manejas las cuentas?',
    options: [
      {
        emoji: '💸',
        text: 'Le fío de palabra y lo anoto en un papelito suelto que a veces se me pierde.',
        loss: 4500,
        feedback: '¡Cuidado compa! Los papelitos se los lleva el viento y la gente "se olvida" de pagar.'
      },
      {
        emoji: '📖',
        text: 'Lo anoto bien en un cuaderno, pero a veces me da pena cobrarle al vecino.',
        loss: 1800,
        feedback: 'El cuaderno ayuda, pero la pena de cobrar se traga la ganancia del día.'
      },
      {
        emoji: '🛡️',
        text: '¡Regla de oro de Don Rudy! No se fía a nadie sin garantía. El que quiere fiado va al súper.',
        loss: 0,
        feedback: '¡Excelente! Cuidar el efectivo es lo que mantiene la pulpería a flote.'
      }
    ]
  },
  {
    id: 2,
    title: '2. ¿Cómo controlas el pan, la leche y embutidos que vencen rápido?',
    description: 'Mermas silenciosas en bodega. ¿Cuándo te das cuenta de que algo caducó?',
    options: [
      {
        emoji: '🤢',
        text: 'Hasta que el pan tiene hongos o el cliente me grita que la leche está agria.',
        loss: 3500,
        feedback: '¡Alerta roja! Estás tirando dinero a la basura y perdiendo la confianza de los clientes.'
      },
      {
        emoji: '📦',
        text: 'Los acomodo rápido como caigan, y a veces se me queda vencido el producto de atrás.',
        loss: 1200,
        feedback: 'Acomodar sin rotar es una trampa. El producto viejo se queda atrapado al fondo.'
      },
      {
        emoji: '🔄',
        text: 'Uso rotación estricta PEPS (Lo primero que entra es lo primero que sale).',
        loss: 0,
        feedback: '¡Perfecto! Rortar la bodega te ahorra miles de Córdobas al año en mermas.'
      }
    ]
  },
  {
    id: 3,
    title: '3. ¿Qué haces cuando llega el camión de gaseosas, pan o lácteos a tu pulpería?',
    description: 'Las mañas de los proveedores. ¿Cómo controlas la descarga de mercadería?',
    options: [
      {
        emoji: '🚚',
        text: 'Le pago rápido al chofer lo que dice la factura sin contar nada porque ando con prisa.',
        loss: 2800,
        feedback: '¡Peligro! Algunos camiones dejan cajas incompletas o productos dañados si no los revisas.'
      },
      {
        emoji: '👀',
        text: 'Medio cuento las canastas por encima pero confío en que todo viene completo.',
        loss: 900,
        feedback: 'Contar por encima no basta. El faltante de una sola botella golpea directo tu ganancia.'
      },
      {
        emoji: '🔍',
        text: 'Cuento botella por botella y reviso fecha de caducidad antes de soltar un solo Córdoba.',
        loss: 0,
        feedback: '¡Esa es la actitud de un comerciante de verdad! Al proveedor se le respeta, pero se le cuenta.'
      }
    ]
  },
  {
    id: 4,
    title: '4. ¿Cómo manejas la heladera de refrescos y gaseosas en tu pulpería?',
    description: 'El consumo de energía y el stock. ¿Quién tiene acceso a los fríos?',
    options: [
      {
        emoji: '🥵',
        text: 'Pasa abierta todo el día y los niños del barrio abren y agarran solos.',
        loss: 2000,
        feedback: '¡La fuga eléctrica y de stock es enorme! Tu factura de Dissur va a salir carísima.'
      },
      {
        emoji: '🔌',
        text: 'El refri está cerrado, pero el motor está viejo, hace ruido y gasta luz que da miedo.',
        loss: 800,
        feedback: 'A veces lo barato sale caro. Un motor ineficiente se come lo que le ganas a la bebida fría.'
      },
      {
        emoji: '🔐',
        text: 'Tengo candado o yo mismo sirvo las bebidas. Mantenimiento del refri al día.',
        loss: 0,
        feedback: '¡Excelente control! Ahorras energía y cuidas cada gaseosa con recelo.'
      }
    ]
  }
]

export default function MermaCalculator() {
  const [currentStep, setCurrentStep] = useState(0) // 0 = Welcome, 1-4 = Questions, 5 = Results
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null)

  const handleStart = () => {
    setAnswers([])
    setSelectedOptionIdx(null)
    setCurrentStep(1)
  }

  const handleSelectOption = (idx: number) => {
    setSelectedOptionIdx(idx)
  }

  const handleNext = () => {
    if (selectedOptionIdx === null) return

    const selectedQuestion = quizQuestions[currentStep - 1]
    const lossValue = selectedQuestion.options[selectedOptionIdx].loss
    const updatedAnswers = [...answers, lossValue]
    setAnswers(updatedAnswers)
    setSelectedOptionIdx(null)

    if (currentStep < quizQuestions.length) {
      setCurrentStep(currentStep + 1)
    } else {
      setCurrentStep(5) // Show results
    }
  }

  // Cálculos finales
  const totalMonthlyLoss = answers.reduce((sum, val) => sum + val, 0)
  const totalYearlyLoss = totalMonthlyLoss * 12
  const potentialSavings = Math.round(totalYearlyLoss * 0.70) // Ahorro del 70% con las plantillas de Don Rudy

  // Corona del Pulpero
  const getPulperoBadge = (loss: number) => {
    if (loss >= 9000) {
      return {
        title: 'Pulpero Al Filo de la Quiebra 💸',
        color: 'text-red-600 bg-red-50 border-red-200',
        emoji: '💀',
        desc: '¡Compa, las mañas, mermas y fiados silenciosos te están devorando la ganancia! Necesitas poner orden antes de que sea tarde.'
      }
    } else if (loss > 0) {
      return {
        title: 'Pulpero en Lucha ⚔️',
        color: 'text-amber-600 bg-amber-50 border-amber-200',
        emoji: '💪',
        desc: 'Haces un buen esfuerzo y controlas algunas cosas, pero todavía se te escapan miles de Córdobas por pequeños descuidos.'
      }
    } else {
      return {
        title: 'Pulpero Millonario 👑',
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        emoji: '🏆',
        desc: '¡Bárbaro compa! Eres un maestro del control. Don Rudy te saluda y te respeta. ¡Sigue cuidando la bodega como un halcón!'
      }
    }
  }

  const badge = getPulperoBadge(totalMonthlyLoss)

  return (
    <section id="roi-calculator" className="py-20 bg-slate-100/50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Brand Features */}
          <div className="md:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              ¿Qué tan rápido se te escapa <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                el dinero en tu bodega?
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-lg font-medium">
              Olvídate de calculadoras tradicionales aburridas. Responde estas 4 preguntas rápidas basadas en el día a día de tu pulpería y descubre la fuga real de Córdobas al mes.
            </p>

            {/* Visual Feature Highlights */}
            <div className="space-y-4 pt-6 border-t border-slate-200 max-w-lg">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm font-bold text-base">
                  🏆
                </div>
                <span>Descubre tu Rango de Honor / Quiebra en Nicaragua</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 shadow-sm font-bold text-sm">
                  C$
                </div>
                <span>Cálculo real de mermas y pérdidas de stock en Córdobas</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 shadow-sm font-bold text-base">
                  💡
                </div>
                <span>Revela las mañas de tus proveedores de refresco y pan</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card */}
          <div className="md:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-[450px]">
              
              {/* --- STEP 0: BIENVENIDA AL JUEGO --- */}
              {currentStep === 0 && (
                <div className="bg-white border border-slate-250 rounded-3xl p-8 shadow-xl text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Trophy className="w-8 h-8 text-blue-600 animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest font-extrabold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
                      Juego Interactivo
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      ¡Comienza tu Diagnóstico!
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto font-medium">
                      Responde 4 preguntas sencillas sobre tu tienda y descubre las fugas de dinero silenciosas.
                    </p>
                  </div>

                  <button
                    onClick={handleStart}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs py-4 rounded-2xl transition-all shadow-lg hover:shadow-blue-600/10 cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    ¡Empezar a Jugar!
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* --- STEPS 1-4: PREGUNTAS DEL JUEGO --- */}
              {currentStep >= 1 && currentStep <= 4 && (
                <div className="bg-white border border-slate-250 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn text-left">
                  
                  {/* Progreso */}
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">
                      Pregunta {currentStep} de 4
                    </span>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Pregunta Titulo */}
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {quizQuestions[currentStep - 1].title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {quizQuestions[currentStep - 1].description}
                    </p>
                  </div>

                  {/* Opciones */}
                  <div className="space-y-3">
                    {quizQuestions[currentStep - 1].options.map((option, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left p-4 rounded-2xl border text-xs leading-relaxed transition-all flex items-start gap-3 cursor-pointer ${
                          selectedOptionIdx === idx
                            ? 'bg-blue-50/80 border-blue-500 text-slate-900 shadow-md shadow-blue-500/5'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100/50'
                        }`}
                      >
                        <span className="text-xl shrink-0 mt-0.5">{option.emoji}</span>
                        <span className="font-bold">{option.text}</span>
                      </button>
                    ))}
                  </div>

                  {/* Retroalimentación en tiempo real si está seleccionado */}
                  {selectedOptionIdx !== null && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex gap-2.5 items-start animate-fadeIn">
                      {quizQuestions[currentStep - 1].options[selectedOptionIdx].loss > 0 ? (
                        <AlertTriangle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
                      ) : (
                        <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                      <p className="text-[10px] text-slate-500 leading-relaxed font-bold">
                        {quizQuestions[currentStep - 1].options[selectedOptionIdx].feedback}
                      </p>
                    </div>
                  )}

                  {/* Siguiente Botón */}
                  <button
                    onClick={handleNext}
                    disabled={selectedOptionIdx === null}
                    className={`w-full font-extrabold text-xs py-3.5 rounded-xl transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 ${
                      selectedOptionIdx === null
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md cursor-pointer'
                    }`}
                  >
                    {currentStep < 4 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              )}

              {/* --- STEP 5: PANTALLA DE RESULTADOS --- */}
              {currentStep === 5 && (
                <div className="bg-white border border-slate-250 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fadeIn text-center">
                  
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest font-extrabold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase">
                      Resultado Diagnóstico
                    </span>
                    <h3 className="text-xl font-black text-slate-900 leading-tight">
                      ¡Tu diagnóstico está completo!
                    </h3>
                  </div>

                  {/* Rango / Corona del Pulpero */}
                  <div className={`p-4 rounded-2xl border text-left space-y-2 ${badge.color}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{badge.emoji}</span>
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Tu Rango es:</p>
                        <h4 className="text-sm font-black uppercase tracking-wide">{badge.title}</h4>
                      </div>
                    </div>
                    <p className="text-[11px] leading-relaxed font-bold text-slate-600">
                      {badge.desc}
                    </p>
                  </div>

                  {/* Pérdidas Estimadas */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 text-left">
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Tu pérdida mensual estimada</p>
                      <p className="text-xl sm:text-2xl font-black text-red-600 flex items-baseline">
                        C$ {totalMonthlyLoss.toLocaleString()}
                        <span className="text-[10px] font-bold text-red-500 uppercase ml-1">Córdobas al mes</span>
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <p className="text-[9px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                        Ahorro anual con el Método Don Rudy
                      </p>
                      <p className="text-2xl sm:text-3xl font-black text-blue-700 flex items-baseline">
                        C$ {potentialSavings.toLocaleString()}
                        <span className="text-[10px] font-black text-blue-700 uppercase ml-1">Córdobas al año</span>
                      </p>
                      <p className="text-[9px] text-slate-400 leading-normal mt-1">
                        *Al aplicar las plantillas de control "Nego Control" y optimizar tu administración.
                      </p>
                    </div>
                  </div>

                  {/* Acciones Finales */}
                  <div className="space-y-3">
                    <a
                      href="#store"
                      className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs py-4 rounded-xl transition-all shadow-md hover:shadow-blue-600/10 cursor-pointer uppercase tracking-wider"
                    >
                      Detener esta fuga de dinero
                    </a>
                    <button
                      type="button"
                      onClick={handleStart}
                      className="w-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-600 font-bold text-xs py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Volver a Jugar
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
