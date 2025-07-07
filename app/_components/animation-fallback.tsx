'use client'

import { useEffect } from 'react'

export default function AnimationFallback() {
  useEffect(() => {
    // Ensure all sections are visible after 2 seconds as fallback
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('section, [role="main"] > div')
      sections.forEach((section) => {
        const element = section as HTMLElement
        element.style.opacity = '1'
        element.style.transform = 'translateY(0px)'
        element.style.visibility = 'visible'
      })
    }, 2000)

    // Also run immediately if no intersection observer
    if (!('IntersectionObserver' in window)) {
      const sections = document.querySelectorAll('section, [role="main"] > div')
      sections.forEach((section) => {
        const element = section as HTMLElement
        element.style.opacity = '1'
        element.style.transform = 'translateY(0px)'
        element.style.visibility = 'visible'
      })
    }

    return () => clearTimeout(timer)
  }, [])

  return null
}