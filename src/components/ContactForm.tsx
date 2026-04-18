"use client";

import { useState } from "react";

const MIN_WORDS = 6;

const countWords = (s: string) =>
  s.trim().split(/\s+/).filter(Boolean).length;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [validationError, setValidationError] = useState("");
  const [message, setMessage] = useState("");

  const wordCount = countWords(message);
  const wordsRemaining = Math.max(0, MIN_WORDS - wordCount);
  const meetsMin = wordCount >= MIN_WORDS;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationError("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      reason: (form.elements.namedItem("reason") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    if (countWords(data.message) < MIN_WORDS) {
      setValidationError("Please write at least 6 words so we can help you properly.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-xl mb-2">Thank you.</p>
        <p className="text-charcoal-light text-sm">Your message has been sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-3 bg-white border border-charcoal/15 text-sm focus:outline-none focus:border-charcoal/30 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-white border border-charcoal/15 text-sm focus:outline-none focus:border-charcoal/30 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="reason" className="block text-sm mb-2">Reason for Enquiry</label>
        <select
          id="reason"
          name="reason"
          required
          className="w-full px-4 py-3 bg-white border border-charcoal/15 text-sm focus:outline-none focus:border-charcoal/30 transition-colors"
        >
          <option value="">Select a reason</option>
          <option value="viewing">Request a viewing</option>
          <option value="availability">Property availability</option>
          <option value="maintenance">Maintenance request</option>
          <option value="general">General enquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-white border border-charcoal/15 text-sm focus:outline-none focus:border-charcoal/30 transition-colors resize-none"
        />
        <p className={`mt-2 text-xs ${meetsMin ? "text-charcoal-light" : "text-charcoal-light"}`}>
          {meetsMin
            ? `${wordCount} words — looks good.`
            : `${wordsRemaining} more word${wordsRemaining === 1 ? "" : "s"} needed (minimum ${MIN_WORDS}).`}
        </p>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3 bg-charcoal text-white text-sm tracking-widest uppercase hover:bg-charcoal/90 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {validationError && (
        <p className="text-accent text-sm text-center">{validationError}</p>
      )}
      {status === "error" && (
        <p className="text-accent text-sm text-center">Sorry, something went wrong. Please try again.</p>
      )}
    </form>
  );
}
