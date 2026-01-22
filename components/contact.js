'use client'
import { useState } from "react";
import ContactCard from '../components/contactcard.js';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/Facebook.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';

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
    } 
    catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center text-center gap-5">
      <a className="font-extrabold text-[35px]">Contact Me</a>
      <div className="font-sans w-full flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-5 justify-center items-center text-center w-full"
        >
          <input placeholder="First Name" name="fname" value={form.fname} onChange={handleChange} className="border rounded-[5px] p-[5px] w-9/10 min-h-14" />
          <input placeholder="Email" name="email" value={form.email} onChange={handleChange} className="border rounded-[5px] p-[5px] w-9/10 min-h-14"/>
          <input placeholder="Your Website(if exists)" name="website" value={form.website} onChange={handleChange} className="border rounded-[5px] p-[5px] w-9/10 min-h-14"/>
          <textarea
            placeholder="How can I help?"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="p-[5px] border rounded-[5px] w-9/10 min-h-[140px]"
          />
          <button type="submit" className="bg-black text-white p-[10px] rounded-[5px] cursor-pointer">
            Get in Touch
          </button>
        </form>
        {status && <p className="mt-2">{status}</p>}
        <div className="md:flex md:flex-row w-9/10 md:w-9/10 mt-5">
          <div className="flex flex-row gap-[25px] w-full justify-start p-[20px]">
            <ContactCard contactimg={linkedin} contactlink="https://www.linkedin.com/in/maglasang-chip-collins-100466369/" />
            <ContactCard contactimg={facebook} contactlink="https://www.facebook.com/Chip.Collins.M/" />
            <ContactCard contactimg={instagram} contactlink="https://www.instagram.com/chip.maglasang/" />
            <ContactCard contactimg={github} contactlink="https://github.com/Kolenss" />
          </div>
        </div>
      </div>
    </div>
  );
}
