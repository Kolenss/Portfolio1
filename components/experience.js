const experiences = [
  {
    role: "AI Engineering Intern",
    company: "OneTouch Networks",
    description:
      "Developed intelligent AI voice agents using OpenAI Agents SDK and LLMs to deliver natural conversational experiences, and architected full-stack solutions connecting frontend interfaces, backend APIs, and AI services for seamless voice-based automation systems. Also delivered OneTouch CRM, a self-hosted, AI-first CRM built on Twenty, the open-source alternative to Salesforce, developed to replace the company's Salesforce subscription. It manages companies, contacts, and deal pipelines with contract files, notes, and automated 90/60/30-day renewal reminders, plus Microsoft 365 email, calendar, and single sign-on. At its center is Sarah, the OneTouch AI assistant, which answers questions from live CRM data and drafts renewal emails and proposals — with human approval required before anything reaches a client. On the CRM, built the role-based access control, in-app notifications and record sharing, team group chat with multiple assignees, and record search and duplication, along with the Docker and Railway deployment setup, using React, TypeScript, NestJS, GraphQL, PostgreSQL, and Redis.",
  },
  {
    role: "Frontend Development Intern",
    company: "Right Apps Inc.",
    description:
      "Worked on frontend UI development using Next.js, focusing on consistent light/dark themes, reusable components, user-friendly input fields, and clear dashboard navigation.",
  },
];

export default function Experience() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Experience
        </h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
          Internship work across AI engineering, frontend development, and full-stack
          product implementation.
        </p>
      </div>

      <div className="divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-white">
        {experiences.map((item) => (
          <article key={item.company} className="grid gap-4 p-6 md:grid-cols-[240px_1fr] md:p-8">
            <div>
              <p className="text-sm font-semibold text-neutral-950">{item.company}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.role}</p>
            </div>
            <p className="text-base leading-8 text-neutral-700">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
