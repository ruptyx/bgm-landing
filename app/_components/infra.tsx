'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function InfrastructureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-90%" })
  const features = [
    {
      image: "/art.jpg",
      title: "State-of-the-Art Facilities Ensuring Quality and Compliance",
      description: "Our 900m² ISO- and GDP-compliant warehouse is designed for optimal efficiency."
    },
    {
      image: "/worker.jpg",
      title: "Comprehensive Monitoring and Management for Temperature-Controlled Environments",
      description: "Chilled zones equipped with full alarm and monitoring systems ensure product integrity."
    },
    {
      image: "/erp.jpg",
      title: "Streamlined Operations Powered by Advanced ERP Solutions",
      description: "Our SAP ERP System enhances operational efficiency and data management."
    }
  ]

  const partners = [
    { logo: "/rossmax.png", name: "Rossmax" },
    { logo: "/allergan.svg", name: "Allergan" },
    { logo: "/jj.png", name: "Johnson & Johnson" },
    { logo: "/oleeva.png", name: "Oleeva" },
    { logo: "/linet.svg", name: "Linet" },
    { logo: "/geuder.png", name: "Geuder" },
    { logo: "/neoderma.png", name: "Neoderma" },
    { logo: "/nutrasbio.png", name: "NutrasBio" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
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
        <div className="px-6 md:px-12 lg:px-[48px]">
          {/* Header */}
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-[64px] leading-[110%] tracking-tighter lg:tracking-[-3.84px] text-center mb-16 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            <span className="font-inter font-normal text-black">
              Robust Infrastructure & Advanced Technology for
            </span>
            {' '}
            <span className="font-inter italic font-normal text-[#7BA0CA]">
              Seamless Operations
            </span>
          </motion.h2>

          {/* Feature Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 justify-items-center"
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
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="w-full max-w-[422px] p-2 pb-6 flex flex-col items-start gap-6 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative w-full h-[250px] rounded-2xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-4">
                  {/* Title */}
                  <h3 className="text-black font-inter text-xl lg:text-2xl font-semibold mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <button className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-200">
                    <span>Learn More</span>
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partners Section */}
          <motion.div 
            className="mt-24"
            variants={itemVariants}
          >
            {/* Partners Title */}
            <motion.h3 
              className="text-black font-inter text-2xl lg:text-3xl font-normal text-center mb-12"
              variants={itemVariants}
            >
              Trusted by the world's leading healthcare brands
            </motion.h3>

            {/* Partner Logos Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center max-w-6xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5
                  }
                }
              }}
            >
              {partners.map((partner, index) => (
                <motion.div 
                  key={index} 
                  className="relative w-24 h-16 lg:w-32 lg:h-20 flex items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.5 }
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-all duration-200"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}