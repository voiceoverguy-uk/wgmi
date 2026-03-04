import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/images/hero-drone.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 to-charcoal/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            A Private Portfolio of High-Quality Homes
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed">
            A growing collection of thoughtfully maintained family houses across
            West Yorkshire and South Leicestershire — designed for long-term
            living.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-white text-charcoal text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              View Portfolio
            </Link>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/40 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Enquire
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl">Our Approach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Invest Where We Know",
                text: "We focus on areas we understand deeply — West Yorkshire and South Leicestershire. Local knowledge means better homes and better decisions.",
              },
              {
                title: "Finish to a Consistent Standard",
                text: "Every property is finished to the same high standard: neutral décor, quality fixtures, and attention to the details that make a house feel like home.",
              },
              {
                title: "Maintain Responsibly",
                text: "We respond quickly and fix things properly. Our tenants know they can rely on us to keep their home in excellent condition.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <h3 className="font-serif text-xl mb-4">{pillar.title}</h3>
                <p className="text-charcoal-light leading-relaxed text-sm">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 px-6 border-y border-charcoal/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="accent-line mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl italic leading-relaxed">
            &ldquo;We look after our homes properly — so our tenants can enjoy
            them properly.&rdquo;
          </blockquote>
          <p className="mt-8 text-charcoal-light leading-relaxed max-w-xl mx-auto">
            Neutral décor, clean finishes, and a responsive maintenance service.
            We encourage our tenants to make it a home — pictures on the walls,
            a garden they enjoy. We&apos;re in it for the long term, and we want
            you to be too.
          </p>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              The Portfolio
            </h2>
            <p className="text-charcoal-light max-w-lg mx-auto">
              A curated collection of family homes, maintained to a consistent
              standard and designed for comfortable, long-term living.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-charcoal/5 flex items-center justify-center text-charcoal-light text-sm"
              >
                Property image {i}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 border border-charcoal/20 text-sm tracking-widest uppercase text-charcoal hover:border-charcoal/40 transition-colors"
            >
              Request a Property Link
            </Link>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto text-center">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Our Areas</h2>
          <p className="text-charcoal-light max-w-lg mx-auto mb-10">
            We invest in areas we know well — communities we understand, streets
            we can walk, and markets we trust.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="p-8 border border-charcoal/10">
              <h3 className="font-serif text-xl mb-2">West Yorkshire</h3>
              <p className="text-charcoal-light text-sm">
                Wakefield, Ossett, Flanshaw, Lupset.
              </p>
            </div>
            <div className="p-8 border border-charcoal/10">
              <h3 className="font-serif text-xl mb-2">South Leicestershire</h3>
              <p className="text-charcoal-light text-sm">
                Littlethorpe, Cosby and Narborough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-container mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl mb-4">
                Get in Touch
              </h2>
              <p className="text-charcoal-light">
                Whether you&apos;re looking for a property or have a general
                enquiry, we&apos;d love to hear from you.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
