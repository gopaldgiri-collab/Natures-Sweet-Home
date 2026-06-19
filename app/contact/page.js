import { CONTACT, waLink } from '@/lib/site-data';
import InquiryForm from '@/components/site/InquiryForm';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

export const metadata = { title: "Contact — Natures Sweet Homes" };

export default function Contact() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <img src="/images/pages/contact/contact.webp" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative h-full container mx-auto max-w-7xl px-5 md:px-8 flex items-end pb-14 text-white">
          <div><div className="gold-divider">Get in Touch</div><h1 className="font-serif text-5xl md:text-7xl mt-4">Contact Us</h1></div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <div className="gold-divider">Reach Us</div>
            <h2 className="font-serif text-4xl text-forest mt-3 mb-6">We&apos;re here to host you.</h2>
            <div className="space-y-5">
              <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-forest text-gold flex items-center justify-center flex-shrink-0"><MapPin size={18}/></div><div><div className="font-serif text-xl text-forest">Office Address</div><div className="text-sm text-muted-foreground mt-1">{CONTACT.address}</div></div></div>
              <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-forest text-gold flex items-center justify-center flex-shrink-0"><Phone size={18}/></div><div><div className="font-serif text-xl text-forest">Phone</div><a href={`tel:${CONTACT.phone}`} className="text-sm text-muted-foreground hover:text-gold mt-1 block">{CONTACT.phoneDisplay}</a></div></div>
              <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-forest text-gold flex items-center justify-center flex-shrink-0"><Mail size={18}/></div><div><div className="font-serif text-xl text-forest">Email</div><a href={`mailto:${CONTACT.email}`} className="text-sm text-muted-foreground hover:text-gold mt-1 block">{CONTACT.email}</a></div></div>
              <div className="flex gap-4"><div className="w-11 h-11 rounded-full bg-forest text-gold flex items-center justify-center flex-shrink-0"><Clock size={18}/></div><div><div className="font-serif text-xl text-forest">Hours</div><div className="text-sm text-muted-foreground mt-1">WhatsApp concierge available 9AM – 9PM, 365 days</div></div></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex-1"><Button className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp</Button></a>
              <a href={`tel:${CONTACT.phone}`} className="flex-1"><Button variant="outline" className="w-full border-forest text-forest hover:bg-forest hover:text-white rounded-full"><Phone className="w-4 h-4 mr-2" />Call Now</Button></a>
            </div>
            <div className="mt-8 aspect-[16/9] rounded-md overflow-hidden border border-border">
              <iframe title="office map" src={`https://www.google.com/maps?q=${CONTACT.mapsQuery}&output=embed`} className="w-full h-full" />
            </div>
          </div>
          <div className="bg-white rounded-md p-7 border border-border">
            <div className="gold-divider">Send Inquiry</div>
            <h3 className="font-serif text-3xl text-forest mt-3 mb-5">Tell us about your trip</h3>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
