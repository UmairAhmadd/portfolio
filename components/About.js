"use client";

import { motion } from "framer-motion";
import GhostText from "./GhostText";

const paragraphs = [
  "CS student at COMSATS University Islamabad, currently in 5th semester.",
  "Worked as Lab Demonstrator for OOP — guided 60+ students.",
  "Completed AI Bootcamp at Arfa Karim Technology Incubator, Lahore.",
  "I learn by building real projects — every project teaches something new.",
];

const skillGroups = [
  { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { group: "Mobile", items: ["Flutter", "Dart"] },
  { group: "Backend", items: ["Node.js", "Express.js"] },
  { group: "Database", items: ["MongoDB", "Firebase Firestore"] },
  { group: "Tools", items: ["Git", "GitHub", "Google ML Kit"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <GhostText className="top-6">ABOUT</GhostText>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          /About Me
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.12 }}
            className="space-y-6"
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-lg leading-relaxed text-ink/70"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="space-y-6"
          >
            {skillGroups.map((group) => (
              <motion.div key={group.group} variants={fadeUp}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                  {group.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:border-ink hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
