"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GhostText from "./GhostText";
import { ArrowUpRight, GitHubIcon } from "./icons";

const projects = [
  {
    title: "ChatFlow — Real-time Team Chat Application",
    badge: "FULL STACK",
    category: "Web Apps",
    description:
      "Full-stack real-time chat app for remote teams. Real-time messaging, typing indicators, read receipts, group chats, JWT auth, Google OAuth, and workspace invite system.",
    features: [
      "Real-time messaging powered by Socket.io",
      "Typing indicators and read receipts",
      "Group chats and direct messages",
      "JWT authentication with Google OAuth",
      "Workspace invite system for teams",
    ],
    tags: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/UmairAhmadd",
    live: "https://chatflow-teams.vercel.app/login",
    accent: "#1e3a8a",
    image: "/chatflow.png",
  },
  {
    title: "Job Board & Internship Portal",
    badge: "FULL STACK",
    category: "Web Apps",
    description:
      "Full-stack platform — students apply for jobs, employers post listings. JWT auth, REST API.",
    features: [
      "Students can register, browse and apply for jobs",
      "Employers can post job/internship listings",
      "JWT-based authentication with role-based access",
      "Student dashboard to track applications",
      "Employer dashboard to manage listings",
      "RESTful API with Node.js and Express.js",
      "MongoDB database for data storage",
    ],
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#1f2937",
    image: "/job-portal.png",
  },
  {
    title: "Smart Receipt Scanner",
    badge: "MOBILE APP",
    category: "Mobile",
    description:
      "Flutter app with Google ML Kit OCR to scan receipts. Firebase backend.",
    features: [
      "Flutter mobile app for scanning receipts",
      "Google ML Kit OCR for text extraction",
      "Categorizes expenses automatically",
      "Firebase Authentication and Firestore",
      "Analytics dashboard for expense tracking",
    ],
    tags: ["Flutter", "Firebase", "ML Kit"],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#064e3b",
    image: "/receipt-scanner-dark.svg",
  },
  {
    title: "AI Chat App",
    badge: "AI PROJECT",
    category: "AI",
    description:
      "React.js + OpenAI API real-time chat application with responsive UI.",
    features: [
      "Real-time chat with OpenAI GPT API",
      "Responsive UI built with React.js",
      "Chat history maintained in session",
      "Clean modern chat interface",
    ],
    tags: ["React.js", "OpenAI API", "JavaScript"],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#312e81",
    image: "/ai-chat.svg",
  },
  {
    title: "Health Voice Analyzer",
    badge: "AI PROJECT",
    category: "AI",
    description:
      "AI-powered health analysis app — record or upload your voice, get instant health report with symptom analysis using Machine Learning.",
    features: [
      "Record or upload voice for health analysis",
      "AI/ML model analyzes voice patterns",
      "Generates health report with symptoms",
      "Medicine and treatment suggestions",
      "Built during Arfa Karim AI Bootcamp",
    ],
    tags: ["AI", "Machine Learning"],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#3b0764",
    image: "/health-voice.svg",
  },
  {
    title: "Weather App",
    badge: "WEB APP",
    category: "Web Apps",
    description: "Real-time weather app with clean UI.",
    features: [
      "Real-time weather data via REST API",
      "Search by city name",
      "Shows temperature, humidity, wind speed",
      "Clean responsive UI with HTML, CSS, JavaScript",
    ],
    tags: ["JavaScript", "REST API", "CSS"],
    github: "https://github.com/UmairAhmadd",
    live: "#",
    accent: "#0c4a6e",
    image: "/weather-app.svg",
  },
];

const filters = ["All", "Web Apps", "Mobile", "AI"];

function Thumbnail({ accent, badge, image, imageFit = "cover" }) {
  if (image) {
    return (
      <div className="relative h-36 w-full overflow-hidden rounded-xl bg-ink/5 sm:h-48">
        <img
          src={image}
          alt=""
          loading="lazy"
          className={`h-full w-full transition-transform duration-300 ease-out group-hover:scale-105 ${imageFit === "contain" ? "object-contain object-top" : "object-cover object-center"}`}
        />
        <span className="absolute right-4 top-4 rounded bg-black/40 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/80">
          {badge}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative h-36 w-full overflow-hidden rounded-xl sm:h-48"
      style={{ backgroundColor: accent }}
    >
      <div className="absolute inset-0 opacity-90" style={{
        background: `linear-gradient(135deg, ${accent} 0%, rgba(10,10,10,0.85) 100%)`,
      }} />
      {/* faux window chrome */}
      <div className="absolute left-4 top-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
      </div>
      {/* faux dashboard widgets */}
      <div className="absolute inset-x-4 bottom-4 top-12 grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded-md bg-white/10" />
        <div className="rounded-md bg-white/15" />
        <div className="rounded-md bg-white/10" />
        <div className="rounded-md bg-white/15" />
        <div className="rounded-md bg-white/10" />
      </div>
      <span className="absolute right-4 top-4 text-[10px] font-semibold uppercase tracking-widest text-white/50">
        {badge}
      </span>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  // Lock body scroll and close on Escape while the modal is open.
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
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
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-h-[88vh] sm:rounded-2xl"
      >
        {/* Banner */}
        <div className="relative h-40 w-full overflow-hidden rounded-t-3xl bg-ink/5 sm:h-48 sm:rounded-t-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className={`h-full w-full ${
                project.imageFit === "contain"
                  ? "object-contain object-top"
                  : "object-cover object-center"
              }`}
            />
          ) : (
            <div
              className="h-full w-full"
              style={{
                background: `linear-gradient(135deg, ${project.accent} 0%, rgba(10,10,10,0.85) 100%)`,
              }}
            />
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
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
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <span className="inline-block rounded bg-paper px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink/50">
            {project.badge}
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/60">
            {project.description}
          </p>

          {project.features?.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
                What it does
              </h4>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/70"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-ink/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink/40">
              Tech stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/live inline-flex items-center gap-1.5 rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-paper"
              >
                Live Preview
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
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

        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                variants={card}
                initial="hidden"
                whileInView="show"
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                className="group flex cursor-pointer flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                <Thumbnail accent={project.accent} badge={project.badge} image={project.image} imageFit={project.imageFit} />

                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <span className="mt-1 translate-x-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-black/5 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-ink"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/live inline-flex items-center gap-1 text-sm text-ink/60 transition-colors hover:text-ink"
                    >
                      Live Preview
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
