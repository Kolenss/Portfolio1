import Image from "next/image";
import cLogo from "../assets/cLogo.png";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-neutral-950">
          <Image src={cLogo} alt="Chip Collins logo" width={36} height={36} />
          <span className="font-semibold">Chip Collins</span>
        </div>
        <p>Developed by Collins Maglasang</p>
      </div>
    </footer>
  );
}
