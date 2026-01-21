import { useMemo } from "react";

export function Header() {
  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Venues", href: "#venues" },
      { label: "Packages", href: "#packages" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <header className="container-page pt-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-white text-sm font-semibold">
            L
          </div>
          <span className="font-serif text-sm text-ink">The Luxury Resort</span>
        </div>
        <nav className="hidden items-center gap-6 text-xs text-ink md:flex">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="hover:underline">
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
