"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GitHubIcon } from "./icons";
import Particles from "./Particles";
import Typewriter from "./Typewriter";
import TypeOnce from "./TypeOnce";
import ScrollIndicator from "./ScrollIndicator";
import profilePhoto from "@/public/profile.jpg";

const headingSegments = [
  { text: "Hi, I'm ", className: "font-normal text-ink/80" },
  { break: true },
  { text: "Umair Ahmad", className: "font-extrabold text-ink" },
];

const roles = [
  "Full Stack Developer",
  "React.js Developer",
  "Node.js Developer",
  "Mobile App Developer",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const [headingDone, setHeadingDone] = useState(false);
  const [showRoles, setShowRoles] = useState(false);

  // After the heading finishes typing, pause 1s, then start cycling roles.
  useEffect(() => {
    if (!headingDone) return;
    const t = setTimeout(() => setShowRoles(true), 1000);
    return () => clearTimeout(t);
  }, [headingDone]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:px-8"
    >
      <Particles />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium text-ink/70">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl leading-[1] tracking-tightest sm:mt-8 sm:text-6xl sm:leading-[0.95] lg:text-7xl"
          >
            <TypeOnce
              segments={headingSegments}
              onDone={() => setHeadingDone(true)}
              cursorClassName="font-light text-ink/40"
            />
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex h-7 items-center text-xl font-semibold text-ink/70 sm:h-9 sm:text-2xl"
          >
            {showRoles && (
              <Typewriter
                words={roles}
                cursorClassName="font-light text-ink/50"
              />
            )}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-ink/60"
          >
            Building real-world web and mobile applications. Passionate about
            clean code and modern technology.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/UmairAhmadd"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-white"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1 flex flex-col items-center gap-8 md:order-2"
        >
          <motion.div variants={fadeUp} className="relative mt-8 sm:mt-12 lg:mt-20">
            {/* soft halo behind the photo */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-white/60 blur-2xl" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5 sm:h-64 sm:w-64">
              <Image
                src={profilePhoto}
                alt="Umair Ahmad"
                fill
                priority
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
