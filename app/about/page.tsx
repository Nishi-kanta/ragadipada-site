import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import History from "@/components/sections/about/History";
import Demographics from "@/components/sections/about/Demographics";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero 
          title="About Ragadipada" 
          subtitle="Discover the history, heritage, and people of our beautiful village."
          image="https://images.unsplash.com/photo-1540266513303-392949ea369a?q=80&w=1964&auto=format&fit=crop"
        />
        <History />
        <Demographics />
      </main>
      <Footer />
    </>
  );
}
