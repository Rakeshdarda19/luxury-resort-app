export function AccordionRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-stroke py-3 last:border-b-0">
      <div>
        <div className="text-[11px] font-medium text-ink">{label}</div>
        <div className="mt-1 text-[11px] text-muted">{value}</div>
      </div>
      <ChevronDown className="h-4 w-4 text-muted" />
    </div>
  );
}

function ChevronDown({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
