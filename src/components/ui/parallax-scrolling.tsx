'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export function ParallaxHero() {
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

          <div data-parallax-layers className="parallax-layers">

            {/* Capa 1 — Fondo: video hero como imagen estática */}
            <div
              data-parallax-layer="1"
              className="parallax-layer-bg"
              style={{ backgroundImage: 'url(/images/sierra-viva-fachada.jpg)' }}
            />

            {/* Capa 2 — Overlay azul marino */}
            <div
              data-parallax-layer="2"
              className="parallax-layer-overlay"
            />

            {/* Capa 3 — Logo + tagline + CTA */}
            <div data-parallax-layer="3" className="parallax-layer-title">
              <Image
                src="/images/logo-cp-blanco.png"
                alt="Cardinale Pastura"
                width={220}
                height={66}
                className="parallax-logo"
                priority
              />
              <h1 className="parallax-title">
                Dos apellidos,<br />
                <span className="parallax-title-accent">una visión.</span>
              </h1>
              <p className="parallax-subtitle">
                Diseño, naturaleza y compromiso.
              </p>
              <a href="#nosotros" className="parallax-cta">
                Conocé Sierra Viva
              </a>
            </div>

            {/* Capa 4 — Primer plano sutil */}
            <div
              data-parallax-layer="4"
              className="parallax-layer-front"
              style={{ backgroundImage: 'url(/images/sierra-viva-fachada.jpg)' }}
            />
          </div>

          {/* Indicador de scroll */}
          <div className="parallax-scroll-indicator">
            <span>Scroll</span>
            <div className="parallax-scroll-line">
              <div className="parallax-scroll-dot" />
            </div>
          </div>

          {/* Fade inferior hacia blanco */}
          <div className="parallax-fade" />
        </div>
      </section>
    </div>
  );
}
