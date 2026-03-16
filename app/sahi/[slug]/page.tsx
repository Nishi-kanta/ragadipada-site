import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { sahis } from "@/data/villageData";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return sahis.map((sahi) => ({
    slug: sahi.slug,
  }));
}

export default async function SahiDetailPage({ params }: Props) {
  const { slug } = await params;
  const sahi = sahis.find((s) => s.slug === slug);

  if (!sahi) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title={sahi.title}
          subtitle={sahi.description}
          image={sahi.image}
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SectionTitle title="About the Area" />
                <div className="prose prose-stone max-w-none text-lg leading-relaxed text-stone-600">
                  <p>{sahi.fullDescription}</p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="rounded-3xl bg-stone-50 p-8 border border-stone-100">
                    <h4 className="text-sm font-black uppercase tracking-widest text-primary-900">Temples in {sahi.title}</h4>
                    <ul className="mt-4 space-y-2">
                      {sahi.temples.map((temple, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-bold text-stone-700">
                          <span className="text-saffron">🛕</span> {temple}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-3xl bg-stone-50 p-8 border border-stone-100">
                    <h4 className="text-sm font-black uppercase tracking-widest text-primary-900">Landmarks & Ponds</h4>
                    <ul className="mt-4 space-y-2">
                      {sahi.ponds.map((pond, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-bold text-stone-700">
                          <span className="text-blue-400">💧</span> {pond}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-[2.5rem] bg-primary-900 p-10 text-white shadow-2xl">
                  <h3 className="text-2xl font-black">Statistics</h3>
                  <div className="mt-8 space-y-6">
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-stone-400">Estimated Population</span>
                      <p className="mt-1 text-3xl font-black">{sahi.population}</p>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <span className="text-xs font-black uppercase tracking-widest text-stone-400">Total Households</span>
                      <p className="mt-1 text-3xl font-black">{sahi.houses}</p>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl">
                    <Image 
                        src={sahi.image} 
                        alt={sahi.title} 
                        fill 
                        className="object-cover"
                    />
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
