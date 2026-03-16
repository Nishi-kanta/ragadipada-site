import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function Overview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5cf?q=80&w=2070&auto=format&fit=crop"
                alt="Ragadipada Community"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-3xl bg-saffron/10 md:block" />
          </div>

          <div>
            <SectionTitle
              title="A Vibrant Village in Cuttack"
              subtitle="Ragadipada is more than just a coordinate on a map; it's a living testament to Odisha's rich rural heritage and spiritual depth."
            />
            
            <div className="space-y-8 text-stone-600 leading-relaxed">
              <p>
                Situated in the Badamba Tehsil of Cuttack district, Ragadipada is a Gram Panchayat that prides itself on its strong sense of community and religious significance. The village is known for its multiple Sahis (sub-areas), each with its own unique identity and local traditions.
              </p>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-bold text-primary-900 text-lg">Rich Traditions</h4>
                  <p className="text-sm">From the grand Rath Yatra to local festivals, every season brings a new celebration of life and faith.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary-900 text-lg">Natural Landscapes</h4>
                  <p className="text-sm">Surrounded by serene ponds and lush landscapes, Ragadipada offers a peaceful escape into nature.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary-900 text-lg">Leading Progress</h4>
                  <p className="text-sm">Active leadership and development projects are constantly shaping a better future for every villager.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-primary-900 text-lg">Educational Focus</h4>
                  <p className="text-sm">Home to quality primary and secondary schools ensuring the growth of our next generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
