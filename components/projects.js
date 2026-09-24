"use client";

import { motion } from "framer-motion";
import Projectcard from "@/components/projectcard";
import { projects } from "../assets/descriptions.js";

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5">
      <motion.div
        className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Projects
        </h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
          Practical work that connects interfaces, data, hardware, and user-facing
          software.
        </p>
      </motion.div>
      <div className="grid gap-6">
        {projects.map((proj) => (
          <Projectcard
            key={proj.slug}
            slug={proj.slug}
            title={proj.title}
            role={proj.role}
            images={proj.images}
            projectimg={proj.image}
            video={proj.video}
            projectdesc={proj.description}
            stack={proj.stack}
          />
        ))}
      </div>
    </div>
  );
}
