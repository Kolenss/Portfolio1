import Image from "next/image";
import formal from "../assets/formal.png";

export default function Aboutme() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr] md:items-start">
      <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-white p-3">
        <Image
          src={formal}
          alt="Formal portrait of Collins Maglasang"
          width={700}
          className="h-auto w-full rounded-xl object-cover"
        />
      </div>

      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          About Me
        </h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
          <p>
            Hi! I am Collins Maglasang, a Computer Engineering graduate who enjoys
            creating apps and exploring new technologies. Most of my projects and
            experience so far have focused on frontend development, and I enjoy building
            clean, interactive interfaces that are easy for people to use.
          </p>
          <p>
            Through my capstone project and internships, I gained experience connecting
            hardware with software - working with Bluetooth devices, sensors, and
            real-time data integration between applications and embedded systems. I also
            completed internships in web development and AI engineering, where I worked
            with modern development tools and software technologies.
          </p>
          <p>
            My goal is to continue growing as a software developer and AI engineer, build
            projects I am proud of, and create applications that are both functional and
            user-friendly.
          </p>
        </div>
      </div>
    </div>
  );
}
