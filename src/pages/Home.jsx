import Hero from "../components/Hero";
// import ImageSlider from "../components/ImageSlider";
import OurServices from "../components/OurServices";
import PartnersSection from "../components/PartnersSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurServices />
      {/* <ImageSlider /> */}
      <PartnersSection />
    </div>
  );
}
