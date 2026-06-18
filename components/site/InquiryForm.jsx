'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { MessageCircle, Send } from 'lucide-react';
import { waLink } from '@/lib/site-data';

export default function InquiryForm({ villaName }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', checkIn: '', checkOut: '', guests: '', villa: villaName || '', message: '',
  });
  const upd = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please enter your name and phone number'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/inquiries', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
      const d = await res.json();
      if (d.success) {
        toast.success('Inquiry received — we will WhatsApp you shortly.');
        const msg = `Hi Natures Sweet Homes,\nI'd like to enquire about ${form.villa || 'a villa booking'}.\nName: ${form.name}\nGuests: ${form.guests}\nCheck-in: ${form.checkIn}\nCheck-out: ${form.checkOut}\nMessage: ${form.message}`;
        window.open(waLink(msg), '_blank');
        setForm({ name:'', phone:'', email:'', checkIn:'', checkOut:'', guests:'', villa: villaName || '', message:'' });
      } else { toast.error('Could not submit. Please try WhatsApp.'); }
    } catch { toast.error('Network error. Please try WhatsApp.'); }
    finally { setSubmitting(false); }
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name *</Label><Input value={form.name} onChange={(e)=>upd('name', e.target.value)} className="mt-1" /></div>
        <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Phone *</Label><Input value={form.phone} onChange={(e)=>upd('phone', e.target.value)} className="mt-1" /></div>
        <div className="md:col-span-2"><Label className="text-xs uppercase tracking-widest text-muted-foreground">Email</Label><Input type="email" value={form.email} onChange={(e)=>upd('email', e.target.value)} className="mt-1" /></div>
        <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Check-in</Label><Input type="date" value={form.checkIn} onChange={(e)=>upd('checkIn', e.target.value)} className="mt-1" /></div>
        <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Check-out</Label><Input type="date" value={form.checkOut} onChange={(e)=>upd('checkOut', e.target.value)} className="mt-1" /></div>
        <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Guests</Label><Input type="number" min="1" value={form.guests} onChange={(e)=>upd('guests', e.target.value)} className="mt-1" /></div>
        <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Villa</Label><Input value={form.villa} onChange={(e)=>upd('villa', e.target.value)} className="mt-1" placeholder="Any villa" /></div>
      </div>
      <div><Label className="text-xs uppercase tracking-widest text-muted-foreground">Message</Label><Textarea rows={4} value={form.message} onChange={(e)=>upd('message', e.target.value)} className="mt-1" placeholder="Tell us about your trip…" /></div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" disabled={submitting} className="bg-forest hover:bg-forest/90 text-white rounded-full px-6 flex-1"><Send className="w-4 h-4 mr-2" />{submitting ? 'Sending…' : 'Send Inquiry'}</Button>
        <a href={waLink(`Hi Natures Sweet Homes, I'd like to book ${form.villa || 'a villa'}.`)} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button type="button" className="w-full bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full px-6"><MessageCircle className="w-4 h-4 mr-2" />Book on WhatsApp</Button>
        </a>
      </div>
    </form>
  );
}
