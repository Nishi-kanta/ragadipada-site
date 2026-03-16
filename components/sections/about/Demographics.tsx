import SectionTitle from "@/components/SectionTitle";

export default function Demographics() {
  const data = [
    { label: "Total Population", value: "3,676", detail: "As per 2011 Census" },
    { label: "Male Population", value: "1,900", detail: "51.7% of total" },
    { label: "Female Population", value: "1,776", detail: "48.3% of total" },
    { label: "Literacy Rate", value: "74.62%", detail: "Higher than average" },
    { label: "Total Households", value: "824", detail: "Residing families" },
    { label: "Child Population", value: "372", detail: "Age 0-6 years" },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Village Demographics"
          subtitle="A closer look at the people who make Ragadipada a thriving community."
          centered
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, idx) => (
            <div key={idx} className="rounded-3xl bg-white p-8 shadow-sm border border-stone-100 transition-transform hover:scale-[1.02]">
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{item.label}</h4>
              <p className="mt-4 text-4xl font-black text-primary-900">{item.value}</p>
              <p className="mt-2 text-sm text-stone-500">{item.detail}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-[2rem] bg-primary-900 p-12 text-white shadow-2xl lg:flex lg:items-center lg:justify-between">
          <div className="lg:max-w-xl">
            <h3 className="text-3xl font-black">Join Our Community</h3>
            <p className="mt-4 text-stone-300">
              Ragadipada is a village where every person contributes to the collective growth. Our administrative and social systems are designed to foster harmony.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <span className="inline-block rounded-full bg-saffron px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-900">
              Become a Volunteer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
