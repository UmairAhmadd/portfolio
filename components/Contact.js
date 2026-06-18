"use client";

import { motion } from "framer-motion";
import GhostText from "./GhostText";
import ContactForm from "./ContactForm";
import { ArrowUpRight, MailIcon, GitHubIcon, LinkedInIcon } from "./icons";

const cards = [
  {
    label: "Email",
    value: "umairahmad3921@gmail.com",
    href: "mailto:umairahmad3921@gmail.com",
    Icon: MailIcon,
  },
  {
    label: "GitHub",
    value: "github.com/UmairAhmadd",
    href: "https://github.com/UmairAhmadd",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/umair-ahmad-a87753274",
    href: "https://www.linkedin.com/in/umair-ahmad-a87753274",
    Icon: LinkedInIcon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <GhostText className="top-6">CONTACT</GhostText>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          /Let&apos;s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-4 max-w-xl text-lg text-ink/60"
        >
          Open to internships, freelance projects, and real-world product
          collaborations. Have something in mind? Let&apos;s talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href="mailto:umairahmad3921@gmail.com"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            <MailIcon className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://github.com/UmairAhmadd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-black/15 px-6 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white sm:w-auto"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/umair-ahmad-a87753274"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-black/15 px-6 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white sm:w-auto"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col gap-4"
          >
            {cards.map(({ label, value, href, Icon }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                    {label}
                  </div>
                  <div className="mt-1 break-all text-sm font-medium text-ink/80">
                    {value}
                  </div>
                </div>
                <span className="ml-auto translate-x-1 text-ink/40 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </motion.a>
            ))}
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
