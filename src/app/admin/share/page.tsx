"use client";

import { useState, useEffect } from "react";

interface PropertyOption {
  slug: string;
  area: string;
  postcode: string;
}

export default function AdminSharePage() {
  const [properties, setProperties] = useState<PropertyOption[]>([]);
  const [slug, setSlug] = useState("");
  const [expiryDays, setExpiryDays] = useState(7);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/properties")
      .then((r) => r.json())
      .then((data) => {
        setProperties(data);
        if (data.length > 0) setSlug(data[0].slug);
      })
      .catch(() => {});
  }, []);

  async function handleGenerate() {
    setLoading(true);
    setGeneratedUrl("");
    setCopied(false);
    try {
      const res = await fetch("/api/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, expiryDays }),
      });
      const data = await res.json();
      if (data.url) {
        const fullUrl = `${window.location.origin}${data.url}`;
        setGeneratedUrl(fullUrl);
      }
    } catch {
      console.error("Failed to generate link");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="pt-28 pb-16 px-6">
      <div className="max-w-lg mx-auto">
        <div className="accent-line mb-6" />
        <h1 className="font-serif text-3xl mb-3">Generate Share Link</h1>
        <p className="text-charcoal-light text-sm mb-10">
          Create a temporary link to share a single property with a prospective
          tenant.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Property</label>
            <select
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-charcoal/15 text-sm focus:outline-none focus:border-charcoal/30 transition-colors"
            >
              {properties.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.area} – {p.postcode} ({p.slug})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Link Expiry (days)</label>
            <input
              type="number"
              min={1}
              max={90}
              value={expiryDays}
              onChange={(e) => setExpiryDays(Number(e.target.value))}
              className="w-full px-4 py-3 bg-white border border-charcoal/15 text-sm focus:outline-none focus:border-charcoal/30 transition-colors"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !slug}
            className="w-full py-3 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Link"}
          </button>

          {generatedUrl && (
            <div className="mt-6 p-4 bg-white border border-charcoal/10">
              <p className="text-xs text-charcoal-light mb-2">Share this link:</p>
              <div className="flex gap-2">
                <input
                  readOnly
                  value={generatedUrl}
                  className="flex-1 px-3 py-2 bg-cream border border-charcoal/10 text-sm font-mono text-charcoal truncate"
                />
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-charcoal text-white text-xs tracking-widest uppercase hover:bg-charcoal/90 transition-colors shrink-0"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-xs text-charcoal-light mt-2">
                Expires in {expiryDays} day{expiryDays !== 1 ? "s" : ""}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
