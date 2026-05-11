'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all duration-300', scrolled || menuOpen ? 'bg-white shadow-sm' : 'bg-transparent')}>
      <div className="mx-auto flex h-[58px] max-w-[1920px] items-center justify-between px-4 md:px-[75px]">
        {/* Logo */}
        <Link href="/" aria-label="Cardinale Pastura — inicio" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo-cp.png"
            alt="Cardinale Pastura"
            width={140}
            height={40}
            className="h-[32px] md:h-[36px] w-auto"
          />
        </Link>

        {/* Nav principal — solo desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-transparent text-[15px] font-medium text-[#191919] hover:opacity-70 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Derecha */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5491130331724"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-[100px] bg-[#1C314D] px-[22.5px] py-[11.55px] text-[15px] font-medium text-white transition-opacity hover:opacity-80 md:inline-flex"
          >
            Escribinos
          </a>

          {/* Hamburguesa — solo mobile */}
          <button
            type="button"
            className="text-[#191919] md:hidden p-[10px] -mr-[10px] cursor-pointer"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-black/5 px-4 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[17px] font-medium text-[#191919] py-3 border-b border-black/5 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5491130331724"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center rounded-[100px] bg-[#1C314D] px-6 py-3 text-[15px] font-medium text-white"
            onClick={() => setMenuOpen(false)}
          >
            Escribinos por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
