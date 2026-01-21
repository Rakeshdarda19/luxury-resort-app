import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "./Modal.jsx";
import { api } from "../lib/api.js";

const enquirySchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .min(7, "Phone number is required")
    .max(20, "Phone number is too long"),
  preferredDate: z.string().optional(),
  guests: z
    .string()
    .optional()
    .refine((v) => !v || /^[0-9]+$/.test(v), "Guests must be a number"),
  message: z.string().max(1000, "Message is too long").optional(),
  source: z.string().optional(),
});

export function EnquiryModal({ isOpen, onClose, source }) {
  const [serverMsg, setServerMsg] = useState(null);

  const defaultValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredDate: "",
      guests: "",
      message: "",
      source: source || "",
    }),
    [source]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues,
  });

  const submit = async (values) => {
    setServerMsg(null);
    const payload = { ...values, source: source || values.source || "" };
    await api.post("/api/enquiries", payload);
    setServerMsg({ type: "success", text: "Enquiry submitted successfully." });
    reset(defaultValues);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Plan Your Dream Wedding"
      onClose={() => {
        setServerMsg(null);
        onClose?.();
      }}
    >
      <p className="mb-5 text-sm text-muted">
        Fill out the form below and our wedding specialists will contact you within 24 hours.
      </p>

      {serverMsg?.type === "success" ? (
        <div className="mb-5 rounded-md border border-stroke bg-canvas px-4 py-3 text-sm">
          {serverMsg.text}
        </div>
      ) : null}

      <form
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        onSubmit={handleSubmit(submit)}
      >
        <Field label="First Name*" error={errors.firstName?.message}>
          <input className="input" type="text" {...register("firstName")} />
        </Field>
        <Field label="Last Name*" error={errors.lastName?.message}>
          <input className="input" type="text" {...register("lastName")} />
        </Field>
        <Field label="Email Address*" error={errors.email?.message}>
          <input className="input" type="email" {...register("email")} />
        </Field>
        <Field label="Phone Number*" error={errors.phone?.message}>
          <input className="input" type="tel" {...register("phone")} />
        </Field>
        <Field label="Preferred Wedding Date" error={errors.preferredDate?.message}>
          <input className="input" type="date" {...register("preferredDate")} />
        </Field>
        <Field label="Number of Guests" error={errors.guests?.message}>
          <input className="input" inputMode="numeric" {...register("guests")} />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Tell us about your wedding vision" error={errors.message?.message}>
            <textarea className="input h-28 resize-none py-2" {...register("message")} />
          </Field>
        </div>

        <input type="hidden" {...register("source")} />

        <div className="sm:col-span-2 flex items-center justify-center pt-2">
          <button className="btn-primary min-w-[160px]" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className="label">{label}</span>
        {error ? <span className="text-xs text-red-600">{error}</span> : null}
      </div>
      {children}
    </label>
  );
}

