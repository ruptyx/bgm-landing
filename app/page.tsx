import AboutSection from "@/app/_components/aboutus";
import CoreValuesSection from "@/app/_components/corevalue";
import FooterSection from "@/app/_components/footer";
import HeroSection from "@/app/_components/herosection";
import InfrastructureSection from "@/app/_components/infra";
import Navbar from "@/app/_components/navbar";
import ServiceOfferingsSection from "@/app/_components/offerings";
import OurValuesSection from "@/app/_components/ourvalue";
import ProductDivisionsSection from "@/app/_components/product";
import WhyChooseSection from "@/app/_components/why";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // Added a div to wrap all content and apply the background color
    <div className="bg-[#F3F3F3]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <OurValuesSection />
      <ServiceOfferingsSection />
      <ProductDivisionsSection />
      <InfrastructureSection />
      {/* <WhyChooseSection /> */}
      <FooterSection />
    </div>
  )
}
