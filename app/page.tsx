import AboutSection from "@/app/_components/aboutus";
import CoreValuesSection from "@/app/_components/corevalue";
import FooterSection from "@/app/_components/footer";
import HeroSection from "@/app/_components/herosection";
import InfrastructureSection from "@/app/_components/infra";
import Navbar from "@/app/_components/navbar";
import ServiceOfferingsSection from "@/app/_components/offerings";
import OurValuesSection from "@/app/_components/ourvalue";
import ProductDivisionsSection from "@/app/_components/product";
import { AnimationProvider } from "@/app/_components/animation-provider";
import AnimationFallback from "@/app/_components/animation-fallback";

export default function HomePage() {
  return (
    <AnimationProvider>
      <AnimationFallback />
      {/* Added a div to wrap all content and apply the background color */}
      <div className="bg-[#F3F3F3]">
        <Navbar />
        <div className="pt-16 lg:pt-14">
          <div id="hero">
            <HeroSection />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="values">
            <CoreValuesSection />
            <OurValuesSection />
          </div>
          <div id="services">
            <ServiceOfferingsSection />
          </div>
          <div id="products">
            <ProductDivisionsSection />
          </div>
          <div id="infrastructure">
            <InfrastructureSection />
          </div>
          <div id="contact">
            <FooterSection />
          </div>
        </div>
      </div>
    </AnimationProvider>
  )
}
