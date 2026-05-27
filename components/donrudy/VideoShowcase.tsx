'use client'

import React, { useState } from 'react'
import { Sparkles, Maximize2 } from 'lucide-react'
import { viralVideos } from '@/lib/data'

export default function VideoShowcase() {
  const [unmutedVideoId, setUnmutedVideoId] = useState<string | null>(null)

  return (
    <section id="videos" className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
            Consejos <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Virales del Pulpero</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto font-medium">
            Aprende trucos rápidos y estrategias de negocio basadas en los videos más vistos y compartidos de Don Rudy en su TikTok oficial.
          </p>
        </div>

        {/* Video Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {viralVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => {
                setUnmutedVideoId(unmutedVideoId === video.id ? null : video.id)
              }}
              className="w-full max-w-[310px] aspect-[9/16] rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between relative mx-auto cursor-pointer"
            >
              {/* Actual Autoplay Loop Video */}
              <video
                src={video.videoUrl}
                autoPlay
                loop
                muted={unmutedVideoId !== video.id}
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity z-0"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-10 pointer-events-none" />

              {/* Top Left Corner Fullscreen Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  const card = e.currentTarget.parentElement
                  if (card) {
                    if (card.requestFullscreen) {
                      card.requestFullscreen()
                    } else if ((card as any).webkitRequestFullscreen) {
                      (card as any).webkitRequestFullscreen()
                    } else if ((card as any).msRequestFullscreen) {
                      (card as any).msRequestFullscreen()
                    }
                  }
                }}
                className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 shadow-md cursor-pointer hover:bg-black/80 hover:text-blue-400"
                title="Ver en pantalla completa"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              {/* Top Corner Volume Toggle Button */}
              <div className="absolute top-4 right-4 z-20">
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-transform hover:scale-105 active:scale-95 shadow-md">
                  {unmutedVideoId === video.id ? (
                    <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white/80 fill-current" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Bottom Details (TikTok style caption) */}
              <div className="relative z-20 mt-auto p-5 text-left space-y-1.5 pointer-events-none">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-blue-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  @RudyNegocio
                </div>
                <h3 className="text-white text-sm font-black tracking-tight leading-snug drop-shadow-md">
                  {video.title}
                </h3>
                <p className="text-white/80 text-[10px] leading-relaxed line-clamp-2 drop-shadow-sm font-medium">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
