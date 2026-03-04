import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 mt-24">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Link href="/" className="font-serif text-lg tracking-wide text-charcoal">
              William George
            </Link>
            <p className="text-sm text-charcoal-light mt-1 max-w-md">
              Modern high-quality homes for professional tenants and families.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-1 text-sm text-charcoal-light">
            <Link href="/#contact" className="hover:text-charcoal transition-colors">
              Contact Us
            </Link>
            <p>William George Management &amp; Investments Ltd</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-charcoal/5 text-xs text-charcoal-light">
          &copy; {new Date().getFullYear()} William George Management &amp; Investments Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
