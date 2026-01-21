export function FooterCol({ title, items }) {
  return (
    <div>
      <h3 className="font-serif text-sm">{title}</h3>
      <ul className="mt-3 space-y-2 text-xs text-white/75">
        {items.map((i) => (
          <li key={i}>
            <a className="hover:underline" href="#">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
