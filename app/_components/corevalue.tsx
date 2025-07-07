import Image from 'next/image'

export default function CoreValuesSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        {/* Container with same padding as hero text */}
        <div className="px-6 md:px-12 lg:px-[48px]">
          {/* Main container */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[92px]">
            {/* Core Value Label */}
            <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full border border-[#D1D1D1] flex-shrink-0">
              <span className="text-black font-inter text-lg lg:text-[20px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-1.2px]">
                Core Value
              </span>
            </div>

            {/* Content Container */}
            <div className="flex-1">
              {/* Header */}
              <h2 className="text-3xl md:text-5xl lg:text-[64px] leading-[110%] tracking-tighter lg:tracking-[-3.84px]">
                <span className="font-inter italic font-normal text-[#7BA0CA]">
                  Innovating Healthcare Solutions
                </span>
                {' '}
                <span className="font-inter font-normal text-black">
                  for a Healthier Tomorrow in the GCC
                </span>
              </h2>

              {/* Subheader */}
              <p className="mt-8 lg:mt-14 w-full lg:w-[508px] text-black font-roboto text-sm md:text-base font-normal leading-[140%] tracking-tight lg:tracking-[-0.96px]">
                At Boushahri Group Medical, we believe in transforming healthcare through cutting-edge solutions. Our commitment to excellence drives us to provide the best medical products and services in the Gulf region.
              </p>

              {/* Image and Cards Container */}
              <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-6">
                {/* Image */}
                <div className="relative w-full lg:w-[421px] h-[300px] md:h-[400px] lg:h-[460px] rounded-3xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/teamwork.jpg"
                    alt="Healthcare teamwork"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 421px"
                  />
                </div>

                {/* Cards Container */}
                <div className="flex flex-col gap-6">
                  {/* Mission Card */}
                  <div className="w-full lg:w-[310px] p-6 flex flex-col items-start gap-12 rounded-3xl bg-black">
                    <h3 className="text-[#A9C4E2]">
                      <span className="block font-inter text-4xl lg:text-[64px] font-medium leading-[100%] tracking-tighter lg:tracking-[-3.84px]">
                        Our
                      </span>
                      <span className="block font-inter text-4xl lg:text-[64px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-3.84px]">
                        Mission
                      </span>
                    </h3>
                    <p className="text-[#F3F3F3] font-inter text-sm lg:text-base font-medium leading-[130%] tracking-tight lg:tracking-[-0.96px]">
                      Provide high-quality healthcare products and build strong partnerships with professionals.
                    </p>
                  </div>

                  {/* Vision Card */}
                  <div className="w-full lg:w-[310px] h-auto lg:h-[177px] p-6 flex flex-col justify-between items-start rounded-3xl bg-white border border-gray-100">
                    <h3 className="text-[#7BA0CA] font-inter text-lg lg:text-[20px] font-semibold leading-[100%] tracking-wider lg:tracking-[0.8px] uppercase">
                      Our Vision
                    </h3>
                    <p className="mt-4 lg:mt-0 w-full lg:w-[226px] text-black font-inter text-sm lg:text-base font-medium leading-[130%] tracking-tight lg:tracking-[-0.96px]">
                      To revolutionize healthcare through innovative medical solutions in the GCC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}