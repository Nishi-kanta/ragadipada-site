import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Have questions or suggestions? Reach out to the Ragadipada Gram Panchayat office."
          image="https://images.unsplash.com/photo-1596422846543-75c6fc18a5cf?q=80&w=2070&auto=format&fit=crop"
        />
        
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <SectionTitle
                  title="Get in Touch"
                  subtitle="We are here to assist the residents and visitors of Ragadipada."
                />
                
                <div className="mt-8 space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/20 text-2xl">📍</div>
                    <div>
                      <h4 className="font-black text-primary-900 uppercase tracking-widest text-sm">Main Office</h4>
                      <p className="mt-2 text-stone-600">Ragadipada Gram Panchayat Bhawan<br />Badamba, Cuttack, Odisha - 754031</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/20 text-2xl">📞</div>
                    <div>
                      <h4 className="font-black text-primary-900 uppercase tracking-widest text-sm">Phone</h4>
                      <p className="mt-2 text-stone-600">+91 6712-XXXXXX (Panchayat Office)<br />+91 9437XXXXXX (Sarpanch Help Desk)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/20 text-2xl">✉️</div>
                    <div>
                      <h4 className="font-black text-primary-900 uppercase tracking-widest text-sm">Email</h4>
                      <p className="mt-2 text-stone-600">contact@ragadipada.com<br />grampanchayat.ragadipada@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 rounded-[2rem] bg-stone-50 p-8">
                  <h4 className="font-black text-primary-900 text-lg">Office Hours</h4>
                  <ul className="mt-4 space-y-2 text-stone-600">
                    <li className="flex justify-between"><span>Monday - Friday</span><span>10:00 AM - 05:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span>10:00 AM - 02:00 PM</span></li>
                    <li className="flex justify-between font-bold text-primary-700"><span>Sunday</span><span>Closed</span></li>
                  </ul>
                </div>
              </div>

              <div className="rounded-[2.5rem] bg-white p-10 border border-stone-100 shadow-2xl">
                <h3 className="text-2xl font-black text-primary-900">Send a Message</h3>
                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-500">Your Name</label>
                      <input type="text" className="w-full rounded-2xl border border-stone-100 bg-stone-50 px-6 py-4 outline-none focus:border-saffron focus:ring-4 focus:ring-saffron/10" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-stone-500">Sahi / Area</label>
                      <input type="text" className="w-full rounded-2xl border border-stone-100 bg-stone-50 px-6 py-4 outline-none focus:border-saffron focus:ring-4 focus:ring-saffron/10" placeholder="e.g., Bada Sahi" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-stone-500">Email Address</label>
                    <input type="email" className="w-full rounded-2xl border border-stone-100 bg-stone-50 px-6 py-4 outline-none focus:border-saffron focus:ring-4 focus:ring-saffron/10" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-stone-500">Message</label>
                    <textarea rows={4} className="w-full rounded-2xl border border-stone-100 bg-stone-50 px-6 py-4 outline-none focus:border-saffron focus:ring-4 focus:ring-saffron/10" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full rounded-full bg-primary-900 py-5 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-transform hover:scale-[1.02]">
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
