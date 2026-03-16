import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center pt-20">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
          alt="Village Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-saffron/20 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saffron opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-saffron"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-saffron">
              Welcome to the Heart of Badamba
            </span>
          </div>
          
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Experience the Heritage of <span className="text-saffron">Ragadipada</span>
          </h1>
          
          <p className="mt-8 text-lg font-medium leading-relaxed text-stone-200 md:text-xl lg:max-w-2xl">
            A spiritual and cultural landmark in Cuttack, Odisha. Home to ancient traditions, vibrant festivals, and a community rooted in harmony.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            <Link
              href="/about"
              className="rounded-full bg-saffron px-8 py-4 text-sm font-black uppercase tracking-widest text-primary-900 transition-transform hover:scale-105"
            >
              Explore History
            </Link>
            <Link
              href="/gallery"
              className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-primary-900"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}
