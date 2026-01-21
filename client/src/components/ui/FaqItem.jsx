import { useState } from "react";

export function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="px-5 py-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-sm text-ink">{q}</span>
        <span className="text-lg text-muted">{open ? "−" : "+"}</span>
      </button>
      {open ? <p className="mt-3 text-xs text-muted">{a}</p> : null}
    </div>
  );
}
