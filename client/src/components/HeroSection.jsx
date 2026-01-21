import image1 from "../assets/image1.png";

export function HeroSection() {
  return (
    <section className="container-page mt-5">
      <div className="grid grid-cols-1 overflow-hidden rounded-md border border-stroke bg-white md:grid-cols-2">
        <img
          src={image1}
          alt="home"
          className="h-full w-full object-cover"
        />
        <div className="bg-forest px-6 py-8 text-white md:px-10 md:py-12">
          <h1 className="font-serif text-3xl leading-tight md:text-4xl">
            Luxury resort
            <br />
            and wedding
            <br />
            venue
          </h1>
          <p className="mt-4 max-w-[440px] text-xs text-white/80">
            Nestled in the heart of breathtaking landscapes, our luxury resort offers an unparalleled setting for your dream wedding. With pristine gardens, elegant architecture, and world-class amenities, we create unforgettable moments that last a lifetime.
          </p>
          <button className="btn-outline mt-6 bg-transparent text-white hover:bg-white/10">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
