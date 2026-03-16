"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { useState } from "react";

const photos = [
  { id: 1, category: "Temples", url: "https://images.unsplash.com/photo-1621274403997-37aae1848b40?q=80&w=2071&auto=format&fit=crop" },
  { id: 2, category: "Festivals", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" },
  { id: 3, category: "Nature", url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop" },
  { id: 4, category: "Community", url: "https://images.unsplash.com/photo-1596422846543-75c6fc18a5cf?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, category: "Temples", url: "https://images.unsplash.com/photo-1599341626413-989d62d26d70?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, category: "Festivals", url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, category: "Nature", url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop" },
  { id: 8, category: "History", url: "https://images.unsplash.com/photo-1540266513303-392949ea369a?q=80&w=1964&auto=format&fit=crop" },
];

const categories = ["All", "Temples", "Festivals", "Nature", "Community", "History"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos = activeCategory === "All" 
    ? photos 
    : photos.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Village Gallery"
          subtitle="A visual journey through the landscapes, traditions, and people of Ragadipada."
          image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <SectionTitle
              title="Captured Moments"
              subtitle="Browse through our collection of photos documenting the beauty and spirit of our village."
              centered
            />

            {/* Filter Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2 text-sm font-black uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                    ? "bg-primary-900 text-white shadow-lg" 
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPhotos.map((photo) => (
                <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-3xl">
                  <Image
                    src={photo.url}
                    alt={photo.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-900/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-6">
                    <span className="text-white font-bold uppercase tracking-wider">{photo.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
