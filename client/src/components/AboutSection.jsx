import image2 from "../assets/image2.png";

export function AboutSection() {
  return (
    <section id="about" className="mt-10 bg-canvas py-12">
      <div className="container-page grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl leading-snug">A History of<br />Romance</h2>
          <p className="mt-4 text-xs text-muted">
            For over half a century, our venue has been the backdrop to countless love stories.
            What began as a private estate in 1955 has evolved into one of the most sought-after
            wedding destinations in the region.
          </p>
          <p className="mt-3 text-xs text-muted">
            Our grounds have witnessed the union of thousands of couples, each celebration as
            unique as the love it honors. From intimate ceremonies to grand receptions, we've
            perfected the art of bringing wedding dreams to life.
          </p>
          <p className="mt-3 text-xs text-muted">
            The timeless architecture and meticulously maintained gardens create an atmosphere of elegance and romance, ensuring your special day is nothing short of magical.
          </p>
        </div>
        <img
          src={image2}
          alt="home"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
