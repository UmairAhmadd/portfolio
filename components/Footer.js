import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/umair-ahmad-a87753274",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/UmairAhmadd",
    Icon: GitHubIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left: name, bio, socials */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">Umair Ahmad</h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              A passionate Full Stack Developer building real-world web and
              mobile applications. Let&apos;s build something amazing together.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle: quick links */}
          <div className="md:px-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: get in touch */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:umairahmad3921@gmail.com"
                  className="group flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:text-white">
                    <MailIcon className="h-4 w-4" />
                  </span>
                  umairahmad3921@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70">
                  <MapPinIcon className="h-4 w-4" />
                </span>
                Islamabad, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/40">
            © 2026 Umair Ahmad · All rights reserved
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Back to Top
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
