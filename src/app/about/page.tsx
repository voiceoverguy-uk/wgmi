export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="accent-line mb-6" />
        <h1 className="font-serif text-4xl md:text-5xl mb-8">About Us</h1>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <p className="text-lg">
            William George Management &amp; Investments is a private property
            company focused on acquiring, refurbishing, and managing
            high-quality family homes across West Yorkshire and South
            Leicestershire.
          </p>

          <div className="border-l-2 border-accent pl-6">
            <p className="font-serif text-xl text-charcoal italic">
              We believe that a well-maintained home is the foundation of a
              happy tenancy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">
                Long-Term Investment
              </h2>
              <p className="text-sm">
                We buy and hold. Every property in our portfolio is a long-term
                investment, which means we care about its condition today, next
                year, and in ten years&apos; time. We don&apos;t cut corners.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">
                Tenant-First
              </h2>
              <p className="text-sm">
                Our tenants are our partners in looking after these homes. We
                encourage long tenancies, respond quickly to maintenance, and
                treat every house as if we lived there ourselves.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">
                Consistent Standard
              </h2>
              <p className="text-sm">
                Whether it&apos;s a terrace in Wakefield or a semi in Narborough,
                every WGMI property is finished to the same standard: neutral
                décor, modern kitchens, quality fixtures, and clean, well-kept
                gardens.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl text-charcoal mb-3">
                Areas We Know Well
              </h2>
              <p className="text-sm">
                We invest where we have local knowledge. We know the streets,
                the schools, the communities. That local insight helps us choose
                the right properties and manage them well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
