import { verifyShareToken } from "@/lib/auth";
import { getPropertyBySlug } from "@/lib/properties";
import { notFound } from "next/navigation";
import PropertyGallery from "@/components/PropertyGallery";
import Link from "next/link";

interface Props {
  params: { token: string };
}

export default function SharePage({ params }: Props) {
  const decoded = verifyShareToken(params.token);

  if (!decoded) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="accent-line mx-auto mb-6" />
          <h1 className="font-serif text-3xl mb-4">Link Expired</h1>
          <p className="text-charcoal-light mb-8">
            This property link has expired or is no longer valid. Please contact
            us to request a new link.
          </p>
          <a
            href="mailto:property@wgmi.co.uk"
            className="inline-block px-8 py-3 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    );
  }

  const property = getPropertyBySlug(decoded.slug);
  if (!property) return notFound();

  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-container mx-auto">
        <div className="mb-4 text-sm text-charcoal-light">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-charcoal/5 rounded-sm">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.06a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364l1.757 1.757" />
            </svg>
            Shared property link
          </span>
        </div>

        <div className="mb-8">
          <div className="accent-line mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl">
            {property.area}{" "}
            <span className="text-charcoal-light font-sans text-xl md:text-2xl">
              – {property.postcode}
            </span>
          </h1>
          {property.status === "available" && (
            <span className="inline-block mt-3 text-xs tracking-widest uppercase text-accent border border-accent/30 px-3 py-1">
              Available
            </span>
          )}
        </div>

        <p className="text-charcoal-light leading-relaxed max-w-2xl mb-10">
          {property.summary}
        </p>

        <PropertyGallery images={property.images} alt={`${property.area} – ${property.postcode}`} />

        <div className="mt-12 max-w-2xl">
          <h2 className="font-serif text-xl mb-4">Property Highlights</h2>
          <ul className="space-y-2">
            {property.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-charcoal-light text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 p-6 bg-white border border-charcoal/10 max-w-md">
          <p className="text-sm text-charcoal-light italic">
            Full address provided during the viewing process. Contact us to
            arrange a viewing.
          </p>
          <a
            href="mailto:property@wgmi.co.uk"
            className="inline-block mt-4 text-sm tracking-widest uppercase text-charcoal hover:text-accent transition-colors"
          >
            Enquire about this property &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
