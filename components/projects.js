import Projectcard from "@/components/projectcard";
import { projects } from "../assets/descriptions.js";

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Projects
        </h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
          Practical work that connects interfaces, data, hardware, and user-facing
          software.
        </p>
      </div>
      <div className="grid gap-5">
        {projects.map((proj) => (
          <Projectcard
            key={proj.title}
            title={proj.title}
            images={proj.images}
            projectimg={proj.image}
            projectdesc={proj.description}
          />
        ))}
      </div>
    </div>
  );
}
