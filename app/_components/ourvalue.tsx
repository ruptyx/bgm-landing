'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function OurValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-90%" })
  const values = [
    { number: '01', title: 'Accountability', isHighlighted: false },
    { number: '02', title: 'Commitment', isHighlighted: false },
    { number: '04', title: 'Collaboration', isHighlighted: true, description: 'We work closely with partners to foster innovation.' },
    { number: '03', title: 'Teamwork', isHighlighted: false },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.section 
      ref={ref}
      className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-[1408px] mx-auto">
        {/* Container with same padding as other sections */}
        <div className="px-6 md:px-12 lg:px-[48px]">
          <div className="max-w-[1312px] flex flex-col items-start gap-14">
            {/* Our Values Label */}
            <motion.div 
              className="text-center lg:text-left"
              variants={itemVariants}
            >
              <motion.div 
                className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full border border-[#D1D1D1] mx-auto lg:mx-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-black font-inter text-lg lg:text-[20px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-1.2px]">
                  Our Values
                </span>
              </motion.div>
              
              {/* Header */}
              <motion.h2 
                className="mt-6 text-2xl md:text-3xl lg:text-[40px] text-black font-inter font-normal leading-[110%] tracking-tighter lg:tracking-[-2.4px] text-center lg:text-left"
                variants={itemVariants}
              >
                Our Core Values Drive Our Success
              </motion.h2>
            </motion.div>

            {/* Values List */}
            <motion.div 
              className="w-full flex flex-col gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {values.map((value) => (
                <motion.div
                  key={value.number}
                  className={`
                    relative w-full px-0 lg:px-4 py-8 lg:py-12
                    flex items-center justify-between
                    transition-all duration-200
                    ${value.isHighlighted 
                      ? 'bg-[#16467B] text-white ml-0 lg:ml-4 rounded-full px-8 lg:px-16' 
                      : 'border-b border-gray-200'
                    }
                  `}
                  variants={itemVariants}
                  whileHover={{ 
                    x: value.isHighlighted ? 0 : 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Number and Title */}
                  <div className="flex items-center gap-8 lg:gap-16">
                    <span className={`
                      font-inter text-3xl lg:text-[56px] font-normal leading-[110%] tracking-tighter lg:tracking-[-3.36px]
                      ${value.isHighlighted ? 'text-white/60' : 'text-[#B5B5B5]'}
                    `}>
                      {value.number}
                    </span>
                    <h3 className={`
                      font-inter text-3xl lg:text-[56px] font-normal leading-[110%] tracking-tighter lg:tracking-[-3.36px]
                      ${value.isHighlighted ? 'text-white' : 'text-black'}
                    `}>
                      {value.title}
                    </h3>
                  </div>

                  {/* Right side content */}
                  <div className="flex items-center gap-6">
                    {/* Description (only for highlighted) */}
                    {value.isHighlighted && value.description && (
                      <p className="hidden md:block text-white/80 font-inter text-sm lg:text-base max-w-xs">
                        {value.description}
                      </p>
                    )}

                    {/* Arrow with tail for non-highlighted items */}
                    {!value.isHighlighted && (
                      <svg 
                        className="w-8 h-8 lg:w-12 lg:h-12 text-black" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    )}

                    {/* Three dots for highlighted item */}
                    {value.isHighlighted && (
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}