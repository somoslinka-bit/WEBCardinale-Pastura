'use client';

import { useRef, useEffect, useState } from 'react';

interface Pilar {
  n: string;
  bold: string;
  rest: string;
}

const pilares: Pilar[] = [
  {
    n: '01',
    bold: 'Diseño.',
    rest: ' Cada proyecto nace de una búsqueda estética genuina. Pensamos cada detalle para que el espacio hable por sí solo.',
  },
  {
    n: '02',
    bold: 'Naturaleza.',
    rest: ' Desarrollamos en entornos donde el paisaje es parte del proyecto. El verde no es decoración: es estructura.',
  },
  {
    n: '03',
    bold: 'Compromiso.',
    rest: ' Ponemos el apellido en cada obra. Eso nos obliga a hacer las cosas bien, siempre.',
  },
];

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const fadeUp = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(28px)',
  transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
});

export function FilosofiaSection() {
  const header = useReveal();
  const pillars = useReveal();

  return (
    <section id="filosofia" className="relative bg-white px-4 py-16 md:px-[75px] md:py-[100px] overflow-hidden">

      {/* Título centrado */}
      <div ref={header.ref} className="flex flex-col items-center text-center mb-16 md:mb-20">
        <h2
          className="text-[clamp(40px,5.5vw,80px)] font-bold leading-[1]"
          style={fadeUp(header.visible)}
        >
          Nuestra
          <br />
          <span className="text-[#B2B2B2]">Filosofía.</span>
        </h2>
        <a
          href="https://wa.me/5491130331724"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill inline-flex items-center gap-2 mt-10 text-white"
          style={{
            ...fadeUp(header.visible, 120),
            backgroundColor: '#1C314D',
            borderRadius: '100px',
            padding: '11.55px 22.5px',
            fontSize: '13.5px',
            fontWeight: 500,
          }}
        >
          Hablemos
        </a>
      </div>

      {/* Pilares */}
      <div ref={pillars.ref} className="max-w-[720px] mx-auto">
        <span
          className="text-[13px] text-[#7AB0C4] uppercase tracking-widest block mb-6 text-center"
          style={fadeUp(pillars.visible, 80)}
        >
          Pilares:
        </span>
        <div className="flex flex-col divide-y divide-black/10">
          {pilares.map((pilar, i) => (
            <div
              key={pilar.n}
              className="flex gap-5 items-start py-6 md:py-8 first:pt-0"
              style={fadeUp(pillars.visible, 160 + i * 120)}
            >
              <span className="text-[12px] text-[#B2B2B2] mt-1 min-w-[24px]">{pilar.n}</span>
              <p className="text-[15px] md:text-[16px] leading-[1.6]">
                <strong className="font-bold text-[#191919]">{pilar.bold}</strong>
                <span className="text-[#555]">{pilar.rest}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Transición suave hacia Proyectos (navy) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #1C314D)' }}
      />
    </section>
  );
}
