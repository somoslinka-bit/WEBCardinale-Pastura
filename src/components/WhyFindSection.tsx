'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export function NosotrosSection() {
  const revealRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = revealRef.current;
    if (el) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { el.style.color = '#191919'; obs.disconnect(); } },
        { threshold: 0.3 }
      );
      obs.observe(el);
    }

    const section = sectionRef.current;
    if (section) {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
        { threshold: 0.08 }
      );
      obs.observe(section);
      return () => obs.disconnect();
    }
  }, []);

  return (
    <section id="nosotros" className="relative bg-white px-4 py-16 md:px-[75px] md:py-[120px] overflow-hidden">
      <div
        ref={sectionRef}
        className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-16 md:items-center"
      >
        {/* Texto */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <span className="text-[13px] font-medium text-[#7AB0C4] uppercase tracking-widest block mb-8">
            Nosotros
          </span>
          <p className="text-[clamp(26px,3.8vw,50px)] font-bold leading-[1.18]">
            <span className="text-[#191919]">
              Cuando ponés tu apellido, el compromiso es otro.
            </span>{' '}
            <span
              ref={revealRef}
              className="transition-colors duration-700"
              style={{ color: '#B2B2B2' }}
            >
              Porque todo lo que hacemos, habla de nosotros.
            </span>
          </p>
        </div>

        {/* Imagen */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(36px)',
            transition: 'opacity 0.9s ease 0.18s, transform 0.9s ease 0.18s',
          }}
        >
          <Image
            src="/images/institucional-1.jpg"
            alt="Cardinale Pastura — equipo"
            width={2400}
            height={1600}
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
