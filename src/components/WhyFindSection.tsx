'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

export function NosotrosSection() {
  const revealRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.color = '#191919';
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="bg-white px-4 py-16 md:px-[75px] md:py-[120px]">
      {/* Texto editorial principal */}
      <div className="flex flex-col gap-4 mb-12 md:grid md:grid-cols-[200px_1fr] md:gap-20 md:mb-20">
        {/* Etiqueta lateral */}
        <span className="text-[13px] font-medium text-[#7AB0C4] uppercase tracking-widest">Nosotros</span>

        {/* Bloque de texto grande */}
        <div>
          <p className="text-[clamp(28px,4vw,52px)] font-bold leading-[1.15]">
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
      </div>

      {/* Imagen a ancho completo — sin recorte, proporción natural */}
      <Image
        src="/images/institucional-1.jpg"
        alt="Cardinale Pastura — equipo"
        width={2400}
        height={1600}
        className="w-full h-auto"
      />
    </section>
  );
}
