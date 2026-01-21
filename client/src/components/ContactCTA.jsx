import contact from "../assets/icons/contact.png";
import email from "../assets/icons/email.png";
import address from "../assets/icons/address.png";
import { ContactPill } from "./ui/ContactPill.jsx";

export function ContactCTA({ openEnquiry }) {
  return (
    <section id="contact" className="bg-canvas py-14">
      <div className="container-page text-center">
        <h2 className="font-serif text-2xl">Ready to book your dream wedding?</h2>
        <p className="mt-2 text-xs text-muted">Contact us today to schedule a tour and consultation</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-14">
          <ContactPill iconSrc={contact} title="Call Us" line1="(555) 123-4567" line2="Mon–Sun 9am–8pm" />
          <ContactPill iconSrc={email} title="Email Us" line1="weddings@luxuryresort.com" line2="We reply within 24 hours" />
          <ContactPill iconSrc={address} title="Visit Us" line1="123 Paradise Lane" line2="By appointment only" />
        </div>

        <button className="btn-primary mt-8" onClick={() => openEnquiry("cta:schedule-tour")}>
          Schedule a Tour
        </button>
      </div>
    </section>
  );
}
