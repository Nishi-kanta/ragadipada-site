import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/home/Hero";
import Stats from "@/components/sections/home/Stats";
import Overview from "@/components/sections/home/Overview";
import LatestEvents from "@/components/sections/home/LatestEvents";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Overview />
        <LatestEvents />
      </main>
      <Footer />
    </>
  );
}
