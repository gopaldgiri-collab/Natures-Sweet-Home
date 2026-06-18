"use client";

import AOSProvider from "@/components/providers/AOSProvider";

export default function Providers({ children }) {
  return (
    <AOSProvider>
      {children}
    </AOSProvider>
  );
}
