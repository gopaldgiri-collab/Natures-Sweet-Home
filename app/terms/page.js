import { LegalShell } from '@/components/site/LegalShell';
export const metadata = { title: "Terms & Conditions — Natures Sweet Homes" };
export default function Terms() {
  return (
    <LegalShell title="Terms & Conditions" intro="By booking a stay with Natures Sweet Homes you agree to the following terms.">
      <h2>Bookings & payments</h2>
      <p>A confirmed booking requires the agreed advance payment. The balance is payable as per the schedule communicated at the time of booking.</p>
      <h2>Check-in / check-out</h2>
      <p>Standard check-in is 2:00 PM and check-out is 11:00 AM unless otherwise communicated.</p>
      <h2>Guest conduct</h2>
      <p>Guests are expected to treat the villa, staff and neighbours with respect. Damages caused during the stay will be charged at actuals.</p>
      <h2>Smoking & substances</h2>
      <p>Smoking inside the villas and use of illegal substances are strictly prohibited.</p>
      <h2>Force majeure</h2>
      <p>We are not liable for situations beyond our control — weather, government restrictions, road closures — but we will work hard to find an alternative or amicable resolution.</p>
      <h2>Jurisdiction</h2>
      <p>Any disputes shall be subject to the jurisdiction of the courts of Satara, Maharashtra.</p>
    </LegalShell>
  );
}
