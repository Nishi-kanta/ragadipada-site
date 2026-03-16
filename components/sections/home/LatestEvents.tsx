import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export default function LatestEvents() {
  const events = [
    {
      title: "Rath Yatra Celebration",
      description: "Witness the grand procession of Lord Jagannath through the main streets of Ragadipada. A day of immense devotion and joy.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
      href: "/events/rath-yatra",
      badge: "Upcoming"
    },
    {
      title: "Village Sports Meet",
      description: "Annual sports competition featuring cricket, athletics, and traditional village games. Encouraging youth participation.",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
      href: "/events/sports-meet",
      badge: "March 20"
    },
    {
      title: "Community Cleaning Drive",
      description: "A collective effort to clean the main ponds and village paths for the upcoming festival season.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop",
      href: "/events/clean-drive",
      badge: "Complete"
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionTitle
          title="Events & Festivals"
          subtitle="Stay updated with the latest happenings, traditional festivals, and community gatherings in our village."
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, idx) => (
            <Card key={idx} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
