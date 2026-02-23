"use client";

import { useState } from "react";
import PropertyImage from "./PropertyImage";

interface Props {
  images: string[];
  alt: string;
}

export default function PropertyGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <div
          className="aspect-[16/9] bg-charcoal/5 overflow-hidden cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <PropertyImage
            src={images[activeIndex]}
            alt={`${alt} – image ${activeIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`shrink-0 w-20 h-20 overflow-hidden border-2 transition-colors ${
                  i === activeIndex ? "border-accent" : "border-transparent"
                }`}
              >
                <PropertyImage
                  src={img}
                  alt={`${alt} – thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightboxOpen(false)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <img
            src={images[activeIndex]}
            alt={`${alt} – image ${activeIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev + 1) % images.length);
            }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
