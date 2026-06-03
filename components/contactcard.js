import Image from "next/image";
import Link from "next/link";

export default function ContactCard({ contactimg, contactlink, label = "Social profile" }) {
  return (
    <Link
      href={contactlink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white p-2.5 transition hover:-translate-y-0.5 hover:border-neutral-950"
    >
      <Image src={contactimg} alt="" aria-hidden="true" />
    </Link>
  );
}
