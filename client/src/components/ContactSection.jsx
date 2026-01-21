import { useState } from "react";
import contact from "../assets/icons/contact.png";
import email from "../assets/icons/email.png";
import address from "../assets/icons/address.png";
import timer from "../assets/icons/timer.png";
import { InfoRow } from "./ui/InfoRow.jsx";
import { SuccessPopup } from "./ui/SuccessPopup.jsx";
import { api } from "../lib/api.js";

const Label = ({ text }) => (
  <label className="mb-1 block font-poppins text-[14px] font-medium leading-[20px] text-gray-900">
    {text}
  </label>
);

export function ContactSection({ openEnquiry }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    guests: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;
  setIsSubmitting(true);

  try {
    await api.post("/api/enquiries", {
      ...formData,
      source: "contact-form",
    });

    setShowSuccess(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredDate: "",
      guests: "",
      message: "",
    });
    setErrors({});
  } catch (error) {
    console.error("Network error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="bg-white py-14">
      <div className="container-page">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-serif text-2xl">Plan Your Dream Wedding</h2>
          <p className="mt-2 text-xs text-muted">
            Fill out the form below and our wedding specialists will contact you within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-[860px] rounded-md border border-stroke bg-white p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label text="First Name *" />
              <input 
                className={`input ${errors.firstName ? 'border-red-500' : ''}`}
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
            </div>
            <div>
              <Label text="Last Name *" />
              <input 
                className={`input ${errors.lastName ? 'border-red-500' : ''}`}
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
            </div>
            <div>
              <Label text="Email Address *" />
              <input 
                className={`input ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <Label text="Phone Number *" />
              <input 
                className={`input ${errors.phone ? 'border-red-500' : ''}`}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
            </div>
            <div>
              <Label text="Preferred Wedding Date" />
              <input 
                className="input"
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Label text="Number of Guests" />
              <input 
                className="input"
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
            <div className="sm:col-span-2">
              <Label text="Tell us about your wedding vision" />
              <textarea 
                className="input h-28 resize-none"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button 
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </div>
        </form>

        <div className="mt-14 bg-canvas py-12">
          <div className="container-page">
            <h2 className="text-center font-serif text-2xl">Visit Our Venue</h2>
            <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="aspect-[4/3] rounded-md bg-neutral-200" />
              <div className="rounded-md border border-stroke bg-white p-6 text-xs text-muted">
                <InfoRow
                  iconSrc={address}
                  title="Address"
                  lines={["123 Paradise Lane", "Luxury District", "New York, NY 10001"]}
                />
                <div className="mt-5">
                  <InfoRow
                    iconSrc={contact}
                    title="Contact"
                    lines={["Phone: (555) 123-4567", "Fax: (555) 123-4568"]}
                  />
                </div>
                <div className="mt-5">
                  <InfoRow
                    iconSrc={email}
                    title="Email"
                    lines={["weddings@luxuryresort.com", "events@luxuryresort.com"]}
                  />
                </div>
                <div className="mt-5">
                  <InfoRow
                    iconSrc={timer}
                    title="Viewing Hours"
                    lines={[
                      "Monday - Friday: 9:00 AM - 6:00 PM",
                      "Saturday - Sunday: 10:00 AM - 8:00 PM",
                      "By appointment only",
                    ]}
                  />
                </div>
                <button className="btn-primary mt-6" type="button">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Enquiry Submitted Successfully!"
        message="Thank you for your enquiry. Our wedding specialists will contact you within 24 hours."
      />
    </section>
  );
}
