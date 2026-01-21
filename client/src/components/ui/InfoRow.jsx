export function InfoRow({ iconSrc, title, lines }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-white">
        <img src={iconSrc} alt="" className="h-4 w-4 object-contain" />
      </div>
      <div>
        <div className="text-[11px] font-medium text-ink">{title}</div>
        <div className="mt-1 space-y-0.5 text-[11px] text-muted">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
