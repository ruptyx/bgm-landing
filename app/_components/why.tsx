export default function WhyChooseSection() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      ),
      text: "In-depth knowledge of the regional healthcare market."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      text: "Reliable compliance and logistics systems for seamless operations."
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a3 3 0 00-3-3m0 0a3 3 0 00-3 3m3-3v12" />
        </svg>
      ),
      text: "Extensive network of partners across the GCC healthcare sector."
    }
  ]

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        {/* Blue Container */}
        <div className="w-full lg:w-[1392px] lg:h-[664px] mx-auto flex flex-col items-center justify-center p-12 lg:px-[213px] lg:py-[145px] gap-2 rounded-[32px] bg-[#16467B]">
          {/* Why Choose Us Label */}
          <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-white font-inter text-lg italic">
              Why Choose Us
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-white text-3xl md:text-5xl lg:text-[64px] font-inter font-normal leading-[110%] tracking-tighter lg:tracking-[-3.84px] text-center max-w-5xl mb-8">
            Why Choose Boushahri Group Medical as Your Partner?
          </h2>

          {/* Description */}
          <p className="text-white/80 font-inter text-base lg:text-lg leading-relaxed text-center max-w-3xl mb-16">
            Partnering with us means leveraging deep market insights and proven logistics expertise. We are committed to helping you navigate the GCC healthcare landscape effectively.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full max-w-5xl">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                
                {/* Text */}
                <p className="text-white font-inter text-sm lg:text-base leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}