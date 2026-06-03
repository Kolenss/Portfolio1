import Link from "next/link";

export default function Ending() {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-white p-6 md:p-8">
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
        Let&apos;s Talk For Something Special
      </h2>
      <p className="mt-5 text-base leading-8 text-neutral-700">
        I seek to push the limits of creativity to create high-engaging, user-friendly,
        and memorable interactive experiences.
      </p>
      <div className="mt-8 grid gap-2 text-base font-semibold text-neutral-950">
        <Link className="transition hover:text-[var(--muted)]" href="mailto:collinsgt12374@gmail.com">
          collinsgt12374@gmail.com
        </Link>
        <Link className="transition hover:text-[var(--muted)]" href="tel:+639398975547">
          09398975547
        </Link>
      </div>
    </div>
  );
}
