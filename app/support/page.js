import { LegalShell } from '@/components/site/LegalShell';
import { CONTACT, waLink } from '@/lib/site-data';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';
export const metadata = { title: "Support — Natures Sweet Homes" };
export default function Support() {
  return (
    <LegalShell title="Support" intro="Need help with an active booking, a future stay, or partnering your villa with us? We're a WhatsApp message away.">
      <h2>Existing booking</h2>
      <p>Reach out to your assigned WhatsApp concierge directly. They are available 7AM–11PM, 365 days.</p>
      <h2>New inquiries</h2>
      <p>WhatsApp us on {CONTACT.phoneDisplay} or send a message via the Contact page — we respond within minutes during business hours.</p>
      <h2>Partner / list your villa</h2>
      <p>Email us at {CONTACT.email} with property details and photographs. Our team will get back within 24 hours.</p>
      <div className="not-prose mt-8 flex flex-wrap gap-3">
        <a href={waLink()} target="_blank" rel="noopener noreferrer"><Button className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full"><MessageCircle className="w-4 h-4 mr-2" />WhatsApp Support</Button></a>
        <a href={`tel:${CONTACT.phone}`}><Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white rounded-full"><Phone className="w-4 h-4 mr-2" />Call</Button></a>
        <a href={`mailto:${CONTACT.email}`}><Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white rounded-full"><Mail className="w-4 h-4 mr-2" />Email</Button></a>
      </div>
    </LegalShell>
  );
}
