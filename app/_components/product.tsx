import Image from 'next/image'

export default function ProductDivisionsSection() {
  const products = [
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" 
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Pharmaceuticals",
      description: "Delivering high-quality medications to healthcare providers."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" 
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a6 6 0 00-12 0v4a2 2 0 002 2zm0 0h12m-12 0v-4m12 4v-4" />
        </svg>
      ),
      title: "Aesthetics & Cosmetics",
      description: "Offering innovative solutions for aesthetic enhancement."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" 
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 8h10M7 12h10m-7 4h4" />
        </svg>
      ),
      title: "Medical Equipment",
      description: "Supplying state-of-the-art medical devices for professionals."
    }
  ]

  const coverageItems = [
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
      text: "Expanding across the Gulf – from Kuwait to Bahrain and Oman."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
        </svg>
      ),
      text: "15+ years of regional experience in healthcare distribution."
    },
    {
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      text: "Your trusted partner in GCC healthcare solutions."
    }
  ]

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        {/* Main White Container - 1408px × 1445px */}
        <div className="w-full lg:w-[1408px] lg:h-[1445px] bg-white rounded-[32px] p-6 md:p-12 lg:p-16 flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            {/* Our Product Label */}
            <div className="mb-6">
              <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full border border-[#D1D1D1]">
                <span className="text-black font-inter text-lg lg:text-[20px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-1.2px]">
                  Our Product
                </span>
              </div>
              
              {/* Title */}
              <h2 className="mt-6 text-3xl md:text-5xl lg:text-[64px] leading-[110%] tracking-tighter lg:tracking-[-3.84px] lg:w-[751px]">
                <span className="font-inter italic font-normal text-[#7BA0CA]">
                  Explore Our Diverse
                </span>
                {' '}
                <span className="font-inter font-normal text-black">
                  Product Divisions
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="lg:w-[512px] text-black font-inter text-sm lg:text-base font-normal leading-[140%] tracking-tight lg:tracking-[-0.96px] lg:mb-16">
              At Boushahri Group Medical, we offer a wide range of products tailored for the healthcare sector. Our divisions ensure that we meet the unique needs of our partners across various medical fields.
            </p>
          </div>

          {/* Product Cards */}
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
            {products.map((product, index) => (
              <div 
                key={index}
                className="flex-1 bg-white p-8 lg:p-10 rounded-3xl border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Icon */}
                <div className="text-[#16467B] mb-6">
                  {product.icon}
                </div>

                {/* Title */}
                <h3 className="text-black font-inter text-xl lg:text-2xl font-semibold mb-4">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Learn More Link */}

              </div>
            ))}
          </div>

          {/* Blue Coverage Section - 1384px × 723px */}
          <div className="relative w-full h-[400px] lg:h-[723px] rounded-[32px] overflow-hidden bg-[#16467B] flex">
            {/* Left Content Container */}
            <div className="flex-1 flex items-center p-8 lg:p-16">
              <div className="flex flex-col justify-center items-start gap-6">
                {/* Coverage Label */}
                <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-inter text-lg italic">
                    Coverage
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl lg:text-5xl font-inter font-normal leading-tight">
                  Expanding Our Reach Across the Gulf Region
                </h3>

                {/* Description */}
                <p className="text-white/80 font-inter text-base lg:text-lg leading-relaxed">
                  With over 15 years of experience, we are committed to enhancing healthcare access in the GCC. Our presence spans Kuwait, Bahrain, and Oman, ensuring reliable distribution and support.
                </p>

                {/* Coverage Items with White Pills */}
                <div className="flex flex-col gap-4 mt-4">
                  {coverageItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="inline-flex p-2 pl-2 pr-4 items-center gap-2 rounded-full bg-white"
                    >
                      <div className="w-10 h-10 bg-[#16467B] rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <p className="text-black font-inter text-sm lg:text-base">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="relative flex-1 h-full">
              <Image
                src="/multi.jpg"
                alt="Gulf region coverage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 692px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}