import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Story from "@/components/story/Story";
import Details from "@/components/details/Details";
import Timeline from "@/components/timeline/Timeline";
import Gallery from "@/components/gallery/Gallery";
import RSVP from "@/components/rsvp/RSVP";
import GiftRegistry from "@/components/gift/GiftRegistery"; 
import FAQ from "@/components/faq/FAQ";
import WeddingMap from "@/components/map/WeddingMap";
import Footer from "@/components/footer/Footer";
import Countdown from "@/components/countdown/Countdown";
import Hotels from "@/components/hotels/Hotels";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Countdown />
      <Story />
      <Details />
      <Timeline />
      <Gallery />
      <RSVP />
      <GiftRegistry />
      <Hotels />
      <FAQ />
      <WeddingMap />
      <Footer />
    </main>
  );
}