import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

const temples = [
  {
    title: "Lord Jagannath Temple",
    description: "The spiritual heart of Ragadipada, hosting the annual Rath Yatra with great fervor.",
    image: "https://images.unsplash.com/photo-1621274403997-37aae1848b40?q=80&w=2071&auto=format&fit=crop",
    href: "/temples/jagannath-temple",
    badge: "Main Temple"
  },
  {
    title: "Maa Durga Mandir",
    description: "A beautiful temple dedicated to Goddess Durga, famous for its Dussehra celebrations.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    href: "/temples/durga-mandir",
    badge: "Historical"
  },
  {
    title: "Shiva Temple",
    description: "An ancient stone temple located near the Baunsa Pokhari, known for Maha Shivratri.",
    image: "https://images.unsplash.com/photo-1599341626413-989d62d26d70?q=80&w=2070&auto=format&fit=crop",
    href: "/temples/shiva-temple",
    badge: "Spiritual"
  },
  {
    title: "Radha Krishna Mandir",
    description: "A serene temple in Nua Sahi, known for its beautiful bhajans and Janmashtami events.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    href: "/temples/radha-krishna",
    badge: "Community"
  }
];

export default function TemplesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Sacred Temples"
          subtitle="Discover the divine landmarks and spiritual heritage of Ragadipada."
          image="https://images.unsplash.com/photo-1621274403997-37aae1848b40?q=80&w=2071&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Devotional Landmarks"
              subtitle="Temples in Ragadipada are not just places of worship but centers of community gathering and culture."
              centered
            />
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {temples.map((temple, idx) => (
                <Card key={idx} {...temple} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
