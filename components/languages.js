import c from "../assets/c.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import cp from "../assets/c++.png";
import nextjs from "../assets/next-js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import ts from "../assets/typescript.png";
import Languagecard from "@/components/languageCard";

const skills = [
  ["HTML", html],
  ["CSS", css],
  ["JavaScript", js],
  ["C", c],
  ["C++", cp],
  ["Next.js", nextjs],
  ["Tailwind CSS", tailwind],
  ["React", react],
  ["TypeScript", ts],
];

export default function Languages() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Skills
        </h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
          Tools and languages I use across frontend, web application, and engineering
          projects.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(([language, image]) => (
          <Languagecard key={language} language={language} languageimg={image} />
        ))}
      </div>
    </div>
  );
}
