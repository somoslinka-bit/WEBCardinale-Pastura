// Download all images from findrealestate.com
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, '..');
const BASE_URL = 'https://findrealestate.com';

const IMAGES = [
  // Hero section layers
  { src: '/_next/static/media/back.f53e9773.jpg', dest: 'public/images/hero-background.jpg' },
  { src: '/_next/static/media/house.8ed9b3db.png', dest: 'public/images/hero-house.png' },
  { src: '/_next/static/media/cloud.c8800fa9.png', dest: 'public/images/hero-cloud.png' },
  { src: '/_next/static/media/smoke.9f683cb4.png', dest: 'public/images/hero-smoke.png' },
  // Why FIND / section images
  { src: '/_next/static/media/1.e7a1ff18.jpg', dest: 'public/images/why-find-1.jpg' },
  { src: '/_next/static/media/2.58bf2fb8.jpg', dest: 'public/images/why-find-2.jpg' },
  { src: '/_next/static/media/3.483e04ae.jpg', dest: 'public/images/why-find-3.jpg' },
  { src: '/_next/static/media/4.ea5fa732.jpg', dest: 'public/images/why-find-4.jpg' },
  // Steps / agents section
  { src: '/_next/static/media/1.f6e8f2e8.jpg', dest: 'public/images/agent-1.jpg' },
  { src: '/_next/static/media/2.41633fa6.jpg', dest: 'public/images/agent-2.jpg' },
  // Testimonial photo
  { src: '/_next/static/media/1.52131ac7.jpg', dest: 'public/images/testimonial-1.jpg' },
  // Services section images
  { src: '/_next/static/media/buy.fed72bc8.jpg', dest: 'public/images/service-buy.jpg' },
  { src: '/_next/static/media/sell.90b8e66b.jpg', dest: 'public/images/service-sell.jpg' },
  { src: '/_next/static/media/rent.6736c732.jpg', dest: 'public/images/service-rent.jpg' },
  // Features / support section
  { src: '/_next/static/media/mortgage-services.e92904b1.jpg', dest: 'public/images/mortgage-services.jpg' },
  { src: '/_next/static/media/property-management.7a9cbb34.jpg', dest: 'public/images/property-management.jpg' },
  // Blog images from Strapi CDN
  { src: 'https://fresh-boot-3c0a0dc212.media.strapiapp.com/nyc_604e40fa02.png', dest: 'public/images/blog-nyc-market.png' },
  { src: 'https://fresh-boot-3c0a0dc212.media.strapiapp.com/jonathan_gong_tl3jdt_Z_u_YM_unsplash_5f055e7e75.jpg', dest: 'public/images/blog-philly.jpg' },
  { src: 'https://fresh-boot-3c0a0dc212.media.strapiapp.com/gregreese_building_6662138_1920_96e6ea69b1.jpg', dest: 'public/images/blog-nyc-1m.jpg' },
];

async function download(url, destRel) {
  const dest = join(BASE, destRel);
  const dir = dirname(dest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const fullUrl = url.startsWith('http') ? url : BASE_URL + url;
  try {
    const res = await fetch(fullUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(dest, Buffer.from(buf));
    console.log(`✓ ${destRel}`);
  } catch (e) {
    console.error(`✗ ${destRel}: ${e.message}`);
  }
}

// Download 4 at a time
async function downloadAll() {
  const chunks = [];
  for (let i = 0; i < IMAGES.length; i += 4) chunks.push(IMAGES.slice(i, i + 4));
  for (const chunk of chunks) {
    await Promise.all(chunk.map(({ src, dest }) => download(src, dest)));
  }
  console.log('\nDone!');
}

downloadAll();
