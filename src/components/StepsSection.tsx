import { ArrowRightIcon } from '@/components/icons';

interface Step {
  n: string;
  bold: string;
  rest: string;
}

const steps: Step[] = [
  {
    n: '01',
    bold: 'Talk to a Real Human.',
    rest: ' We match you with an expert who actually listens.',
  },
  {
    n: '02',
    bold: 'Get Clarity.',
    rest: " We define what you really need, not just what's available.",
  },
  {
    n: '03',
    bold: 'Move Forward.',
    rest: ' We find what fits — and make it happen.',
  },
];

export function StepsSection() {
  return (
    <section className="bg-white px-[75px] py-[100px]">
      <div className="grid grid-cols-2 gap-[80px] items-start">
        {/* Columna izquierda: título + CTA */}
        <div>
          <h2 className="text-[clamp(48px,5.5vw,80px)] font-bold leading-[1]">
            Real Estate,
            <br />
            <span className="text-[#c0c0c0]">Rewired.</span>
          </h2>
          <a
            href="/search"
            className="btn-pill btn-pill-dark inline-flex items-center gap-2 mt-10"
          >
            Start Your Search <ArrowRightIcon />
          </a>
        </div>

        {/* Columna derecha: lista de pasos */}
        <div>
          <span className="text-[13px] text-[#888] block mb-6">Steps:</span>
          <div className="flex flex-col divide-y divide-black/10">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-5 items-start py-8 first:pt-0">
                <span className="text-[12px] text-[#bbb] mt-1 min-w-[24px]">{step.n}</span>
                <p className="text-[16px] leading-[1.6]">
                  <strong className="font-bold text-[#151717]">{step.bold}</strong>
                  <span className="text-[#555]">{step.rest}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
