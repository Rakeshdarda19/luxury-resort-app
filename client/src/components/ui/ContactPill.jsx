export function ContactPill({ title, line1, line2, iconSrc, iconAlt = "" }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center bg-forest rounded-full">
        <img
          src={iconSrc}
          alt={iconAlt}
          className="h-5 w-5 object-contain"
        />
      </div>
      <div className="text-xs font-medium text-ink">{title}</div>
      <div className="text-[11px] text-muted">{line1}</div>
      <div className="text-[11px] text-muted">{line2}</div>
    </div>
  );
}
