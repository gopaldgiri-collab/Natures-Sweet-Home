import { LegalShell } from '@/components/site/LegalShell';
export const metadata = { title: "Privacy Policy — Natures Sweet Homes" };
export default function Privacy() {
  return (
    <LegalShell title="Privacy Policy" intro="Your trust matters. Here's exactly how we collect, use and safeguard the information you share with Natures Sweet Homes.">
      <h2>Information we collect</h2>
      <p>We collect name, phone number, email address, check-in/check-out dates and any preferences you share through our inquiry forms or WhatsApp conversations.</p>
      <h2>How we use it</h2>
      <p>Solely to respond to bookings, deliver your stay experience, send relevant offers and improve our service. We never sell your data.</p>
      <h2>Cookies</h2>
      <p>We may use cookies and analytics to understand how visitors browse our site and to enable essential features.</p>
      <h2>Third parties</h2>
      <p>Limited information may be shared with payment gateways, property owners and trusted service vendors solely to fulfil your booking.</p>
      <h2>Your rights</h2>
      <p>Email us anytime to access, correct or delete your data.</p>
      <h2>Contact</h2>
      <p>Email: bookings or queries can be sent to our team — see the Contact page.</p>
    </LegalShell>
  );
}
