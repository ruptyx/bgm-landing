// Cross-browser animation utilities
export const crossBrowserEasing = [0.43, 0.13, 0.23, 0.96] as const

// Better cross-browser IntersectionObserver settings
export const inViewSettings = {
  once: true,
  margin: "-10%" // More reliable than extreme negative percentage
} as const

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: crossBrowserEasing
    }
  }
}

export const itemVariants = {
  hidden: { 
    y: 50, 
    opacity: 0,
    transform: 'translateY(50px) translateZ(0)' // Force hardware acceleration
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transform: 'translateY(0px) translateZ(0)',
    transition: {
      duration: 0.6,
      ease: crossBrowserEasing
    }
  }
}

// Reduced motion support for accessibility
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Safari-specific animation fix
export const safariTransformFix = {
  WebkitTransform: 'translateZ(0)',
  transform: 'translateZ(0)',
  willChange: 'transform, opacity'
}

// Check if IntersectionObserver is supported
export const isIntersectionObserverSupported = () => {
  if (typeof window === 'undefined') return false
  return 'IntersectionObserver' in window
}