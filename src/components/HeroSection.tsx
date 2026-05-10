import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay degradado: oscuro abajo, leve arriba */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(28,49,77,0.45) 0%, rgba(28,49,77,0.65) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Contenido centrado */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-5 text-center px-4 md:px-8">
        <Image
          src="/images/logo-cp-blanco.png"
          alt="Cardinale Pastura"
          width={200}
          height={60}
          className="h-[44px] md:h-[56px] w-auto mb-2"
          priority
        />

        <h1
          className="font-bold leading-[1.05] tracking-tight text-white"
          style={{
            fontSize: 'clamp(36px, 6vw, 88px)',
            textShadow: '0 2px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.3)',
          }}
        >
          Dos apellidos,
          <br />
          <span className="text-[#7AB0C4]">una visión.</span>
        </h1>

        <p
          className="text-[16px] md:text-[18px] font-light text-white/75 max-w-[480px]"
          style={{ textShadow: '0 1px 12px rgba(0,0,0,0.4)' }}
        >
          Diseño, naturaleza y compromiso.
        </p>

        <a
          href="#proyectos"
          className="mt-3 inline-flex items-center rounded-[100px] bg-white px-7 py-3 text-[14px] md:text-[15px] font-semibold text-[#1C314D] transition-opacity hover:opacity-85"
        >
          Conocé nuestros Proyectos
        </a>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-white/50 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-white"
            style={{
              height: '40%',
              animation: 'scrollIndicator 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
