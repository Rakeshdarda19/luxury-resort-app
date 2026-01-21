import { FaqItem } from "./ui/FaqItem.jsx";

export function FAQSection() {
  return (
    <section className="bg-white py-14">
      <div className="container-page">
        <h2 className="text-center font-serif text-2xl">Frequently Asked Questions</h2>
        <div className="mx-auto mt-8 max-w-[820px] divide-y divide-stroke rounded-md border border-stroke">
          <FaqItem q="How far in advance should we book our wedding?" a="We recommend booking 9–18 months in advance for peak seasons, though off-season dates may be available sooner." />
          <FaqItem q="Do you offer wedding planning services?" a="Yes. We offer on-site planning support and coordinator packages depending on your selected package." />
          <FaqItem q="Can we bring our own vendors?" a="In most cases, yes. Some services may require approval to meet venue standards and insurance requirements." />
          <FaqItem q="What is your cancellation policy?" a="Policies vary by package and date. We'll provide the full terms during enquiry and contracting." />
          <FaqItem q="Do you accommodate dietary restrictions?" a="Absolutely. Our catering team can accommodate common dietary needs with advance notice." />
          <FaqItem q="Is there accommodation available for guests?" a="Yes. Guest accommodations are available onsite; availability depends on season and booking volume." />
        </div>
      </div>
    </section>
  );
}
