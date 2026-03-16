import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] w-full flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary-900/60 transition-opacity" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center text-white">
        <h1 className="text-4xl font-black uppercase tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-stone-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
