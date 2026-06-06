"use client";

import { motion } from "framer-motion";
import GhostText from "./GhostText";

const experience = [
  {
    role: "Lab Demonstrator – OOP",
    org: "COMSATS University",
    period: "Sep 2025 – Dec 2025",
    detail: "Guided 60+ students across 2 lab classes.",
  },
];

const certifications = [
  {
    role: "AI Bootcamp",
    org: "Arfa Karim Technology Incubator",
    period: "2025",
    detail: "Hands-on training in applied AI and machine learning.",
  },
  {
    role: "Supervised ML: Regression & Classification",
    org: "DeepLearning.AI & Stanford University (Coursera)",
    period: "2025",
    detail: "Core supervised learning algorithms and model evaluation.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
        {title}
      </h3>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.12 }}
        className="mt-6 space-y-0"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.role}
            variants={fadeUp}
            className="relative border-l border-black/10 pb-8 pl-6 last:pb-0"
          >
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-ink" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-lg font-bold tracking-tight text-ink">
                {item.role}
              </h4>
              <span className="text-xs font-medium text-ink/40">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-ink/70">{item.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/50">
              {item.detail}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <GhostText className="top-6">EXPERIENCE</GhostText>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          /Experience &amp; Certifications
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Timeline title="Experience" items={experience} />
          <Timeline title="Certifications" items={certifications} />
        </div>
      </div>
    </section>
  );
}
