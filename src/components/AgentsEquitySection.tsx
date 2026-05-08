import Image from 'next/image';
import { ArrowRightIcon } from '@/components/icons';

export function AgentsEquitySection() {
  return (
    <section className="bg-white px-[75px] py-[100px] relative overflow-hidden">
      {/* Etiqueta "For Agents" */}
      <span className="text-[13px] font-medium text-[#888] block mb-20">For Agents</span>

      <div className="relative min-h-[800px]">
        {/* Imagen izquierda: edificio alto de vidrio */}
        <div className="absolute left-0 top-[60px] w-[170px] h-[480px] overflow-hidden rounded">
          <Image
            src="/images/agent-1.jpg"
            alt="Agent"
            fill
            className="object-cover"
          />
        </div>

        {/* Imagen derecha: vista aérea de casas */}
        <div className="absolute right-0 top-0 w-[340px] h-[560px] overflow-hidden rounded">
          <Image
            src="/images/agent-2.jpg"
            alt="Aerial view"
            fill
            className="object-cover"
          />
        </div>

        {/* Texto central */}
        <div className="max-w-[640px] mx-auto text-center pt-[80px]">
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] mb-8 text-[#151717]">
            Don&#39;t Rent Your Career. Own It.
          </h2>

          <p className="text-[18px] leading-[1.7] mb-4">
            <span className="text-[#151717]">
              At FIND, our agents don&#39;t just work for the brand—they own a part of it.
            </span>{' '}
            <span className="text-[#aaa]">
              We give top performers real equity, so they&#39;re invested in more than just your
              transaction—they&#39;re invested in your outcome.
            </span>
          </p>

          <p className="text-[18px] leading-[1.7] text-[#151717] mb-4">
            Agents are certified, supported, and equipped to deliver five-star service—because
            their success is tied to yours.
          </p>

          <p className="text-[18px] leading-[1.7] text-[#aaa] mb-10">
            You&#39;re not just here to close deals — you&#39;re building a career, a life, a
            legacy. We help agents find the company that gives them the support, tools, and
            leadership to thrive.
          </p>

          <a
            href="/join"
            className="btn-pill btn-pill-dark inline-flex items-center gap-2"
          >
            Join The Movement <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
