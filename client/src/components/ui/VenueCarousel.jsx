import { useState } from "react";
import clsx from "clsx";
import venue1 from "../../assets/Image (Orangedale Ballroom).png";
import venue3 from "../../assets/venue3.png";

export function VenueCarousel({ slides }) {
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const slide = slides[idx];

  const prev = () => setIdx((v) => (v - 1 + total) % total);
  const next = () => setIdx((v) => (v + 1) % total);

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-md">
        <img src={slide.image} alt={slide.title} className="h-[320px] w-full object-cover md:h-[360px]" />

        <button
          type="button"
          aria-label="Previous"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/25 p-2 text-white backdrop-blur hover:bg-black/35"
        >
          <span className="block text-lg leading-none">‹</span>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/25 p-2 text-white backdrop-blur hover:bg-black/35"
        >
          <span className="block text-lg leading-none">›</span>
        </button>

        <div className="absolute left-5 bottom-5 text-white">
          <div className="text-[11px] text-white/80">{slide.meta}</div>
          <div className="mt-1 text-xs">{slide.title}</div>
        </div>

        <div className="absolute bottom-5 right-5 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={clsx(
                "h-1.5 w-6 rounded-full transition",
                i === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-md">
          <img src={venue1} alt="Grand Ballroom" className="h-48 w-full object-cover md:h-56" />
          <div className="absolute left-4 bottom-4 rounded bg-white px-3 py-2 text-[11px] shadow-card">
            <div className="font-medium text-ink">Grand Ballroom</div>
            <div className="text-muted">Capacity: 200-300 guests</div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <img src={venue3} alt="Garden Terrace" className="h-48 w-full object-cover md:h-56" />
          <div className="absolute left-4 bottom-4 rounded bg-white px-3 py-2 text-[11px] shadow-card">
            <div className="font-medium text-ink">Garden Terrace</div>
            <div className="text-muted">Capacity: 150-250 guests</div>
          </div>
        </div>
      </div>
    </div>
  );
}
