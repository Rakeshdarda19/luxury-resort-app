import clsx from "clsx";

export function PricingCard({ title, price, points, cta, onCta, featured }) {
  return (
    <div
      className={clsx(
        "relative rounded-md border border-stroke bg-#3B5956 p-6 text-center shadow-sm",
        featured && "bg-forest text-white"
      )}
    >
      {featured ? (
        <span className="absolute right-4 top-3 rounded-sm bg-white/15 px-2 py-1 text-[9px] uppercase tracking-wider">
          Popular
        </span>
      ) : null}

      <div className="text-left">
        <h3 className={clsx("font-serif text-lg", featured ? "text-white" : "text-ink")}>{title}</h3>
        <div className={clsx("mt-1 font-serif text-2xl", featured ? "text-white" : "text-ink")}>{price}</div>
      </div>

      <ul className={clsx("mt-4 space-y-2 text-left text-xs", featured ? "text-white/85" : "text-muted")}>
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <CheckIcon className={clsx("mt-[1px] h-4 w-4", featured ? "text-white/85" : "text-forest")} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <button
        className={clsx(
          "mt-6 w-full border-2 border-forest",
          featured ? "btn-outline border-2 border-white  bg-white text-ink hover:bg-white/90" : "btn-outline"
        )}
        onClick={onCta}
        type="button"
      >
        {cta}
      </button>
    </div>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
