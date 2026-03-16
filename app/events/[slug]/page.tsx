import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/villageData";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={event.title}
          subtitle={event.description}
          image={event.image}
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SectionTitle title="Festival Overview" />
                <div className="prose prose-stone max-w-none text-lg leading-relaxed text-stone-600">
                  <p>{event.fullDescription}</p>
                </div>

                <div className="mt-12 rounded-[2.5rem] overflow-hidden">
                    <div className="relative aspect-video">
                        <Image 
                            src={event.image} 
                            alt={event.title} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-[2.5rem] bg-saffron p-10 text-primary-900 shadow-2xl">
                  <h3 className="text-2xl font-black">Event Details</h3>
                  <div className="mt-8 space-y-6">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-primary-900/60">Tentative Date</span>
                      <p className="mt-1 text-2xl font-black">{event.date}</p>
                    </div>
                    <div className="pt-6 border-t border-primary-900/10">
                      <span className="text-xs font-black uppercase tracking-widest text-primary-900/60">Location</span>
                      <p className="mt-1 text-2xl font-black">{event.location}</p>
                    </div>
                    <div className="pt-6 border-t border-primary-900/10">
                      <span className="text-xs font-black uppercase tracking-widest text-primary-900/60">Admission</span>
                      <p className="mt-1 text-2xl font-black">Free for Everyone</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2.5rem] bg-stone-900 p-10 text-white">
                    <h4 className="text-xl font-black">Community Note</h4>
                    <p className="mt-4 text-stone-400 text-sm leading-relaxed">
                        We welcome visitors from all regions to witness the vibrant culture of Ragadipada. Please follow the village guidelines and maintain the sanctity of the sacred event locations.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
