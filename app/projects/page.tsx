import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

const projects = [
  {
    title: "Main Road Renovation",
    status: "Completed",
    description: "Complete tarring and drainage improvement of the main entry road from Badamba highway.",
    date: "Dec 2024",
    impact: "Improved connectivity for 800+ households."
  },
  {
    title: "School Library Expansion",
    status: "In Progress",
    description: "Building a new digital-ready library block for the High School with 1000+ books capacity.",
    date: "Expected May 2025",
    impact: "Enhanced learning resources for 300+ students."
  },
  {
    title: "Pond Desiltation Drive",
    status: "Ongoing",
    description: "Deepening and cleaning of Baunsa Pokhari to improve water storage for the irrigation season.",
    date: "April - June 2025",
    impact: "Vast improvement in groundwater level and water availability."
  },
  {
    title: "Community Solar Lights",
    status: "Planning",
    description: "Installation of 50 solar-powered street lights across all 12 Sahis of the village.",
    date: "Coming Soon",
    impact: "Better safety and energy efficiency for night travel."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Development Projects"
          subtitle="Tracking the progress of infrastructure and social initiatives aimed at making Ragadipada better."
          image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Building Our Future"
              subtitle="Overview of the key projects being undertaken by the Gram Panchayat and community collectives."
            />
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project, idx) => (
                <div key={idx} className="rounded-[2rem] border border-stone-100 bg-stone-50 p-10 transition-shadow hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      project.status === 'Ongoing' ? 'bg-saffron/20 text-primary-900' :
                      'bg-stone-200 text-stone-500'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm font-bold text-stone-400">{project.date}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-primary-900">{project.title}</h3>
                  <p className="mt-4 text-stone-600 leading-relaxed">{project.description}</p>
                  
                  <div className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-4">
                    <span className="text-xl">🚀</span>
                    <div>
                      <h4 className="text-sm font-bold text-primary-900 uppercase tracking-widest">Impact</h4>
                      <p className="mt-1 text-sm text-stone-500">{project.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
