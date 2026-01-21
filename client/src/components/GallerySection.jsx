import moments1 from "../assets/moments1.png";
import moments2 from "../assets/moments2.png";
import moments3 from "../assets/moments3.png";
import moments4 from "../assets/moments4.png";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-canvas py-12">
      <div className="container-page">
        <h2 className="text-center font-serif text-2xl">Moments to Remember</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="aspect-square overflow-hidden rounded-md">
            <img
              src={moments1}
              alt="gallery 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-md">
            <img
              src={moments2}
              alt="gallery 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-md">
            <img
              src={moments3}
              alt="gallery 3"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-md">
            <img
              src={moments4}
              alt="gallery 4"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-10 rounded-md bg-forest px-6 py-10 text-center text-white">
          <p className="mx-auto max-w-[780px] font-serif text-sm italic text-white/90">
            "The Luxury Resort provided the perfect backdrop for our special day. The staff went
            above and beyond to make sure we and our guests had an unforgettable experience.
            Highly recommended!"
          </p>
          <div className="mt-5 text-xs text-white/70">Jessica &amp; Ryan • May 2025</div>
        </div>
      </div>
    </section>
  );
}
