import Image from "next/image";

export default function Languagecard({ language, languageimg }) {
  return (
    <div className="flex min-h-24 items-center gap-4 rounded-xl border border-[var(--line)] bg-white p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background)] p-2">
        <Image src={languageimg} alt="" aria-hidden="true" width={28} height={28} />
      </div>
      <span className="text-sm font-semibold text-neutral-900">{language}</span>
    </div>
  );
}
