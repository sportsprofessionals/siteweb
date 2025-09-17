'use client'

import React, { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

interface VideoPlayerProps {
  src: string
  title: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  const videoId = getYouTubeVideoId(src)
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null

  const loadVideo = () => {
    if (embedUrl) {
      setIsLoaded(true)
      setError(null)
    } else {
      setError('URL de video inválida')
    }
  }

  const openInNewTab = () => {
    window.open(src, '_blank', 'noopener,noreferrer')
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
        <div className="flex items-center justify-center">
          <span className="text-red-600">{error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-[#0B8CBF]/10 to-[#60A5FA]/10 border border-[#0B8CBF]/20 rounded-xl p-6 my-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          📹 {title}
        </h3>
        <button
          onClick={openInNewTab}
          className="flex items-center gap-2 text-[#0B8CBF] hover:text-[#0B8CBF]/80 text-sm transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Abrir en YouTube
        </button>
      </div>

      {!isLoaded ? (
        <div className="relative">
          {/* Thumbnail preview */}
          {thumbnailUrl && (
            <div 
              className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
              onClick={loadVideo}
            >
              <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                onError={() => setError('Error al cargar la miniatura del video')}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-4 shadow-lg">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm bg-black/50 rounded px-2 py-1 backdrop-blur-sm">
                  Haz clic para cargar el video
                </p>
              </div>
            </div>
          )}
          
          {!thumbnailUrl && (
            <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={loadVideo}>
              <div className="text-center">
                <div className="bg-[#0B8CBF] hover:bg-[#0B8CBF]/80 transition-colors rounded-full p-4 mx-auto mb-3">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <p className="text-gray-600 text-sm">Cargar video</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src={embedUrl || ''}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      {!isLoaded && (
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm mb-2">Video optimizado • Carga bajo demanda</p>
          <div className="text-xs text-gray-500">Solo se carga cuando lo necesites para ahorrar datos</div>
        </div>
      )}
    </div>
  )
}

export default VideoPlayer
