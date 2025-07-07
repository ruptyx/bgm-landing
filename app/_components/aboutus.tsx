'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-90%" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Parallax effect for the text
  const textProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1])

  // Split text into words for individual animation
  const text = "Founded in 2009, Boushahri Group Medical has established itself as one of the top 10 healthcare solution providers in Kuwait. With recent expansions to Bahrain in 2022 and Oman in 2024, we are trusted by both public and private healthcare institutions."
  const words = text.split(" ")

  return (
    <motion.section 
      ref={ref}
      className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Container with same padding as hero text */}
        <div className="px-6 md:px-12 lg:px-[48px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            {/* About Us Label with pill border */}
            <motion.div 
              className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full border border-[#D1D1D1] flex-shrink-0 mx-auto lg:mx-0"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-black font-inter text-lg lg:text-[20px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-1.2px]">
                About Us
              </h2>
            </motion.div>

            {/* Content */}
            <div className="w-full lg:w-[755px] flex-shrink-0 text-center lg:text-left">
              <motion.p 
                className="font-roboto text-2xl md:text-3xl lg:text-[40px] font-normal leading-[140%] tracking-tighter lg:tracking-[-2.4px]"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {words.map((word, index) => {
                  const wordProgress = useTransform(
                    textProgress,
                    [index / words.length, (index + 1) / words.length],
                    [0, 1]
                  )
                  const wordColor = useTransform(
                    wordProgress,
                    [0, 0.5, 1],
                    ["#CACACA", "#CACACA", "#000000"]
                  )
                  
                  return (
                    <motion.span 
                      key={index}
                      style={{ color: wordColor }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  )
                })}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}