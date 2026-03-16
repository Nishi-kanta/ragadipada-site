import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

const schools = [
  {
    title: "Ragadipada Primary School",
    description: "Established in 1965, providing foundational education to the youngest residents.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    href: "/schools/primary-school",
    badge: "Foundation"
  },
  {
    title: "Ragadipada High School",
    description: "A leading educational institution in the Badamba region with a focus on holistic development.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    href: "/schools/high-school",
    badge: "Secondary"
  },
  {
    title: "Saraswati Shishu Mandir",
    description: "Promoting traditional values alongside modern curriculum for a balanced upbringing.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    href: "/schools/shishu-mandir",
    badge: "Value-based"
  }
];

export default function SchoolsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Education in Ragadipada"
          subtitle="Empowering our next generation through quality education and character building."
          image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Learning Institutions"
              subtitle="Our schools are dedicated to nurturing and educating the future leaders of our community."
              centered
            />
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {schools.map((school, idx) => (
                <Card key={idx} {...school} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
