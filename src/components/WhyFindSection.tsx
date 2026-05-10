'use client';

import { useRef, useEffect } from 'react';
import { ZoomParallax } from '@/components/ui/zoom-parallax';

const NOSOTROS_IMAGES = [
  { src: '/images/prof-1.jpg', alt: 'Cardinale Pastura — equipo' },
  { src: '/images/prof-2.jpg', alt: 'Cardinale Pastura — equipo' },
  { src: '/images/institucional-1.jpg', alt: 'Cardinale Pastura' },
  { src: '/images/sierra-viva-fachada.jpg', alt: 'Sierra Viva — fachada' },
  { src: '/images/institucional-2.jpg', alt: 'Cardinale Pastura' },
  { src: '/images/sierra-viva-render-1.jpg', alt: 'Sierra Viva — render' },
  { src: '/images/sierra-viva-render-2.jpg', alt: 'Sierra Viva — render' },
];

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
    <section id="nosotros" className="bg-white">
      {/* Texto editorial */}
      <div className="px-4 pt-16 pb-0 md:px-[75px] md:pt-[120px]">
        <div className="flex flex-col gap-4 md:grid md:grid-cols-[200px_1fr] md:gap-20">
          <span className="text-[13px] font-medium text-[#7AB0C4] uppercase tracking-widest">Nosotros</span>
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

      {/* Efecto zoom parallax con fotos */}
      <ZoomParallax images={NOSOTROS_IMAGES} />
    </section>
  );
}
