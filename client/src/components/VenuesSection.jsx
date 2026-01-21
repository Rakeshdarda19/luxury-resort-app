import venue1 from "../assets/Image (Orangedale Ballroom).png";
import venue2 from "../assets/venue2.png";
import venue3 from "../assets/venue3.png";
import { VenueCarousel } from "./ui/VenueCarousel.jsx";

export function VenuesSection() {
  return (
    <section id="venues" className="bg-white py-12">
      <div className="container-page">
        <VenueCarousel
          slides={[
            {
              image: venue1,
              title: "Orangedale Ballroom",
              meta: "1/5",
            },
            {
              image: venue2,
              title: "Wedding Reception",
              meta: "2/5",
            },
            {
              image: venue3,
              title: "Grand Ballroom",
              meta: "3/5",
            },
          ]}
        />
      </div>
    </section>
  );
}
