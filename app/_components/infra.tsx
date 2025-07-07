import Image from 'next/image'

export default function InfrastructureSection() {
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

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        <div className="px-6 md:px-12 lg:px-[48px]">
          {/* Header */}
          <h2 className="text-3xl md:text-5xl lg:text-[64px] leading-[110%] tracking-tighter lg:tracking-[-3.84px] text-center mb-16">
            <span className="font-inter font-normal text-black">
              Robust Infrastructure & Advanced Technology for
            </span>
            {' '}
            <span className="font-inter italic font-normal text-[#7BA0CA]">
              Seamless Operations
            </span>
          </h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="w-full lg:w-[422px] p-2 pb-6 flex flex-col items-start gap-6 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
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
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-24">
            {/* Partners Title */}
            <h3 className="text-black font-inter text-2xl lg:text-3xl font-normal text-center mb-12">
              Trusted by the world's leading healthcare brands
            </h3>

            {/* Partner Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
              {partners.map((partner, index) => (
                <div key={index} className="relative w-24 h-16 lg:w-32 lg:h-20 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}