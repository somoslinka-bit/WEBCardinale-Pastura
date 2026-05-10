'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Un frame después del mount para que las transiciones CSS puedan dispararse
    const raf = requestAnimationFrame(() => setMounted(true));
    const t1 = setTimeout(() => setHiding(true), 2600);
    const t2 = setTimeout(() => setHidden(true), 3300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#1C314D]"
      style={{
        opacity: hiding ? 0 : 1,
        transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: hiding ? 'none' : 'all',
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0px)' : 'translateY(12px)',
          transition: 'opacity 1.1s ease 0.1s, transform 1.1s ease 0.1s',
        }}
      >
        <Image
          src="/images/logo-cp-blanco.png"
          alt="Cardinale Pastura"
          width={220}
          height={66}
          className="h-[152px] w-auto"
          priority
        />
      </div>

      {/* Línea de carga */}
      <div
        className="mt-10 overflow-hidden"
        style={{
          width: '80px',
          height: '1px',
          backgroundColor: 'rgba(255,255,255,0.12)',
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.6s ease 0.4s',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#7AB0C4',
            transform: mounted ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
          }}
        />
      </div>

      {/* Tagline */}
      <p
        className="mt-6 text-[11px] uppercase tracking-[0.3em] text-white/30"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 1s ease 0.8s',
        }}
      >
        Desarrollos Inmobiliarios
      </p>
    </div>
  );
}
