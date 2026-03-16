import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/villageData";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Events & Festivals"
          subtitle="Experience the vibrant pulse of Ragadipada through our year-round celebrations and community events."
          image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Cultural Calendar"
              subtitle="Our village comes alive with faith, music, and joy during these traditional festivals."
              centered
            />
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, idx) => (
                <Card 
                  key={idx} 
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  href={`/events/${event.slug}`}
                  badge={event.badge}
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
