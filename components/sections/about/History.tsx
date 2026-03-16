import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function History() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              title="Our Rich History"
              subtitle="The legacy of Ragadipada is woven into the history of Cuttack and the Badamba princely state."
            />
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-balance">
              <p>
                Ragadipada has historically been a significant cultural hub in the Badamba region. Its origins date back centuries, when it served as a vital agricultural and spiritual center under the patronage of the local rulers.
              </p>
              <p>
                The village name itself is said to have roots in the local dialect, reflecting the unique geography and the resilient spirit of its early settlers. Over the generations, Ragadipada has maintained its traditional charm while gradually embracing modern progress.
              </p>
              <p>
                Today, the village stands as a prime example of Odisha's "Gramya Jeevan" (village life), where ancient customs, temple traditions, and community values continue to thrive in the 21st century.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-100 pt-10">
              <div>
                <h4 className="text-4xl font-black text-primary-900">100+</h4>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Years of Heritage</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-primary-900">50+</h4>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">Cultural Events</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540266513303-392949ea369a?q=80&w=1964&auto=format&fit=crop"
                alt="Historical Village Image"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Saffron Box */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-saffron/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
