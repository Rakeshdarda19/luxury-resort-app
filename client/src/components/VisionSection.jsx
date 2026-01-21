import image3 from "../assets/image3.png";

export function VisionSection() {
  return (
    <section className="bg-canvas py-12">
      <div className="container-page grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <img
          src={image3}
          alt="home"
          className="h-full w-full object-cover"
        />
        <div>
          <h2 className="font-serif text-2xl leading-snug">Nourishing Visions</h2>
          <p className="mt-4 text-xs text-muted">
            Every detail matters when it comes to your special day. Our experienced team works
            closely with you to bring your vision to life, from the grandest elements to the
            smallest touches.
          </p>
          <p className="mt-3 text-xs text-muted">
            We believe in creating experiences that reflect your unique love story. Our venue
            spaces can be transformed to match any theme or style, whether you envision a classic,
            romantic celebration or a modern, contemporary affair.
          </p>
          <p className="mt-3 text-xs text-muted">
With dedicated wedding planners, world-class catering, and attention to every detail, we ensure your celebration exceeds all expectations.          </p>
        </div>
      </div>
    </section>
  );
}
