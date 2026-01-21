import glass from "../assets/glass.png";

export function DreamSection() {
  return (
    <section className="bg-white py-12">
      <div className="container-page grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl leading-snug">
            We stage it<br />your dream
          </h2>
          <p className="mt-4 text-xs text-muted">
            Your wedding should be a reflection of your unique love story. Our dedicated team of professionals works tirelessly to transform your vision into reality, handling every detail with care and precision.
          </p>
          <p className="mt-3 text-xs text-muted">
From the initial consultation to the last dance, we're with you every step of the way. Our experienced coordinators ensure a seamless celebration, allowing you to relax and cherish every moment.        
  </p>
  <p className="mt-3 text-xs text-muted">
With meticulous planning, creative design, and flawless execution, we create unforgettable experiences that you and your guests will treasure forever.
  </p>
        </div>
        <img
          src={glass}
          alt="home"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </section>
  );
}
