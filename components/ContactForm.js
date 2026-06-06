"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "./icons";

const SERVICE_ID = "service_1i4w0uj";
const TEMPLATE_ID = "template_wqatwpb";
const PUBLIC_KEY = "QC3ZBkCQ-MLSncnb2";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const inputClasses =
  "w-full rounded-2xl border border-black/5 bg-paper px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-ink/30 focus:bg-white";

export default function ContactForm() {
  const formRef = useRef(null);
  // status: "idle" | "sending" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const configured = SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    if (!configured) {
      setStatus("error");
      setErrorMsg(
        "Email service isn't configured yet. Add your EmailJS keys to .env.local."
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err?.text || "Something went wrong. Please email me directly."
      );
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-8"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/40"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/40"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ink/40"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about the opportunity..."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {status === "success" && (
          <span className="text-sm font-medium text-green-600">
            Thanks! Your message has been sent.
          </span>
        )}
        {status === "error" && (
          <span className="text-sm font-medium text-red-500">{errorMsg}</span>
        )}
      </div>
    </motion.form>
  );
}
