import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-stone-100 bg-stone-50 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-primary-900">RAGADIPADA</h3>
            <p className="text-sm leading-relaxed text-stone-600">
              A comprehensive portal dedicated to the heritage, people, and development of Ragadipada Village, Badamba Tehsil, Cuttack.
            </p>
          </div>
          
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-900">Information</h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><Link href="/about" className="hover:text-primary-600">About Village</Link></li>
              <li><Link href="/leadership" className="hover:text-primary-600">Village Leadership</Link></li>
              <li><Link href="/projects" className="hover:text-primary-600">Development Projects</Link></li>
              <li><Link href="/gallery" className="hover:text-primary-600">Photo Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-900">Community</h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><Link href="/sahi" className="hover:text-primary-600">Sahi Areas</Link></li>
              <li><Link href="/temples" className="hover:text-primary-600">Temples</Link></li>
              <li><Link href="/events" className="hover:text-primary-600">Events & Festivals</Link></li>
              <li><Link href="/schools" className="hover:text-primary-600">Schools</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary-900">Location</h4>
            <div className="space-y-3 text-sm text-stone-600">
              <p>Ragadipada, Badamba</p>
              <p>Cuttack, Odisha - 754031</p>
              <p className="pt-2">Ragadipada Gram Panchayat</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-stone-200 pt-8 text-center text-sm text-stone-500">
          <p>© {currentYear} Ragadipada Village Information Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
