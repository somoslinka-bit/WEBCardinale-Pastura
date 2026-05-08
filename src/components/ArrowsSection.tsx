import Image from 'next/image';

const diamondImages = [
  '/images/why-find-1.jpg',
  '/images/why-find-2.jpg',
  '/images/why-find-3.jpg',
  '/images/why-find-4.jpg',
];

export function ArrowsSection() {
  return (
    <section className="bg-white px-[75px] py-[80px]">
      {/* Título editorial grande */}
      <div className="text-center mb-12">
        <h2 className="text-[clamp(36px,5vw,72px)] font-bold leading-[1.05]">
          <span className="text-[#151717]">This isn&#39;t just</span>
          <br />
          <span className="text-[#c0c0c0]">about real estate.</span>
        </h2>
      </div>

      {/* Fila de imágenes en forma de diamante */}
      <div className="flex items-center justify-center gap-3 my-16">
        {diamondImages.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: '160px',
              height: '160px',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          >
            <Image src={src} alt="" fill className="object-cover scale-150" />
          </div>
        ))}
      </div>

      {/* Segundo bloque de texto */}
      <div className="text-center max-w-[700px] mx-auto">
        <p className="text-[clamp(18px,2vw,24px)] leading-[1.6]">
          <strong className="text-[#151717]">
            It&#39;s about identity. Progress. Getting unstuck.
          </strong>{' '}
          <span className="text-[#aaa]">
            You&#39;re not just looking for a place. You&#39;re looking for alignment. That&#39;s
            what we help you find.
          </span>
        </p>
      </div>
    </section>
  );
}
