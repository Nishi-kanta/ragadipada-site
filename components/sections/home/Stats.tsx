export default function Stats() {
  const stats = [
    { label: "Population", value: "3,676+", icon: "👥" },
    { label: "Total Sahis", value: "12+", icon: "🏘️" },
    { label: "Temples", value: "15+", icon: "🛕" },
    { label: "Ponds", value: "8+", icon: "💧" },
    { label: "Schools", value: "3", icon: "🏫" },
    { label: "Area Code", value: "754031", icon: "📍" },
  ];

  return (
    <section className="relative z-20 -mt-16 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl border border-stone-100 bg-white p-6 shadow-xl transition-transform hover:-translate-y-2"
            >
              <span className="mb-4 text-3xl">{stat.icon}</span>
              <span className="text-2xl font-black text-primary-900">{stat.value}</span>
              <span className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
