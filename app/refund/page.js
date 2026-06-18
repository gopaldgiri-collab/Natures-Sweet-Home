import { LegalShell } from '@/components/site/LegalShell';
export const metadata = { title: "Refund Policy — Natures Sweet Homes" };
export default function Refund() {
  return (
    <LegalShell title="Refund & Cancellation Policy" intro="We aim to be fair to both guests and villa owners. Please review our cancellation slabs below.">
      <h2>Cancellation slabs</h2>
      <ul>
        <li>More than 30 days before check-in: 90% refund of advance.</li>
        <li>15 to 30 days before check-in: 50% refund of advance.</li>
        <li>7 to 14 days before check-in: 25% refund of advance.</li>
        <li>Less than 7 days before check-in: non-refundable.</li>
      </ul>
      <h2>Date changes</h2>
      <p>One complimentary date-change is offered if requested at least 14 days before check-in, subject to availability and rate parity.</p>
      <h2>No-shows</h2>
      <p>No-shows are treated as a cancellation less than 7 days prior and are non-refundable.</p>
      <h2>Refund timeline</h2>
      <p>Approved refunds are processed within 7–10 business days to the original mode of payment.</p>
    </LegalShell>
  );
}
