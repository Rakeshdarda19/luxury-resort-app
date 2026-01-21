import catering from "../assets/catering.png";

export function CateringSection() {
  return (
    <section className="bg-canvas py-12">
      <div className="container-page grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <img
          src={catering}
          alt="home"
          className="h-full w-full object-cover"
        />

        <div>
          <h2 className="font-serif text-2xl leading-snug">Catering</h2>
          <p className="mt-4 text-xs text-muted">
            Our award-winning culinary team creates exceptional dining experiences tailored to
            your taste and vision. From elegant plated dinners to lavish buffets, every dish is
            prepared with the finest ingredients and presented with artistry.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 text-xs text-muted">
            <div>
              <div className="mb-2 text-[11px] font-medium text-ink">Menu Options</div>
              <ul className="space-y-1">
                <li>- Plated dinners</li>
                <li>- Buffet service</li>
                <li>- Cocktail receptions</li>
                <li>- Custom menus</li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-[11px] font-medium text-ink">Specialties</div>
              <ul className="space-y-1">
                <li>- Artisan appetizers</li>
                <li>- Premium entrées</li>
                <li>- Signature desserts</li>
                <li>- Wine pairings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
