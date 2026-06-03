"use client";

import { useEffect } from "react";
import Image from "next/image";
import HeaderText from "./headerText";
import CLogo from "../assets/cLogo.png";

export default function SideBar({ handleClose, open }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="Close navigation menu"
        className={`fixed inset-0 z-40 bg-neutral-950/25 transition md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClose}
        tabIndex={open ? 0 : -1}
      />

      <aside
        aria-hidden={!open}
        aria-modal="true"
        role="dialog"
        inert={!open ? true : undefined}
        className={`fixed left-0 top-0 z-50 flex h-dvh w-[82%] max-w-sm flex-col border-r border-[var(--line)] bg-[var(--surface)] px-6 py-5 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src={CLogo} alt="Chip Collins logo" width={42} height={42} />
            <span className="font-semibold tracking-tight text-neutral-950">Chip Collins</span>
          </div>
          <button
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-neutral-950"
            onClick={handleClose}
          >
            <span aria-hidden="true">X</span>
          </button>
        </div>

        <nav className="mt-14 flex flex-col gap-7 text-lg" aria-label="Mobile navigation">
          <HeaderText title="About Me" target="about" onClick={handleClose} />
          <HeaderText title="Skills" target="skills" onClick={handleClose} />
          <HeaderText title="Project" target="projects" onClick={handleClose} />
          <HeaderText title="Contact Me" target="contact" onClick={handleClose} />
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-full justify-center rounded-full border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-semibold text-white"
        >
          Resume
        </a>
      </aside>
    </>
  );
}
