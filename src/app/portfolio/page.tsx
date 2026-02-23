import Link from "next/link";
import { getAllProperties } from "@/lib/properties";
import PropertyImage from "@/components/PropertyImage";

export default function PortfolioPage() {
  const properties = getAllProperties();

  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-container mx-auto">
        <div className="mb-12">
          <div className="accent-line mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Portfolio</h1>
          <p className="text-charcoal-light max-w-lg">
            Our growing collection of family homes across West Yorkshire and
            South Leicestershire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link
              key={property.slug}
              href={`/p/${property.slug}`}
              className="group block"
            >
              <div className="aspect-[4/3] bg-charcoal/5 overflow-hidden mb-4">
                <PropertyImage
                  src={property.images[0]}
                  alt={`${property.area} – ${property.postcode}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-serif text-lg">
                    {property.area}{" "}
                    <span className="text-charcoal-light font-sans text-sm">
                      – {property.postcode}
                    </span>
                  </h2>
                  <p className="text-charcoal-light text-sm mt-1 line-clamp-2">
                    {property.summary}
                  </p>
                </div>
                {property.status === "available" && (
                  <span className="text-xs tracking-wide uppercase text-accent mt-1 shrink-0 ml-3">
                    Available
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Add more properties by editing /data/properties.json */}
      </div>
    </div>
  );
}
