"use client";

import { useState } from "react";
import Image from "next/image";

export default function Projectcard({ title, images, projectimg, projectdesc }) {
  const allImages = images && images.length > 0 ? images : projectimg ? [projectimg] : [];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? allImages.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === allImages.length - 1 ? 0 : c + 1));

  return (
    <article className="grid overflow-hidden rounded-2xl border border-[var(--line)] bg-white md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative bg-[var(--background)] p-4">
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {allImages.map((img, i) => (
              <div key={i} className="relative aspect-[3/2] w-full flex-shrink-0">
                <Image
                  src={img}
                  alt={`${title} preview ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {allImages.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/60"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white backdrop-blur-sm transition hover:bg-black/60"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === current ? "bg-white scale-110" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
          Featured Project
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-8 text-neutral-700">{projectdesc}</p>
      </div>
    </article>
  );
}
