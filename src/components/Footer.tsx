import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 mt-24">
      <div className="max-w-container mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-base tracking-wide text-charcoal">
            William George
          </Link>
          <span className="text-charcoal-light text-xs hidden md:inline">|</span>
          <p className="text-xs text-charcoal-light hidden md:block">
            Modern high-quality homes for professional tenants and families.
          </p>
        </div>
        <p className="text-xs text-charcoal-light">
          &copy; {new Date().getFullYear()} William George Management &amp; Investments Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
