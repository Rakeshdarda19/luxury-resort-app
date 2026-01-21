import image4 from "../assets/image4.png";
import { PricingCard } from "./ui/PricingCard.jsx";
import { AccordionRow } from "./ui/AccordionRow.jsx";

export function PackagesSection({ openEnquiry }) {
  return (
    <section id="packages" className="bg-canvas py-14">
      <div className="container-page">
        <h2 className="text-center font-serif text-2xl">Packages &amp; Pricing</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            title="Classic"
            price="$12,000"
            cta="Learn More"
            onCta={() => openEnquiry("pricing:classic")}
            points={[
              "Ceremony & reception venue",
              "Basic décor & linens",
              "Tables, chairs",
              "Bridal suite access",
              "Complimentary parking",
            ]}
          />
          <PricingCard
            featured
            title="Premium"
            price="$18,500"
            cta="Learn More"
            onCta={() => openEnquiry("pricing:premium")}
            points={[
              "Everything in Classic",
              "Extended venue access (8 hours)",
              "Premium decoration & florals",
              "Professional photography (4 hours)",
              "Wedding coordinator",
            ]}
          />
          <PricingCard
            title="Luxury"
            price="$28,000"
            cta="Learn More"
            onCta={() => openEnquiry("pricing:luxury")}
            points={[
              "Everything in Premium",
              "Full-day venue access",
              "Luxury catering & bar service",
              "VIP suite accommodations",
              "Spa access for bridal party",
            ]}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl">Lorem Ipsum Pricing Title</h3>
            <p className="mt-3 text-xs text-muted">
              Our boutique hotel can host receptions for up to 400 guests and provides a variety
              of venues.
            </p>
            <div className="mt-6 rounded-md border border-stroke bg-white p-4">
              <AccordionRow label="Princess Ceremony" value="€4,600" />
              <AccordionRow label="Radiant Ceremony" value="€6,800" />
              <AccordionRow label="Suntory Greenery" value="€8,900" />
              <AccordionRow label="Elopement Package" value="€9,850" />
              <AccordionRow label="Le Visions Spa Package" value="€1,000" />
              <button className="btn-outline mt-4 w-full" onClick={() => openEnquiry("pricing:enquiry")}>
                ENQUIRY BUTTON
              </button>
            </div>
          </div>

          <img
            src={image4}
            alt="home"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
