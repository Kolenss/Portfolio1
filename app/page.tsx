"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Info from "@/components/info";
import Description from "@/components/description";
import Languages from "@/components/languages";
import Experience from "@/components/experience.js";
import Aboutme from "@/components/aboutme.js";
import Projects from "@/components/projects.js";
import Contact from "@/components/contact.js";
import Ending from "@/components/ending.js";
import Footer from "@/components/footer.js";
import ContactCard from "@/components/contactcard";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import SideBar from "../components/sidebar.js";
import barong from "../assets/barong.png";

const socialLinks = [
  {
    label: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/maglasang-chip-collins-100466369/",
  },
  { label: "Facebook", icon: facebook, link: "https://www.facebook.com/Chip.Collins.M/" },
  { label: "Instagram", icon: instagram, link: "https://www.instagram.com/chip.maglasang/" },
  { label: "GitHub", icon: github, link: "https://github.com/Kolenss" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SideBar open={open} handleClose={() => setOpen(false)} />
      <Header setOpen={() => setOpen(true)} />

      <main className="pt-24 md:pt-32">
        <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl gap-10 px-5 pb-20 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <Info />
            <div className="mt-7">
              <Description />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex justify-center rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-neutral-950"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ label, icon, link }) => (
                <ContactCard key={label} label={label} contactimg={icon} contactlink={link} />
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md md:ml-auto">
            <div className="rounded-[1.5rem] border border-[var(--line)] bg-white p-3 shadow-sm">
              <Image
                src={barong}
                alt="Portrait of Collins Maglasang"
                width={520}
                priority
                className="h-auto w-full rounded-[1.1rem] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 md:py-24">
          <Languages />
        </section>

        <section className="py-16 md:py-24">
          <Experience />
        </section>

        <section id="about" className="py-16 md:py-24">
          <Aboutme />
        </section>

        <section id="projects" className="py-16 md:py-24">
          <Projects />
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Contact />
            <Ending />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
