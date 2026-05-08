import { ArrowRightIcon, ArrowRightServicesIcon } from '@/components/icons';

// Datos de los servicios
const services = [
  {
    id: 1,
    number: '01',
    description:
      "Buy smarter with expert agents backed by mortgage, legal, and appraisal pros—dialed in to get you the best deal, fast. We've done this over 10,000 times, and we know what wins.",
    word: 'Buy',
  },
  {
    id: 2,
    number: '02',
    description:
      'Sell fast, sell high. Your listing gets pro staging, strategic pricing, constant open houses, and agents who never stop working until the right buyer signs.',
    word: 'Sell',
  },
  {
    id: 3,
    number: '03',
    description:
      'Access hidden rentals before they hit the market through agents who know every landlord in town. With decades of NYC experience, we unlock the best deals you won\'t find online.',
    word: 'Rent',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-[#151717] text-white px-[75px] pt-[100px] pb-[60px]">
      {/* Encabezado */}
      <div className="mb-12">
        <span className="text-[13px] font-medium text-white/50 uppercase tracking-wider block mb-6">
          Services
        </span>
        <h2 className="text-[72px] font-bold leading-[1] text-white">
          How{' '}
          <span className="text-white/30">FIND</span>
          {' '}Can Help You
        </h2>
      </div>

      {/* Filas de servicios */}
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`border-t border-white/20 grid grid-cols-[56px_1fr_1fr_56px] gap-10 items-center py-12${index === services.length - 1 ? ' border-b' : ''}`}
        >
          {/* Círculo con número */}
          <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-[12px] text-white/50">
            {service.number}
          </div>

          {/* Descripción */}
          <p className="text-[15px] leading-[1.6] text-white max-w-[400px]">
            {service.description}
          </p>

          {/* Palabra grande */}
          <div className="text-[clamp(60px,8vw,130px)] font-bold leading-none text-white text-center">
            {service.word}
          </div>

          {/* Flecha */}
          <div className="flex justify-end">
            <ArrowRightServicesIcon className="text-white/40 w-8 h-8" />
          </div>
        </div>
      ))}

      {/* CTA inferior */}
      <div className="border-t border-white/20 pt-16 pb-4">
        <p className="text-[32px] font-semibold leading-[1.3] text-white max-w-[680px] mb-8">
          Our certified agents guide you through every stage of real estate with expert knowledge and reliable support.
        </p>
        <a
          href="/search"
          className="btn-pill btn-pill-outline-white inline-flex items-center gap-2"
        >
          Get Started with FIND <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}
