import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function LeadershipPage() {
  const currentLeaders = [
    { name: "Smt. Jayanti Sahoo", role: "Sarpanch", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
    { name: "Shri Prakash Swain", role: "Naib Sarpanch", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
    { name: "Shri Ashok Mohanty", role: "Ward Member (Sahi 1)", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Smt. Meera Rout", role: "Ward Member (Sahi 2)", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
  ];

  const previousSarpanch = [
    { name: "Shri Ramesh Chandra Das", period: "2017 - 2022" },
    { name: "Smt. Sanjukta Parija", period: "2012 - 2017" },
    { name: "Shri Gopinath Sahoo", period: "2007 - 2012" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Village Leadership"
          subtitle="Guided by dedicated individuals committed to the growth and prosperity of Ragadipada."
          image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Current Leadership"
              subtitle="The elected representatives who lead our Gram Panchayat with vision and integrity."
            />
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {currentLeaders.map((leader, idx) => (
                <div key={idx} className="group overflow-hidden rounded-3xl bg-stone-50 transition-transform hover:-translate-y-2">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-lg font-black text-primary-900">{leader.name}</h4>
                    <p className="mt-1 text-sm font-bold uppercase tracking-widest text-saffron">{leader.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24">
              <SectionTitle
                title="Legacy of Service"
                subtitle="Honoring the past Sarpanch who have contributed to the village's journey."
              />
              <div className="overflow-hidden rounded-3xl border border-stone-100 bg-stone-50">
                <table className="w-full text-left">
                  <thead className="bg-primary-900 text-white">
                    <tr>
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest">Name</th>
                      <th className="px-8 py-4 text-sm font-black uppercase tracking-widest text-right">Tenure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {previousSarpanch.map((leader, idx) => (
                      <tr key={idx} className="transition-colors hover:bg-stone-100">
                        <td className="px-8 py-6 font-bold text-primary-900">{leader.name}</td>
                        <td className="px-8 py-6 text-right font-medium text-stone-600">{leader.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
