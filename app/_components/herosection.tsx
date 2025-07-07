import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-8 lg:py-12">
      <div className="max-w-[1408px] mx-auto">
        {/* Hero Container */}
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[844px] rounded-2xl lg:rounded-[32px] overflow-hidden">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/grp.jpg"
              alt="Medical expansion in the Gulf"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/40"
              style={{
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) -66.01%, rgba(0, 0, 0, 0.40) 47.26%)'
              }}
            />
          </div>

          {/* Text Container */}
          <div className="absolute bottom-6 md:bottom-12 lg:bottom-[48px] left-0 right-0">
            <div className="px-6 md:px-12 lg:px-[48px] max-w-4xl">
              <div className="flex flex-col items-start gap-4">
                {/* Header */}
                <h1 className="text-white">
                  <span className="block font-inter text-3xl md:text-4xl lg:text-[56px] font-light italic leading-[110%] tracking-tighter lg:tracking-[-3.36px]">
                    Your Gateway to
                  </span>
                  <span className="block font-inter text-3xl md:text-4xl lg:text-[56px] font-normal leading-[110%] tracking-tighter lg:tracking-[-3.36px]">
                    Medical Expansion in the Gulf
                  </span>
                </h1>

                {/* Subheader */}
                <p className="text-white font-roboto text-sm md:text-base lg:text-base font-normal leading-[150%] tracking-tight lg:tracking-[-0.48px] max-w-2xl">
                  We help pharmaceutical, beauty, and medical equipment brands succeed in Kuwait, Bahrain, and Oman. Work with us to confidently explore the GCC market.
                </p>

                {/* Partner With Us CTA */}
                <button className="group inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:gap-3 transition-all duration-200">
                  <span className="font-inter text-sm md:text-base font-medium">
                    Partner With Us
                  </span>
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}