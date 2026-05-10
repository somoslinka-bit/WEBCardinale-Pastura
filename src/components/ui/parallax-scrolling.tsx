'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0,
        },
      });

      const layers = [
        { layer: '1', yPercent: 65 },
        { layer: '2', yPercent: 45 },
        { layer: '3', yPercent: 28 },
        { layer: '4', yPercent: 8 },
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          { yPercent: layerObj.yPercent, ease: 'none' },
          idx === 0 ? undefined : '<'
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={parallaxRef} className="parallax-root">
      <section className="parallax-header">
        <div className="parallax-visuals">
          {/* Línea negra superior */}
          <div className="parallax-overflow" />

          <div data-parallax-layers className="parallax-layers">

            {/* Capa 1 — Fondo: render fachada */}
            <div
              data-parallax-layer="1"
              className="parallax-layer-bg"
              style={{ backgroundImage: 'url(/images/sierra-viva-fachada.jpg)' }}
            />

            {/* Capa 2 — Overlay con gradiente */}
            <div
              data-parallax-layer="2"
              className="parallax-layer-overlay"
            />

            {/* Capa 3 — Título */}
            <div data-parallax-layer="3" className="parallax-layer-title">
              <p className="parallax-label">Cardinale Pastura</p>
              <h2 className="parallax-title">
                SIERRA<br />VIVA
              </h2>
            </div>

            {/* Capa 4 — Primer plano: render del proyecto */}
            <div
              data-parallax-layer="4"
              className="parallax-layer-front"
              style={{ backgroundImage: 'url(/images/sierra-viva-render-1.jpg)' }}
            />
          </div>

          {/* Fade inferior */}
          <div className="parallax-fade" />
        </div>
      </section>
    </div>
  );
}
