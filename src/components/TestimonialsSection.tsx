'use client';

import { useState } from 'react';
import Image from 'next/image';
import { QuoteIcon } from '@/components/icons';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: '"Michael was a great realtor. Such a hard worker, dedicated to helping us find the perfect neighborhood, price point and home. He\'s a workaholic so he was available morning, noon and night. Tireless and dedicated. Would recommend him 100%!"',
    name: 'BERNADETTE HOGAN',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    quote: '"Shirin was truly a blessing to work with. She helped us find our perfect condo in a great area. She was patient and very understanding. I would recommend working with her if you are in need of someone who will go out of their way to make sure you find the home of your dreams. She is honest and has a pure heart."',
    name: 'TYLEEN',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 3,
    quote: '"Working with Mathew was an absolute pleasure, and I highly recommend him to any serious homebuyer—especially first-time buyers like myself who may feel overwhelmed by the process. From the start, Mathew\'s problem-solving skills stood out. Thank you, Mathew, for making this happen—we are truly happy in our new home!"',
    name: 'JOHANNA NIETO',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 4,
    quote: '"Shirin was an invaluable resource, consultant, and general guide through the home-buying process from the initial search to closing. She immediately understood what we were looking for in a home and helped tailor our search in the right direction. Shirin was quickly responsive and proactive in pushing the agenda forward through all stages with a steady, reassuring hand."',
    name: 'MATTMPOWERS',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 5,
    quote: '"After 12 years in NYC, I have had my best broker experience by far with Fay Blau. Fay helped me find a beautiful apartment on the Upper West Side that fit my needs like a glove. As an Upper West Side local, she knows the neighborhood like the back of her hand. She was an excellent communicator throughout the entire process."',
    name: 'GIAVRIDIS THEODORE',
    image: '/images/testimonial-1.jpg',
  },
];

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState<number>(1);

  const active = testimonials.find((t) => t.id === activeId)!;

  return (
    <section className="bg-[#F1F1F1] px-[75px] py-[100px]">
      <h2 className="text-[56px] font-bold leading-[1.05] mb-12">
        <span>Don&#39;t Take</span>{' '}
        <span className="text-[#b4b4b4]">Our Word for It.</span>
      </h2>

      <div className="grid grid-cols-[380px_1fr] gap-16 items-start">
        {/* Foto izquierda */}
        <div className="relative aspect-[4/5] w-[320px]">
          <Image
            src={active.image}
            alt={active.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido derecha */}
        <div>
          <div className="border-t border-black/15 mb-6" />

          {/* Paginación + ícono de cita */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={`w-9 h-9 rounded-full border text-[13px] font-medium transition-colors
                    ${
                      activeId === t.id
                        ? 'bg-[#151717] text-white border-[#151717]'
                        : 'bg-transparent text-[#999] border-[#ccc] hover:border-[#151717]'
                    }`}
                >
                  {t.id}
                </button>
              ))}
            </div>
            <QuoteIcon className="text-[#151717] w-8 h-8" />
          </div>

          {/* Cita */}
          <blockquote className="text-[18px] leading-[1.7] text-[#151717] mb-8 max-w-[620px]">
            {active.quote}
          </blockquote>

          {/* Atribución */}
          <div className="flex items-center gap-3 text-[12px] font-semibold tracking-widest">
            <span>{active.name}</span>
            <span className="text-[#aaa]">/</span>
            <span>★★★★★</span>
          </div>
        </div>
      </div>
    </section>
  );
}
