import { notFound } from "next/navigation";
import { getPropertyBySlug, getAllProperties } from "@/lib/properties";
import PropertyGallery from "@/components/PropertyGallery";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllProperties().map((p) => ({ slug: p.slug }));
}

export default function PropertyPage({ params }: Props) {
  const property = getPropertyBySlug(params.slug);
  if (!property) return notFound();

  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-container mx-auto">
        <div className="mb-8">
          <div className="accent-line mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl">
            {property.displayTitle}
          </h1>
          {property.status === "available" && (
            <span className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-cream border border-charcoal/20 text-[10px] tracking-widest uppercase text-charcoal">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Available
            </span>
          )}
        </div>

        <p className="text-charcoal-light leading-relaxed max-w-2xl mb-10">
          {property.summary}
        </p>

        <PropertyGallery images={property.images} alt={property.displayTitle} />

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
