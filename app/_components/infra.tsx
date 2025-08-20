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
    { logo: "/allergan.png", name: "Allergan" },
    { logo: "/Asentia.png", name: "Asentia" },
    { logo: "/Bausch&-Lomb.png", name: "Bausch & Lomb" },
    { logo: "/Boushari-Group-Medical.png", name: "Boushari Group Medical" },
    { logo: "/c4.png", name: "C4" },
    { logo: "/Difa-Cooper-.png", name: "Difa Cooper" },
    { logo: "/Dr-Grandel.png", name: "Dr. Grandel" },
    { logo: "/EP-Care-Zenith.png", name: "EP Care Zenith" },
    { logo: "/Geuder.png", name: "Geuder" },
    { logo: "/human-essentials.png", name: "Human Essentials" },
    { logo: "/ilooda.png", name: "Ilooda" },
    { logo: "/Johnson-and-Johnson-MedTech.png", name: "Johnson & Johnson MedTech" },
    { logo: "/Kepler.png", name: "Kepler" },
    { logo: "/LG-Chem.png", name: "LG Chem" },
    { logo: "/NEODERMA.png", name: "Neoderma" },
    { logo: "/NutriGrow-Hait-Growth.png", name: "NutriGrow Hair Growth" },
    { logo: "/PCLQ.png", name: "PCLQ" },
    { logo: "/regenlab.png", name: "Regenlab" },
    { logo: "/ross-max.png", name: "Rossmax" },
    { logo: "/Schmitz.png", name: "Schmitz" },
    { logo: "/solta.png", name: "Solta" },
    { logo: "/Wolting-GmbH.png", name: "Wolting GmbH" }
  ]

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-8 sm:py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        <div className="px-4 sm:px-6 md:px-12 lg:px-[48px]">
          {/* Header */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] leading-[110%] tracking-tight sm:tracking-tighter lg:tracking-[-3.84px] text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="font-inter font-normal text-black">
              Robust Infrastructure & Advanced Technology for
            </span>
            {' '}
            <span className="font-inter italic font-normal text-[#7BA0CA]">
              Seamless Operations
            </span>
          </h2>

          {/* Feature Cards - Stack on mobile, grid on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-24">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="w-full lg:w-[422px] p-2 pb-4 sm:pb-6 flex flex-col items-start gap-4 sm:gap-6 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image */}
                <div className="relative w-full h-[200px] sm:h-[250px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="px-3 sm:px-4">
                  {/* Title */}
                  <h3 className="text-black font-inter text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="mt-12 sm:mt-16 lg:mt-24">
            {/* Partners Title */}
            <h3 className="text-black font-inter text-xl sm:text-2xl lg:text-3xl font-normal text-center mb-8 sm:mb-12 px-2">
              Trusted by the world's leading healthcare brands
            </h3>

            {/* Partner Logos Grid - Responsive columns */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className="relative w-20 h-14 sm:w-24 sm:h-16 lg:w-32 lg:h-20 flex items-center justify-center group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 128px"
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