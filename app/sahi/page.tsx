import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { sahis } from "@/data/villageData";

export default function SahiPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Sahis of Ragadipada"
          subtitle="Explore the unique sub-areas and neighborhoods that form our vibrant village."
          image="https://images.unsplash.com/photo-1588505794041-9c3222f85303?q=80&w=2070&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Our Neighborhoods"
              subtitle="Every Sahi in Ragadipada has its own history, landmarks, and community spirit."
              centered
            />
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sahis.map((sahi, idx) => (
                <Card 
                  key={idx} 
                  title={sahi.title}
                  description={sahi.description}
                  image={sahi.image}
                  href={`/sahi/${sahi.slug}`}
                  badge={sahi.badge}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
