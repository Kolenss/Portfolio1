"use client";

import { useState } from "react";
import ContactCard from "../components/contactcard.js";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

const socialLinks = [
  ["LinkedIn", linkedin, "https://www.linkedin.com/in/maglasang-chip-collins-100466369/"],
  ["Facebook", facebook, "https://www.facebook.com/Chip.Collins.M/"],
  ["Instagram", instagram, "https://www.instagram.com/chip.maglasang/"],
  ["GitHub", github, "https://github.com/Kolenss"],
];

export default function Contact() {
  const [form, setForm] = useState({
    fname: "",
    email: "",
    website: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ fname: "", email: "", website: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
        Contact Me
      </h2>
      <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)]">
        Send a short message and I will get back to you when I can.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-neutral-800" htmlFor="fname">
          First Name
          <input
            id="fname"
            name="fname"
            value={form.fname}
            onChange={handleChange}
            className="min-h-12 rounded-xl border border-[var(--line)] bg-white px-4 text-base font-normal text-neutral-950 transition focus:border-neutral-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800" htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="min-h-12 rounded-xl border border-[var(--line)] bg-white px-4 text-base font-normal text-neutral-950 transition focus:border-neutral-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800" htmlFor="website">
          Website
          <input
            id="website"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="min-h-12 rounded-xl border border-[var(--line)] bg-white px-4 text-base font-normal text-neutral-950 transition focus:border-neutral-950"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-neutral-800" htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="min-h-36 rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-base font-normal text-neutral-950 transition focus:border-neutral-950"
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-full border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-transparent hover:text-neutral-950 sm:w-auto"
          >
            Get in Touch
          </button>
          {status && <p className="text-sm text-[var(--muted)]">{status}</p>}
        </div>
      </form>

      <div className="mt-8 flex gap-3">
        {socialLinks.map(([label, icon, link]) => (
          <ContactCard key={label} label={label} contactimg={icon} contactlink={link} />
        ))}
      </div>
    </div>
  );
}
