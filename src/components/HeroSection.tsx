import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';

export function HeroSection() {
  return (
    <section className="relative" style={{ height: '500vh' }}>
      {/* Panel 1: Hero principal con capas de imágenes */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Capa 0: Fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Capa 1: Nube */}
        <div
          className="absolute bottom-[10%] left-1/2 z-[5] w-full -translate-x-1/2 opacity-80"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-cloud.png"
            alt=""
            width={1920}
            height={600}
            className="w-full object-contain"
          />
        </div>

        {/* Capa 2: Humo */}
        <div
          className="absolute bottom-0 left-1/2 z-[6] w-full -translate-x-1/2 opacity-60"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-smoke.png"
            alt=""
            width={1920}
            height={600}
            className="w-full object-contain"
          />
        </div>

        {/* Capa 3: Casa */}
        <div
          className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-house.png"
            alt=""
            width={1400}
            height={900}
            className="max-h-[85vh] w-auto object-contain"
            priority
          />
        </div>

        {/* Capa 4: Texto superpuesto */}
        <div className="absolute left-0 right-0 top-[80px] z-20 flex flex-col items-center gap-4 text-center">
          <h1
            className="font-bold leading-none tracking-[-2.1px] text-[#151717]"
            style={{ fontSize: 'clamp(48px, 7vw, 105px)' }}
          >
            Find What Moves You
          </h1>
          <p className="text-[17px] font-normal">
            <strong className="font-semibold text-[#151717]">
              Expert agents. Real guidance.
            </strong>
            <span className="text-gray-400"> A clear path to find what&apos;s next.</span>
          </p>
          <Link
            href="/search"
            className="mt-4 inline-flex items-center gap-2 rounded-[100px] bg-[#151717] px-[22.5px] py-[11.55px] text-[15px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Find Properties <ArrowRightIcon />
          </Link>
        </div>
      </div>

      {/* Panel 2: FIND Real Estate — texto con imagen como clip */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center bg-white">
        <div
          style={{
            backgroundImage: 'url(/images/hero-house.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 0.9,
            userSelect: 'none',
          }}
          aria-label="FIND Real Estate"
        >
          <div style={{ fontSize: 'clamp(80px, 28vw, 420px)' }}>FIND</div>
          <div style={{ fontSize: 'clamp(40px, 14vw, 210px)', lineHeight: 1 }}>
            Real Estate
          </div>
        </div>
      </div>
    </section>
  );
}
