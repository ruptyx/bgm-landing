export default function AboutSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-12 lg:py-24">
      <div className="max-w-[1408px] mx-auto">
        {/* Container with same padding as hero text */}
        <div className="px-6 md:px-12 lg:px-[48px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
            {/* About Us Label with pill border */}
            <div className="inline-flex px-4 py-2 justify-center items-center gap-2 rounded-full border border-[#D1D1D1] flex-shrink-0">
              <h2 className="text-black font-inter text-lg lg:text-[20px] italic font-normal leading-[100%] tracking-tighter lg:tracking-[-1.2px]">
                About Us
              </h2>
            </div>

            {/* Content */}
            <div className="w-full lg:w-[755px] flex-shrink-0">
              <p className="text-[#CACACA] font-roboto text-2xl md:text-3xl lg:text-[40px] font-normal leading-[140%] tracking-tighter lg:tracking-[-2.4px]">
                Founded in 2009, Boushahri Group Medical has established itself as one of the top 10 healthcare solution providers in Kuwait. With recent expansions to Bahrain in 2022 and Oman in 2024, we are trusted by both public and private healthcare institutions.
              </p>
            </div>
          </div>
        </div>
      </div> {/* This was the missing closing div tag */}
    </section>
  )
}