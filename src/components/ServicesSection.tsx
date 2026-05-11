'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(32px)',
  transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
});

interface VideoCardProps {
  src: string;
  label: string;
  delay: number;
}

function VideoCard({ src, label, delay }: VideoCardProps) {
  const { ref, visible } = useReveal(0.1);

  return (
    <div ref={ref} className="flex flex-col gap-3" style={revealStyle(visible, delay)}>
      <div className="relative overflow-hidden rounded-sm group" style={{ aspectRatio: '16/9' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src={src} type="video/mp4" />
        </video>
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-[#1C314D]/0 group-hover:bg-[#1C314D]/20 transition-colors duration-500" />
      </div>
      <span className="text-[12px] uppercase tracking-[0.18em] text-white/40">{label}</span>
    </div>
  );
}

export function ProyectosSection() {
  const header = useReveal();
  const info = useReveal();

  return (
    <section id="proyectos" className="relative bg-[#1C314D] text-white px-4 pt-16 pb-12 md:px-[75px] md:pt-[100px] md:pb-[80px] overflow-hidden">
      {/* Encabezado */}
      <div ref={header.ref} className="mb-12 md:mb-16" style={revealStyle(header.visible)}>
        <span className="text-[13px] font-medium text-white/40 uppercase tracking-wider block">
          Nuestros desarrollos
        </span>
      </div>

      {/* Proyecto Sierra Viva */}
      <div className="border-t border-white/15 pt-10 md:pt-16">

        {/* Info del proyecto */}
        <div ref={info.ref} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10 md:mb-14" style={revealStyle(info.visible, 80)}>
          <div>
            <Image
              src="/images/sierra-viva-logo-blanco.png"
              alt="Sierra Viva"
              width={400}
              height={120}
              className="h-[60px] md:h-[80px] w-auto mb-6"
            />
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-white/70 max-w-[520px]">
              Un desarrollo pensado desde la naturaleza. Sierra Viva combina arquitectura contemporánea con el entorno serrano de Tandil, creando espacios que invitan a vivir de otra manera.
            </p>
          </div>
          <a
            href="https://wa.me/5491130331724?text=Hola%2C%20quiero%20información%20sobre%20Sierra%20Viva"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center rounded-[100px] border border-white/40 px-7 py-3 text-[14px] font-medium text-white transition-all hover:bg-white/10"
          >
            Consultar disponibilidad
          </a>
        </div>

        {/* Videos lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <VideoCard
            src="/videos/sierra-viva-promo.mp4"
            label="Sierra Viva — Vista general"
            delay={200}
          />
          <VideoCard
            src="/videos/sierra-viva-terraza.mp4"
            label="Sierra Viva — Terraza fogonero"
            delay={380}
          />
        </div>
      </div>

      {/* Transición suave hacia Contacto (#191919) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #191919)' }}
      />
    </section>
  );
}
