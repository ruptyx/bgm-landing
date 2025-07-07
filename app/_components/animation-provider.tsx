'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface AnimationContextType {
  shouldAnimate: boolean
  hasIntersectionObserver: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  shouldAnimate: true,
  hasIntersectionObserver: true
})

export const useAnimationContext = () => useContext(AnimationContext)

interface AnimationProviderProps {
  children: ReactNode
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [shouldAnimate, setShouldAnimate] = useState(true)
  const [hasIntersectionObserver, setHasIntersectionObserver] = useState(true)

  useEffect(() => {
    // Check for reduced motion preference
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setShouldAnimate(!mediaQuery.matches)
      
      // Check for IntersectionObserver support
      setHasIntersectionObserver('IntersectionObserver' in window)
      
      // Listen for changes to reduced motion preference
      const handleChange = (e: MediaQueryListEvent) => {
        setShouldAnimate(!e.matches)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <AnimationContext.Provider value={{ shouldAnimate, hasIntersectionObserver }}>
      {children}
    </AnimationContext.Provider>
  )
}