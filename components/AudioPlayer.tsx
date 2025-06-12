'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react'

interface AudioPlayerProps {
  src: string
  title: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  // Lazy loading: only create audio element when user interacts
  const initializeAudio = () => {
    if (!isLoaded && !isLoading) {
      setIsLoading(true)
      setError(null)
    }
  }

  useEffect(() => {
    if (isLoading && audioRef.current && !isLoaded) {
      const audio = audioRef.current
      
      const handleCanPlayThrough = () => {
        setIsLoaded(true)
        setIsLoading(false)
        setDuration(audio.duration)
      }

      const handleError = () => {
        setError('Error al cargar el audio')
        setIsLoading(false)
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime)
      }

      const handleEnded = () => {
        setIsPlaying(false)
        setCurrentTime(0)
      }

      audio.addEventListener('canplaythrough', handleCanPlayThrough)
      audio.addEventListener('error', handleError)
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('ended', handleEnded)

      // Load the audio
      audio.load()

      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlayThrough)
        audio.removeEventListener('error', handleError)
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('ended', handleEnded)
      }
    }
  }, [isLoading, isLoaded])

  const togglePlayPause = () => {
    if (!isLoaded) {
      initializeAudio()
      return
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isLoaded || !audioRef.current || !progressRef.current) return

    const rect = progressRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      setCurrentTime(0)
      setIsPlaying(false)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-gradient-to-r from-[#0B8CBF]/10 to-[#60A5FA]/10 border border-[#0B8CBF]/20 rounded-xl p-6 my-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          🎧 {title}
        </h3>
        {error && (
          <span className="text-red-500 text-sm">{error}</span>
        )}
      </div>      {/* Audio element (hidden) */}
      {(isLoading || isLoaded) && (
        <audio
          ref={audioRef}
          src={src}
          preload="none"
        />
      )}

      {/* Controls */}
      <div className="space-y-4">
        {/* Play/Pause and Reset buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlayPause}
            disabled={isLoading}
            className="flex items-center justify-center w-12 h-12 bg-[#0B8CBF] hover:bg-[#0B8CBF]/80 text-white rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          {isLoaded && (
            <button
              onClick={resetAudio}
              className="flex items-center justify-center w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* Time display */}
          {isLoaded && (
            <div className="text-sm text-gray-600 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          )}
        </div>

        {/* Progress bar */}
        {isLoaded && (
          <div
            ref={progressRef}
            onClick={handleProgressClick}
            className="w-full h-2 bg-gray-200 rounded-full cursor-pointer overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-[#0B8CBF] to-[#60A5FA] transition-all duration-100 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
        )}

        {/* Volume control */}
        {isLoaded && (
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-[#0B8CBF] transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="flex-1 max-w-32 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #0B8CBF 0%, #0B8CBF ${(isMuted ? 0 : volume) * 100}%, #e5e7eb ${(isMuted ? 0 : volume) * 100}%, #e5e7eb 100%)`
              }}
            />
          </div>
        )}      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #0B8CBF;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #0B8CBF;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

export default AudioPlayer
