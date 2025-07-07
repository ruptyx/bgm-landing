export default function ServiceOfferingsSection() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M8.5 7.5v-1a2 2 0 012-2h3a2 2 0 012 2v1m-7 0h7m-7 0a2 2 0 00-2 2v9a2 2 0 002 2h7a2 2 0 002-2v-9a2 2 0 00-2-2m-3.5 5.5v3m0 0l-1.5-1.5m1.5 1.5l1.5-1.5" />
          <circle cx="8" cy="12" r="3" />
          <circle cx="16" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
        </svg>
      ),
      title: "Our Distribution Capabilities",
      description: "Delivering reliable medical distribution and logistics tailored to your needs."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M11 4H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 11l3 3" />
        </svg>
      ),
      title: "Equipment Installation & Upgrades",
      description: "Ensuring optimal performance with professional installation."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 1v6m0 6v6m11-7h-6m-6 0H1m20.485-6.485l-4.242 4.242M7.757 16.243L3.515 20.485m13.97 0l-4.242-4.242M7.757 7.757L3.515 3.515" />
        </svg>
      ),
      title: "Training & After-Sales Support",
      description: "Empowering your team with knowledge and ongoing support."
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13 3v5a1 1 0 001 1h5" />
        </svg>
      ),
      title: "Regulatory Compliance Support",
      description: "Navigating regulations for seamless market entry.",
      fullWidth: true
    },
    {
      icon: (
        <svg className="w-12 h-12 lg:w-16 lg:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Healthcare Consulting Services",
      description: "Expert guidance for healthcare professionals and businesses.",
      fullWidth: true
    }
  ]

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        <div className="px-6 md:px-12 lg:px-[48px]">
          {/* Main Container */}
          <div className="max-w-[1312px] flex flex-col items-start gap-14">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-[117px] w-full">
              {/* Services Label */}
              <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full border border-[#D1D1D1] flex-shrink-0">
                <span className="text-black font-inter text-lg lg:text-[20px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-1.2px]">
                  Services
                </span>
              </div>

              {/* Title and Subtitle Container */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start flex-1 gap-6">
                {/* Title */}
                <h2 className="text-3xl md:text-5xl lg:text-[64px] leading-[110%] tracking-tighter lg:tracking-[-3.84px] lg:w-[475px]">
                  <span className="font-inter italic font-normal text-[#7BA0CA]">
                    Comprehensive
                  </span>
                  {' '}
                  <span className="font-inter font-normal text-black">
                    Service Offerings
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-black font-roboto text-sm lg:text-base font-normal leading-[140%] max-w-xs">
                  Your partner in healthcare distribution and support.
                </p>
              </div>
            </div>

            {/* Services Bento Grid */}
            <div className="w-full space-y-6">
              {/* Top 3 Services */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* Icon with ellipse */}
                    <div className="relative mb-8">
                      <div className="text-[#16467B]">
                        {service.icon}
                      </div>
                      {/* Ellipse */}
                      <div className="absolute -bottom-2 left-8 w-20 h-3">
                        <svg viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="40" cy="6" rx="40" ry="6" fill="#A9C4E2" opacity="0.3"/>
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-black font-inter text-xl lg:text-2xl font-medium mb-4 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom 2 Services - Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {services.slice(3).map((service, index) => (
                  <div
                    key={index + 3}
                    className="bg-white p-6 flex flex-col items-start gap-4 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex-1"
                  >
                    {/* Icon with ellipse */}
                    <div className="relative">
                      <div className="text-[#16467B]">
                        {service.icon}
                      </div>
                      {/* Ellipse */}
                      <div className="absolute -bottom-2 left-8 w-20 h-3">
                        <svg viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="40" cy="6" rx="40" ry="6" fill="#A9C4E2" opacity="0.3"/>
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-black font-inter text-xl lg:text-2xl font-medium leading-tight mt-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 font-roboto text-sm lg:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ); // Removed the extra closing parenthesis here
}