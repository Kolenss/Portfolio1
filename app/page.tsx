"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants, useReducedMotion } from "framer-motion";
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

const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const sectionViewport = { once: true, amount: 0.18 };

export default function Home() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const revealInitial = reducedMotion ? false : "hidden";
  const revealWhileInView = reducedMotion ? undefined : "visible";
  const hoverLift = reducedMotion ? undefined : { y: -3, scale: 1.02 };
  const tapPress = reducedMotion ? undefined : { scale: 0.98 };

  return (
    <div id="top" className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SideBar open={open} handleClose={() => setOpen(false)} />
      <Header setOpen={() => setOpen(true)} />

      <main className="pt-24 md:pt-32">
        <motion.section
          className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl gap-10 px-5 pb-20 md:grid-cols-[1.05fr_0.95fr] md:items-center"
          initial={revealInitial}
          animate={reducedMotion ? undefined : "visible"}
          variants={heroContainer}
        >
          <motion.div variants={heroContainer}>
            <motion.div variants={fadeInUp}>
              <Info />
            </motion.div>
            <motion.div className="mt-7" variants={fadeInUp}>
              <Description />
            </motion.div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.a
                href="#projects"
                className="inline-flex justify-center rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-neutral-950"
                variants={fadeInUp}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                View Projects
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-950"
                variants={fadeInUp}
                whileHover={hoverLift}
                whileTap={tapPress}
              >
                Download Resume
              </motion.a>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ label, icon, link }) => (
                <motion.div key={label} variants={fadeInUp} whileHover={hoverLift} whileTap={tapPress}>
                  <ContactCard label={label} contactimg={icon} contactlink={link} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="mx-auto w-full max-w-md md:ml-auto" variants={fadeInUp}>
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, -10, 0], rotate: [0, 0.4, 0] }}
              className="rounded-[1.5rem] border border-[var(--line)] bg-white p-3 shadow-sm"
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 6, ease: "easeInOut" as const, repeat: Infinity }
              }
            >
              <Image
                src={barong}
                alt="Portrait of Collins Maglasang"
                width={520}
                priority
                className="h-auto w-full rounded-[1.1rem] object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          id="skills"
          className="py-16 md:py-24"
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={sectionViewport}
          variants={sectionReveal}
        >
          <Languages />
        </motion.section>

        <motion.section
          className="py-16 md:py-24"
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={sectionViewport}
          variants={sectionReveal}
        >
          <Experience />
        </motion.section>

        <motion.section
          id="about"
          className="py-16 md:py-24"
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={sectionViewport}
          variants={sectionReveal}
        >
          <Aboutme />
        </motion.section>

        <motion.section
          id="projects"
          className="py-16 md:py-24"
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={sectionViewport}
          variants={sectionReveal}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contact"
          className="py-16 md:py-24"
          initial={revealInitial}
          whileInView={revealWhileInView}
          viewport={sectionViewport}
          variants={sectionReveal}
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Contact />
            <Ending />
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
