import { ArrowRightIcon, FindLogo } from '@/components/icons';

const navLinks = ['Search', 'Agents', 'Join', 'About Us', 'Agent Portal'];
const socialLinks = ['Facebook', 'Instagram', 'Youtube', 'Linkedin'];
const legalLinks = [
  'Terms',
  'Privacy policy',
  'Fair Housing Notice',
  'Operating Procedure',
  'Press',
  'Housing Choice Vouchers Welcome',
  'Se Aceptan Vales de Elección de Vivienda',
];

export function OutroSection() {
  return (
    <section className="bg-[#151717] text-white">
      {/* CTA final */}
      <div className="px-[75px] py-[80px] border-b border-white/10">
        <h2 className="text-[56px] font-bold leading-[1.1] mb-8">
          Find You. We&#39;ll Help You Get There.
        </h2>
        <a
          href="/search"
          className="btn-pill btn-pill-outline-white inline-flex items-center gap-2"
        >
          Let&#39;s Get Started <ArrowRightIcon />
        </a>
      </div>

      {/* Newsletter + links grid */}
      <div className="px-[75px] py-[60px] grid grid-cols-[1fr_auto_auto_auto] gap-20 border-b border-white/10">
        {/* Newsletter */}
        <div>
          <h3 className="text-[20px] font-semibold mb-4">
            Subscribe to our Newsletter!
          </h3>
          <div className="flex items-center border-b border-white/40 pb-2 max-w-[400px]">
            <input
              type="email"
              placeholder="Enter address"
              className="bg-transparent border-none outline-none text-white placeholder-white/40 text-[15px] flex-1"
            />
            <button className="text-white ml-2" type="button" aria-label="Suscribirse">
              <ArrowRightIcon />
            </button>
          </div>

          {/* Info de contacto */}
          <div className="mt-10 grid grid-cols-3 gap-8">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                Head Office
              </span>
              <p className="text-[14px] text-white/90 leading-[1.5]">
                5 West 37th Street, 12th Floor,
                <br />
                New York, NY 10018
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                Email Us
              </span>
              <p className="text-[14px] text-white/90">
                hello@findrealestate.com
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2">
                Call Us
              </span>
              <p className="text-[14px] text-white/90">+1 212 994 9965</p>
            </div>
          </div>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[18px] font-medium text-white hover:text-white/70 transition-colors leading-[2]"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Links de redes sociales */}
        <div className="flex flex-col gap-1">
          {socialLinks.map((s) => (
            <a
              key={s}
              href="#"
              className="text-[14px] text-white/70 hover:text-white transition-colors leading-[2.2]"
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Wordmark FIND */}
      <div className="px-[75px] py-[40px] border-b border-white/10">
        <FindLogo className="w-full max-w-[860px] h-auto text-white" />
      </div>

      {/* Barra legal */}
      <div className="px-[75px] py-[16px] flex flex-wrap gap-x-6 gap-y-2 items-center justify-between text-[11px] text-white/50">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          {legalLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white/80 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          <span>FIND Real Estate</span>
          <span>Copyright © 2026</span>
        </div>
      </div>
    </section>
  );
}
