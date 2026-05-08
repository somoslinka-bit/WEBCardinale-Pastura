'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FindLogo, ChevronDownIcon, MenuIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[58.5px] max-w-[1920px] items-center justify-between px-[75px]">
        {/* Logo */}
        <Link href="/" aria-label="Find Real Estate — inicio">
          <FindLogo className="h-[28px] w-auto text-[#151717]" />
        </Link>

        {/* Nav principal — solo desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/search"
            className="bg-transparent text-[15px] font-medium text-[#151717] hover:opacity-70 transition-opacity"
          >
            Search
          </Link>
          <Link
            href="/agents"
            className="bg-transparent text-[15px] font-medium text-[#151717] hover:opacity-70 transition-opacity"
          >
            Agents
          </Link>
          <Link
            href="/join"
            className="bg-transparent text-[15px] font-medium text-[#151717] hover:opacity-70 transition-opacity"
          >
            Join
          </Link>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 border-none bg-transparent text-[15px] font-medium text-[#151717] hover:opacity-70 transition-opacity"
          >
            Paperwork <ChevronDownIcon />
          </button>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 border-none bg-transparent text-[15px] font-medium text-[#151717] hover:opacity-70 transition-opacity"
          >
            Resources <ChevronDownIcon />
          </button>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 border-none bg-transparent text-[15px] font-medium text-[#151717] hover:opacity-70 transition-opacity"
          >
            About <ChevronDownIcon />
          </button>
        </nav>

        {/* Acciones lado derecho */}
        <div className="flex items-center gap-4">
          {/* Sign In — solo desktop */}
          <Link
            href="/sign-in"
            className="hidden items-center rounded-[100px] bg-[#151717] px-[22.5px] py-[11.55px] text-[15px] font-medium text-white transition-opacity hover:opacity-80 md:inline-flex"
          >
            Sign In
          </Link>

          {/* Hamburguesa — solo mobile */}
          <button
            type="button"
            className="text-[#151717] md:hidden"
            aria-label="Abrir menú de navegación"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
