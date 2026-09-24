import blunchqt1 from './b1.jpg'
import blunchqt2 from './b2.jpg'
import blunchqt3 from './b3.jpg'
import blunchqt4 from './b4.jpg'
import blunchqt5 from './b5.jpg'
import ctusportshub1 from './s1.jpg'
import ctusportshub2 from './s2.jpg'
import ctusportshub3 from './s3.jpg'
import ctusportshub4 from './s4.jpg'
import ctusportshub5 from './s5.jpg'


export const projects = [
    {
        slug: "aileen",
        title: "AILEEN – Outbound Caller Platform",
        role: "Client project · Built and owned",
        video: { src: "/videos/aileen.mp4", poster: "/videos/aileen.jpg", duration: 21 },
        description: "An AI outbound calling and lead generation platform for a US financial advisory firm. It sources small-business leads from Google Maps, classifies Department of Labor Form 5500 filings to find underperforming retirement plans, and connects advisors with prospects through a Twilio calling dashboard.",
        stack: ["Python", "Vite", "OpenAI Agents SDK", "Twilio"],
    },
    {
        slug: "onetouch-crm",
        title: "OneTouch CRM – AI-Powered Salesforce Replacement",
        role: "Client project · Collaborator",
        video: { src: "/videos/onetouch-crm.mp4", poster: "/videos/onetouch-crm.jpg", duration: 23 },
        description: "A self-hosted, AI-first CRM on Twenty, built to replace the company's Salesforce subscription. I built role-based access control, in-app notifications, record sharing, team chat, and record search and duplication, plus the Docker and Railway deployment.",
        stack: ["React", "TypeScript", "NestJS", "GraphQL", "PostgreSQL"],
    },
    {
        slug: "production-platform",
        title: "Production Web Platform – Solo Full-Stack + DevOps",
        role: "Client project · Solo build",
        video: { src: "/videos/production-platform.mp4", poster: "/videos/production-platform.jpg", duration: 23 },
        description: "A live platform I built and run on my own. It sits on a hardened DigitalOcean server behind Caddy and Cloudflare, pulls live data for 6 sports through a scheduled Python and Supabase pipeline, and gates paid tiers with Row-Level Security and signature-verified Stripe webhooks.",
        stack: ["Supabase", "PostgreSQL", "Python", "Stripe", "Cloudflare"],
    },
    {
        slug: "avocado",
        title: "Capstone Project – IoT Avocado Freshness Detection",
        role: "Capstone project",
        video: { src: "/videos/avocado.mp4", poster: "/videos/avocado.jpg", duration: 22 },
        description: "An IoT freshness detector for avocados. A sensor node streams carbon dioxide, gas, humidity, and temperature readings over Bluetooth to a React Native app, which turns them into a ripeness score and a verdict. I built the app end to end, from the interface to the Bluetooth link.",
        stack: ["React Native", "Bluetooth LE", "IoT sensors"],
    },
    {
        slug: "blunchqt",
        title: "BlunchQT",
        role: "Personal project",
        images: [blunchqt1, blunchqt2, blunchqt3, blunchqt4, blunchqt5],
        description: "BlunchQT is a study guide and rewarding system, designed to make my partner's studying and learning more engaging and fun. It features a variety of rewards and a shop where you can redeem points for different prizes. Points are earned by taking tests and scoring well, and by completing topics — turning every study session into a rewarding experience.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer"],
    },
    {
        slug: "ctu-sportshub",
        title: "CTU SportsHub",
        role: "Full-stack web app",
        images: [ctusportshub1, ctusportshub2, ctusportshub3, ctusportshub4, ctusportshub5],
        description: "CTU SportsHub is a sports management system built for CTU Danao to organize and track tournaments. It features tournament creation with single elimination brackets, live scoring, team management, and game scheduling. This project streamlined the school's sports event management and gave me experience building real-time data-driven applications.",
        stack: ["Next.js", "FastAPI", "Supabase"],
    },
]
