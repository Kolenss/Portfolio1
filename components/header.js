import Image from "next/image";
import HeaderText from "./headerText";
import cLogo from "../assets/cLogo.png";

export default function Header({ setOpen }) {
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-[var(--line)] bg-[rgba(251,250,247,0.92)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <div className="flex items-center gap-3">
          <Image src={cLogo} alt="Chip Collins logo" className="h-9 w-9" />
          <a
            className="text-base font-semibold tracking-tight text-neutral-950 md:text-lg"
            href="#top"
          >
            Chip Collins
          </a>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <HeaderText title="About Me" target="about" />
          <HeaderText title="Skills" target="skills" />
          <HeaderText title="Project" target="projects" />
          <HeaderText title="Contact Me" target="contact" />
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-neutral-950 bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-transparent hover:text-neutral-950 md:inline-flex"
        >
          Resume
        </a>

        <button
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          onClick={setOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-neutral-950 md:hidden"
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-4 bg-current" />
            <span className="block h-0.5 w-4 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}
