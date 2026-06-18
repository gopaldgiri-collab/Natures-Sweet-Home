'use client';
import { MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/site-data';

export default function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg hover:shadow-2xl px-5 py-3 flex items-center gap-2 transition-all">
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline font-medium">Book on WhatsApp</span>
    </a>
  );
}
