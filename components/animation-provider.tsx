"use client"

import type React from "react"

import { createContext, useContext } from "react"
import { motion, useInView, useAnimation as useFramerAnimation } from "framer-motion"
import { useRef, useEffect } from "react"

type AnimationContextType = {
  FadeIn: React.FC<FadeInProps>
  SlideIn: React.FC<SlideInProps>
  ScaleIn: React.FC<ScaleInProps>
}

const AnimationContext = createContext<AnimationContextType | null>(null)

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider")
  }
  return context
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

interface SlideInProps extends FadeInProps {
  direction?: "left" | "right" | "up" | "down"
  distance?: number
}

interface ScaleInProps extends FadeInProps {
  initialScale?: number
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 0.5, className = "" }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useFramerAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration, delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const SlideIn: React.FC<SlideInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 50,
  className = "",
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useFramerAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...directionMap[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  className = "",
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useFramerAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: initialScale },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <AnimationContext.Provider
      value={{
        FadeIn,
        SlideIn,
        ScaleIn,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
