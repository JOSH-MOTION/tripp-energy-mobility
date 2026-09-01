"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const enquiryTypes = [
  "DFI / Investment",
  "School Partnership",
  "Technology / Supply",
  "Academic Partnership",
  "Media / Press",
  "General",
];

const countries = [
  "Nigeria",
  "India",
  "Pakistan",
  "DR Congo",
  "Ivory Coast",
  "Ethiopia",
  "France",
  "Other",
];

const typeParamMap: Record<string, string> = {
  partnership: "School Partnership",
  general: "General",
  dfi: "DFI / Investment",
  media: "Media / Press",
};

function FormFields() {
  const params = useSearchParams();
  const presetType = typeParamMap[params.get("type") ?? ""] ?? "";

  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const wordCount = message.trim() ? message.trim().split(/\s+/).length : 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    if (!form.get("name")) nextErrors.name = "Full name is required.";
    if (!form.get("organisation")) nextErrors.organisation = "Organisation is required.";
    const email = String(form.get("email") ?? "");
    if (!email.includes("@")) nextErrors.email = "Enter a valid email address.";
    if (!form.get("country")) nextErrors.country = "Please select a country.";
    if (!form.get("enquiryType")) nextErrors.enquiryType = "Please select an enquiry type.";
    if (!form.get("message")) nextErrors.message = "Please add a short message.";
    if (wordCount > 500) nextErrors.message = "Please keep your message under 500 words.";

    setErrors(nextErrors);
    setSubmitError(null);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong.");
      }
      setStatus("submitted");
    } catch (err) {
      setStatus("idle");
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-teal/20 bg-teal/5 px-8 py-14 text-center">
        <CheckCircle weight="fill" className="size-10 text-teal" />
        <h2 className="text-xl font-semibold text-navy">Message sent</h2>
        <p className="max-w-sm text-sm text-ink/65">
          Thank you for reaching out. Every enquiry is read and responded to within 48
          business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            className={inputClass(!!errors.name)}
            placeholder="Ada Obi"
          />
        </Field>
        <Field label="Organisation" htmlFor="organisation" error={errors.organisation}>
          <input
            id="organisation"
            name="organisation"
            type="text"
            className={inputClass(!!errors.organisation)}
            placeholder="Your organisation"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass(!!errors.email)}
            placeholder="you@organisation.com"
          />
        </Field>
        <Field label="Country" htmlFor="country" error={errors.country}>
          <select id="country" name="country" defaultValue="" className={inputClass(!!errors.country)}>
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Enquiry Type" htmlFor="enquiryType" error={errors.enquiryType}>
        <select
          id="enquiryType"
          name="enquiryType"
          defaultValue={presetType}
          className={inputClass(!!errors.enquiryType)}
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Message"
        htmlFor="message"
        error={errors.message}
        helper={`${wordCount} / 500 words`}
      >
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass(!!errors.message)}
          placeholder="Tell us about your organisation and how you'd like to work together."
        />
      </Field>

      <Field label="How did you hear about us? (optional)" htmlFor="source">
        <input id="source" name="source" type="text" className={inputClass(false)} />
      </Field>

      {submitError && (
        <p className="text-sm font-medium text-lsecnp">
          {submitError} You can also email{" "}
          <a href="mailto:contact@trippenergy.com" className="underline underline-offset-2">
            contact@trippenergy.com
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-teal px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  helper,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <label htmlFor={htmlFor} className="text-sm font-medium text-navy">
          {label}
        </label>
        {helper && <span className="text-xs text-muted">{helper}</span>}
      </div>
      {children}
      {error && <p className="text-xs font-medium text-lsecnp">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border ${
    hasError ? "border-lsecnp" : "border-navy/15"
  } bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30`;
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="h-96" />}>
      <FormFields />
    </Suspense>
  );
}
