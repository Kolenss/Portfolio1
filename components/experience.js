const experiences = [
  {
    role: "AI Developer / Full-Stack Developer",
    company: "OneTouch Networks",
    period: "February - April 2026",
    description:
      "Built and owned AILEEN, an AI-powered outbound calling and lead generation platform for a US financial advisory firm, using the OpenAI Agents SDK and Twilio for automated voice conversations, with Google Maps lead sourcing and DOL Form 5500 classification. Collaborated on OneTouch CRM, a self-hosted Salesforce replacement built on Twenty: implemented role-based access control, in-app notifications, multi-assignee team chat, and record sharing, with Docker and Railway deployment (React, TypeScript, NestJS, GraphQL, PostgreSQL, Redis). Built RAG pipelines with LangChain and vector embeddings during AI training.",
  },
  {
    role: "Frontend Developer",
    company: "Right Apps Inc.",
    period: "June - August 2025",
    description:
      "Built reusable Next.js components and responsive layouts, translating UI/UX designs into functional frontend interfaces in collaboration with design and dev teams. Focused on consistent light/dark theming and clear dashboard navigation.",
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
              {item.period && <p className="mt-1 text-xs text-[var(--muted)]">{item.period}</p>}
            </div>
            <p className="text-base leading-8 text-neutral-700">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
