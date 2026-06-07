"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GitHubIcon } from "./icons";
import Particles from "./Particles";
import profilePhoto from "@/public/profile.jpg";

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

const stats = [
  { value: "5", label: "Projects" },
  { value: "2", label: "Certifications" },
  { value: "60+", label: "Students Guided" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:px-8"
    >
      <Particles />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium text-ink/70">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl leading-[1] tracking-tightest sm:mt-8 sm:text-6xl sm:leading-[0.95] lg:text-7xl"
          >
            <span className="font-normal text-ink/80">Hi, I&apos;m</span>
            <br />
            <span className="font-extrabold text-ink">Umair Ahmad</span>
          </motion.h1>

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
          className="flex flex-col items-center gap-8"
        >
          <motion.div variants={fadeUp} className="relative">
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

          <div className="grid w-full grid-cols-3 gap-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-black/5 bg-white p-4 text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)] sm:p-5"
              >
                <div className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-ink/50 sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
