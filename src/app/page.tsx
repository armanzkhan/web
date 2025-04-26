import Header from "./components/Header";
import Banner from "./components/Banner";
import IntroSection from "./components/SectionIntro";
import MosaicGrid from "./components/MosaicGrids";
import MosaicGridSecond from "./components/MosaicGrid2";
import CallToActionSection from "./components/Calltoaction";
import FooterSection from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <IntroSection />
      <MosaicGrid />
      <MosaicGridSecond />
      <CallToActionSection />
      <FooterSection />
    </>
  );
}