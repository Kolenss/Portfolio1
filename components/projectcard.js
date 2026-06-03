import Image from "next/image";

export default function Projectcard({ title, projectimg, projectdesc }) {
  return (
    <article className="grid overflow-hidden rounded-2xl border border-[var(--line)] bg-white md:grid-cols-[0.9fr_1.1fr]">
      <div className="bg-[var(--background)] p-4">
        <Image
          src={projectimg}
          alt={`${title} preview`}
          width={640}
          height={420}
          className="h-auto w-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
          Featured Project
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-950 md:text-3xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-8 text-neutral-700">{projectdesc}</p>
      </div>
    </article>
  );
}
