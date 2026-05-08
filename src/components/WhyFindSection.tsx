'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

export function WhyFindSection() {
  const revealRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.color = '#151717';
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-[75px] py-[120px]">
      {/* Texto editorial principal */}
      <div className="grid grid-cols-[200px_1fr] gap-20 mb-20">
        {/* Etiqueta lateral */}
        <span className="text-[13px] font-medium text-[#888] pt-2">Why FIND</span>

        {/* Bloque de texto grande */}
        <div>
          <p className="text-[clamp(32px,4vw,52px)] font-bold leading-[1.15]">
            <span className="text-[#151717]">
              Your life&#39;s changing. Don&#39;t just find a place — find what&#39;s next.
            </span>{' '}
            <span
              ref={revealRef}
              className="transition-colors duration-700"
              style={{ color: '#c0c0c0' }}
            >
              We help you move forward with clarity, confidence, and the right agent by your side.
            </span>
          </p>
        </div>
      </div>

      {/* Imagen a ancho completo */}
      <div className="relative w-full overflow-hidden" style={{ height: '500px' }}>
        <Image
          src="/images/why-find-1.jpg"
          alt="FIND Real Estate"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
