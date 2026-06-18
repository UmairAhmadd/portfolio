"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GhostText from "./GhostText";
import { ArrowUpRight, GitHubIcon } from "./icons";

const projects = [
  {
    title: "ChatFlow — Real-time Team Chat",
    badge: "FULL STACK",
    category: "Web Apps",
    description:
      "Full-stack real-time team chat platform for remote teams with workspaces, group messaging, direct messages, typing indicators, read receipts, JWT authentication, Google OAuth, and invite system.",
    features: [
      "Real-time messaging powered by Socket.io",
      "Typing indicators and read receipts",
      "Group chats and direct messages",
      "JWT authentication with Google OAuth",
      "Workspace invite system for teams",
    ],
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    stack: ["React", "Node.js", "Express", "Socket.io", "MongoDB", "JWT", "Google OAuth"],
    role: "Full-stack Developer",
    type: "Real-time Chat App",
    status: "Completed",
    challenges: [
      "Reliable real-time delivery using Socket.io rooms",
      "Unified auth across JWT and Google OAuth",
      "Keeping presence, typing and read-receipts in sync",
    ],
    result: "Deployed live on Vercel for real teams to try.",
    github: "https://github.com/UmairAhmadd",
    live: "https://chatflow-teams.vercel.app/login",
    accent: "#1e3a8a",
    image: "/chatflow.png",
  },
  {
    title: "Smart Receipt Scanner",
    badge: "MOBILE APP",
    category: "Mobile",
    description:
      "AI-powered Flutter app that scans receipts using Google ML Kit OCR, extracts expense data, stores records in Firebase, and shows expense analytics.",
    features: [
      "OCR receipt scanning",
      "Automatic expense extraction",
      "Firebase Auth, Firestore, and Storage",
      "Expense dashboard and analytics",
      "Receipt history management",
    ],
    tags: ["Flutter", "Firebase", "ML Kit"],
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Firebase Storage", "Google ML Kit"],
    role: "Mobile Developer",
    type: "AI OCR Expense App",
    status: "Completed",
    challenges: [
      "Accurate OCR across varied receipt formats",
      "Parsing amounts and dates from raw text",
      "Real-time sync and storage with Firestore",
    ],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#064e3b",
    image: "/receipt-scanner-dark.svg",
  },
  {
    title: "Job Board & Internship Portal",
    badge: "FULL STACK",
    category: "Web Apps",
    description:
      "Full-stack job and internship portal where students apply for opportunities and employers manage listings through secure authentication and REST APIs.",
    features: [
      "Student job/internship applications",
      "Employer job posting dashboard",
      "Secure JWT authentication",
      "REST API backend",
      "Role-based access",
    ],
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
    role: "Full-stack Developer",
    type: "Job & Internship Portal",
    status: "Completed",
    challenges: [
      "Role-based access for students vs employers",
      "Secure JWT authentication flow",
      "REST API design and data modeling",
    ],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#1f2937",
    image: "/job-portal.png",
  },
  {
    title: "Health Voice Analyzer",
    badge: "AI PROJECT",
    category: "AI",
    description:
      "AI-powered health analysis app that records or uploads voice and generates symptom-based insights using machine learning.",
    features: [
      "Voice recording/upload",
      "AI-based health insight generation",
      "Clean responsive interface",
      "Result display system",
      "Practical AI use case",
    ],
    tags: ["AI", "Machine Learning", "Voice"],
    stack: ["Python", "Machine Learning", "Audio Processing"],
    role: "AI Developer",
    type: "Health AI App",
    status: "Prototype",
    challenges: [
      "Extracting features from raw voice signals",
      "Mapping audio patterns to symptom insights",
    ],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#3b0764",
    image: "/health-voice.svg",
  },
  {
    title: "AI Chat App",
    badge: "AI PROJECT",
    category: "AI",
    description:
      "Responsive AI chat interface built with React and OpenAI API for real-time conversational experiences.",
    features: [
      "Real-time AI chat interface",
      "OpenAI API integration",
      "Responsive UI",
      "Clean conversation layout",
      "Modern frontend design",
    ],
    tags: ["React.js", "OpenAI API", "JavaScript"],
    stack: ["React.js", "OpenAI API", "JavaScript"],
    role: "Frontend Developer",
    type: "AI Chat Interface",
    status: "Completed",
    challenges: [
      "Managing live conversation state",
      "Clean responsive chat experience",
    ],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#312e81",
    image: "/ai-chat.svg",
  },
  {
    title: "Weather App",
    badge: "MINI",
    category: "Web Apps",
    mini: true,
    description:
      "Simple weather application that fetches and displays live weather data using an external API.",
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#0c4a6e",
    image: "/weather-app.svg",
  },
];

const mainProjects = projects.filter((p) => !p.mini);
const miniProjects = projects.filter((p) => p.mini);

const filters = ["All", "Web Apps", "Mobile", "AI"];

function hasLive(p) {
  return p.live && p.live !== "#";
}

function CheckIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function Thumbnail({ accent, badge, image, imageFit = "cover" }) {
  if (image) {
    return (
      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-ink/5 sm:h-52">
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06] ${
            imageFit === "contain"
              ? "object-contain object-top"
              : "object-cover object-center"
          }`}
        />
        <span className="absolute right-4 top-4 rounded-md bg-black/45 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/85 backdrop-blur-sm">
          {badge}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative h-40 w-full overflow-hidden rounded-xl sm:h-52"
      style={{ backgroundColor: accent }}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `linear-gradient(135deg, ${accent} 0%, rgba(10,10,10,0.85) 100%)`,
        }}
      />
      <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-widest text-white/50">
        {badge}
      </span>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const stack = project.stack || project.tags || [];
  const info = [
    project.role && { label: "Role", value: project.role },
    project.type && { label: "Project Type", value: project.type },
    stack.length && { label: "Tech Stack", value: stack.slice(0, 4).join(", ") },
    project.status && { label: "Status", value: project.status },
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="modal-scroll relative max-h-[92vh] w-full max-w-[940px] overflow-y-auto rounded-t-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-h-[90vh] sm:rounded-3xl"
      >
        {/* Close button — always visible, top-right */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white shadow-lg backdrop-blur transition-colors hover:bg-black/75"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Screenshot — full visibility on dark backdrop */}
        <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-t-3xl bg-[#0A0A0F] sm:h-[260px] sm:rounded-t-3xl">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-contain object-top"
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(135deg, ${project.accent} 0%, rgba(10,10,10,0.85) 100%)`,
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8">
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink/50">
            {project.badge}
          </span>
          <h3 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:text-[34px]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65 sm:text-base">
            {project.description}
          </p>

          {/* CTA buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {hasLive(project) && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-black/15 px-6 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper sm:w-auto"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Quick info cards */}
          {info.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-black/5 bg-paper p-3"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-ink/40">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-ink/80">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* What it does */}
          {project.features?.length > 0 && (
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                What it does
              </h4>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink/75"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
              Tech stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/5 bg-paper px-3 py-1.5 text-xs font-medium text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges solved */}
          {project.challenges?.length > 0 && (
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                Challenges solved
              </h4>
              <ul className="mt-3 space-y-2.5">
                {project.challenges.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Result / Impact */}
          {project.result && (
            <div className="mt-8 rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-emerald-700/70">
                Result
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                {project.result}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      variants={card}
      initial="hidden"
      whileInView="show"
      exit={{ opacity: 0, y: 20 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View case study for ${project.title}`}
      className="group flex cursor-pointer flex-col rounded-2xl border border-black/5 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_18px_50px_rgba(0,0,0,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 sm:p-5"
    >
      <Thumbnail
        accent={project.accent}
        badge={project.badge}
        image={project.image}
        imageFit={project.imageFit}
      />

      <h3 className="mt-5 text-lg font-bold tracking-tight text-ink sm:text-xl">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink/60">
        {project.description}
      </p>

      {/* 3 feature bullets */}
      {project.features?.length > 0 && (
        <ul className="mt-4 space-y-2">
          {project.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-ink/70"
            >
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Tech chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/60"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-black/5 pt-4 sm:pt-5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
        >
          View Case Study
        </button>
        {hasLive(project) && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="group/live inline-flex min-h-[40px] items-center gap-1 rounded-full border border-black/10 px-4 text-sm font-medium text-ink/70 transition-colors hover:border-ink hover:text-ink"
          >
            Live Demo
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label="GitHub repository"
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-black/10 px-4 text-sm font-medium text-ink/70 transition-colors hover:border-ink hover:text-ink"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? mainProjects
        : mainProjects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36"
    >
      <GhostText className="top-6">PORTFOLIO</GhostText>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
        >
          /Selected Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 max-w-xl text-base text-ink/55"
        >
          Production-minded builds across full-stack web, mobile, and AI — tap
          any project for the full case study.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === filter
                  ? "bg-ink text-paper"
                  : "border border-black/10 bg-white text-ink/60 hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mini projects */}
        {miniProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
              Mini Projects
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {miniProjects.map((project) => (
                <div
                  key={project.title}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold tracking-tight text-ink">
                      {project.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-ink/55">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-ink/60 transition-colors hover:border-ink hover:text-ink"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
