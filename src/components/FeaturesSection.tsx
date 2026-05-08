import Image from 'next/image';
import { ArrowRightIcon } from '@/components/icons';

// Datos de las tarjetas
const cards = [
  {
    title: 'Mortgage Services',
    description: 'Helping you secure your dream home with flexible mortgage options.',
    image: '/images/mortgage-services.jpg',
  },
  {
    title: 'Property Management',
    description: 'Let us handle the details so you can enjoy the rewards.',
    image: '/images/property-management.jpg',
  },
  {
    title: 'Construction and Real Estate Development',
    description:
      'Guiding you through the intricacies of building and developing properties with expert insight and support.',
    image: '/images/service-rent.jpg',
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#151717] text-white px-[75px] py-[100px]">
      {/* Encabezado + descripción + CTA */}
      <div className="mb-16">
        <h2 className="text-[72px] font-bold leading-[1] mb-8">
          Support<br />
          Beyond Buying<br />
          <span className="text-white/25">and Selling</span>
        </h2>
        <p className="text-[16px] leading-[1.6] text-white/70 max-w-[500px] mb-6">
          The real estate market never stands still — and neither do we. Our experts offer continued support beyond the sale, helping you maximize your investment.
        </p>
        <a
          href="/services"
          className="btn-pill btn-pill-outline-white inline-flex items-center gap-2"
        >
          Discover Our Services <ArrowRightIcon />
        </a>
      </div>

      {/* Grilla de 3 tarjetas */}
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-lg"
            style={{ height: '380px' }}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />
            {/* Overlay degradado */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Texto sobre la imagen */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-[18px] font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-[13px] text-white/80 leading-[1.5] mb-4">
                {card.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[13px] text-white bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5"
              >
                Learn More <ArrowRightIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
