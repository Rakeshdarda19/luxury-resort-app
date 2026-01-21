import facebook from "../assets/icons/facebook.png";
import insta from "../assets/icons/insta.png";
import twitter from "../assets/icons/twitter.png";
import email from "../assets/icons/email.png";
import { FooterCol } from "./ui/FooterCol.jsx";

export function Footer() {
  return (
    <footer className="bg-forest py-10 text-white">
      <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-serif text-sm">About Us</h3>
          <p className="mt-3 text-xs text-white/75">
            The Luxury Resort has been creating unforgettable wedding experiences for over 50
            years. Our commitment to excellence ensures your special day is perfect.
          </p>
        </div>

        <FooterCol
          title="Quick Links"
          items={["Home", "About", "Venues", "Packages", "Gallery", "Contact"]}
        />
        <FooterCol
          title="Services"
          items={["Wedding Planning", "Catering", "Photography", "Floral Design", "Entertainment", "Accommodations"]}
        />
        <div>
          <h3 className="font-serif text-sm">Connect With Us</h3>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <img src={facebook} alt="Facebook" className="h-4 w-4 object-contain" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <img src={insta} alt="Instagram" className="h-4 w-4 object-contain" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <img src={twitter} alt="Twitter" className="h-4 w-4 object-contain" />
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <img src={email} alt="Email" className="h-4 w-4 object-contain" />
            </div>
          </div>
          <p className="mt-3 text-xs text-white/75">
            Newsletter: Stay updated with our latest offerings and exclusive deals.
          </p>
        </div>
      </div>

      <div className="container-page mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
        <span>© {new Date().getFullYear()} The Luxury Resort. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:underline" href="#terms">
            Terms of Service
          </a>
          <a className="hover:underline" href="#sitemap">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
