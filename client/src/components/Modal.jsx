import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ isOpen, title, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-10 w-[92%] max-w-[720px] rounded-xl2 bg-white shadow-card">
        <div className="flex items-start justify-between gap-4 border-b border-stroke px-6 py-4">
          <div>
            <h2 className="font-serif text-xl text-ink">{title}</h2>
          </div>
          <button type="button" className="btn-outline h-9 px-3" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>,
    document.body
  );
}

