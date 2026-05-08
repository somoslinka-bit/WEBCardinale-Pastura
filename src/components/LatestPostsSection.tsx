import Image from 'next/image';
import { ArrowRightIcon } from '@/components/icons';

interface Post {
  date: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const posts: Post[] = [
  {
    date: '2026-04-13',
    title: 'Q1 2026 NYC Market Report',
    description:
      "Q1 2026 saw strong rental demand, active sales, and shifting pricing across NYC. Here's what it means heading into the spring market.",
    image: '/images/blog-nyc-market.png',
    href: '#',
  },
  {
    date: '2026-04-01',
    title: 'Philly Real Estate: A Winter Chill or a Spring Opportunity?',
    description:
      'Record-low listings and steady price growth define a unique February for the Philadelphia Metro.',
    image: '/images/blog-philly.jpg',
    href: '#',
  },
  {
    date: '2026-03-09',
    title: 'What $1M Buys in Different NYC Neighborhoods',
    description:
      "Curious what $1M can still buy in today's NYC market? Explore a snapshot of available listings across Manhattan and discover the surprising range of options at this key price point.",
    image: '/images/blog-nyc-1m.jpg',
    href: '#',
  },
];

export function LatestPostsSection() {
  return (
    <section className="bg-[#F1F1F1] px-[75px] py-[100px]">
      {/* Encabezado */}
      <div className="flex justify-between items-start mb-20">
        <h2 className="text-[80px] font-bold leading-[1]">
          Blog &amp;<br />
          <span className="text-[#b4b4b4]">Resources</span>
        </h2>
        <div className="max-w-[400px]">
          <p className="text-[18px] leading-[1.6] text-[#151717] mb-6">
            See how we&#39;ve helped clients achieve their real estate dreams,
            one successful move at a time.
          </p>
          <a
            href="/blog"
            className="btn-pill btn-pill-dark inline-flex items-center gap-2"
          >
            Visit Our Blog <ArrowRightIcon />
          </a>
        </div>
      </div>

      {/* Lista de posts */}
      <div>
        {posts.map((post, i) => (
          <div
            key={post.title}
            className={`grid grid-cols-[120px_1fr_260px] gap-10 items-center py-12 border-t border-black/10${
              i < posts.length - 1 ? ' border-b border-black/10' : ''
            }`}
          >
            <span className="text-[13px] text-[#888]">{post.date}</span>
            <div>
              <h3 className="text-[26px] font-semibold leading-[1.2] text-[#151717] mb-3">
                {post.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-[#555] mb-5">
                {post.description}
              </p>
              <a
                href={post.href}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#151717]"
              >
                Read More <ArrowRightIcon />
              </a>
            </div>
            <div className="relative h-[160px] rounded-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
