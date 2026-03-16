import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

const ponds = [
  {
    title: "Baunsa Pokhari",
    description: "The largest and most important community pond, central to many village rituals.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop",
    href: "/ponds/baunsa-pokhari",
    badge: "Community Hub"
  },
  {
    title: "Radhakanta Pond",
    description: "A serene water body located near the Radha Krishna Temple, known for its clear water.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop",
    href: "/ponds/radhakanta-pond",
    badge: "Spiritual"
  },
  {
    title: "Sahi Pokhari",
    description: "A vital water source for the residents of Bada Sahi, recently renovated.",
    image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=2070&auto=format&fit=crop",
    href: "/ponds/sahi-pokhari",
    badge: "Renovated"
  }
];

export default function PondsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Village Ponds"
          subtitle="Our water bodies are the lifeline of the village, serving both practical and spiritual needs."
          image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Vital Water Bodies"
              subtitle="Ponds in local culture represent purity and community life. We take pride in maintaining them."
              centered
            />
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {ponds.map((pond, idx) => (
                <Card key={idx} {...pond} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
