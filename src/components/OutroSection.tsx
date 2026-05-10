import Image from 'next/image';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export function ContactoSection() {
  return (
    <section id="contacto" className="bg-[#191919] text-white">
      {/* CTA final */}
      <div className="px-4 py-12 md:px-[75px] md:py-[80px] border-b border-white/10">
        <h2 className="text-[clamp(30px,5vw,56px)] font-bold leading-[1.1] mb-8 max-w-[640px]">
          ¿Querés saber más sobre nuestros proyectos?
        </h2>
        <a
          href="https://wa.me/5491130331724?text=Hola%2C%20quiero%20más%20información%20sobre%20Cardinale%20Pastura"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill btn-pill-outline-white inline-flex items-center gap-2"
        >
          Escribinos por WhatsApp
        </a>
      </div>

      {/* Grid de info + links */}
      <div className="px-4 py-10 md:px-[75px] md:py-[60px] flex flex-col gap-10 md:grid md:grid-cols-[1fr_auto_auto] md:gap-20 border-b border-white/10">
        {/* Info de contacto */}
        <div>
          <Image
            src="/images/logo-cp-blanco.png"
            alt="Cardinale Pastura"
            width={160}
            height={48}
            className="h-[36px] md:h-[40px] w-auto mb-8"
          />
          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-[480px]">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                WhatsApp
              </span>
              <a
                href="https://wa.me/5491130331724"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/90 hover:text-white transition-colors"
              >
                +54 9 11 3033-1724
              </a>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                Instagram
              </span>
              <a
                href="https://instagram.com/cardinalepastura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/90 hover:text-white transition-colors"
              >
                @cardinalepastura
              </a>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                Ciudad
              </span>
              <p className="text-[14px] text-white/90">Tandil, Buenos Aires</p>
            </div>
          </div>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-row flex-wrap gap-x-6 gap-y-2 md:flex-col md:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] md:text-[18px] font-medium text-white hover:text-white/70 transition-colors md:leading-[2]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Redes */}
        <div className="flex flex-row gap-6 md:flex-col md:gap-1">
          <a
            href="https://instagram.com/cardinalepastura"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-white/70 hover:text-white transition-colors md:leading-[2.2]"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5491130331724"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-white/70 hover:text-white transition-colors md:leading-[2.2]"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Barra legal */}
      <div className="px-4 py-4 md:px-[75px] md:py-[16px] flex flex-col gap-1 md:flex-row md:items-center md:justify-between text-[11px] text-white/50">
        <span>Cardinale Pastura — Desarrollos Inmobiliarios</span>
        <span>© 2026 — Tandil, Argentina</span>
      </div>
    </section>
  );
}
