"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-charcoal/5">
      <nav className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide text-charcoal">
          William George
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors">
            About
          </Link>
          <Link href="/portfolio" className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors">
            Portfolio
          </Link>
          <a
            href="mailto:property@wgmi.co.uk"
            className="text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            property@wgmi.co.uk
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal/5 px-6 pb-4 space-y-3">
          <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal-light">Home</Link>
          <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal-light">About</Link>
          <Link href="/portfolio" onClick={() => setMobileOpen(false)} className="block text-sm tracking-wide text-charcoal-light">Portfolio</Link>
          <a href="mailto:property@wgmi.co.uk" className="block text-sm tracking-wide text-charcoal-light">property@wgmi.co.uk</a>
        </div>
      )}
    </header>
  );
}
