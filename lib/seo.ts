export const siteConfig = {
  name: "Chip Collins Maglasang",
  title: "Chip Collins Maglasang | Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Chip Collins Maglasang, a full-stack developer and AI engineer from the Philippines building practical web, AI-enabled, and hardware-connected software.",
  url: getSiteUrl(),
  locale: "en_PH",
  keywords: [
    "Chip Collins Maglasang",
    "Collins Maglasang",
    "full-stack developer",
    "AI engineer",
    "frontend developer",
    "Next.js developer",
    "React developer",
    "software developer Philippines",
    "Computer Engineering portfolio",
  ],
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/maglasang-chip-collins-100466369/",
    github: "https://github.com/Kolenss",
    facebook: "https://www.facebook.com/Chip.Collins.M/",
    instagram: "https://www.instagram.com/chip.maglasang/",
  },
};

function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

  return (siteUrl || vercelUrl || "http://localhost:3000").replace(/\/$/, "");
}
