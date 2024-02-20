import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PASSWORD from '@/public/PASSWORD.png'
import NEWS from '@/public/NEWS.png'
import FOODORDERING from '@/public/food-ordering.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Profilo",
    hash: "#about",
  },
  {
    name: "Progetti",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contattami",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Password generator",
    description:
      "Progetto realizzato solo con Javascript Vanilla per migliorare e allenare la mia logica.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: PASSWORD,
    repository: 'https://github.com/carolineconte/passwordGenerator',
    demo: 'https://password-generator-nine-inky.vercel.app/',
  },
  {
    title: "Modulo newsletter",
    description:
      "Progetto per apprendere il processo di convalida e styling dei moduli con Tailwind",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: NEWS,
    repository: 'https://github.com/carolineconte/newsletter-form',
    demo: 'https://newsletter-form-phi.vercel.app/',

  },
  {
    title: "​Sito per una pizzeria",
    description:
      "un sito per ordini online, con la possibilità di accedere tramite autenticazione con Google OAuth, è stato integrato il servizio di pagamento Stripe. Include anche un'area amministrativa, dove gestire ordini, menù e altre",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Node", "Mongoose"],
    imageUrl: FOODORDERING,
    repository: 'https://github.com/carolineconte/food-ordering',
    demo: 'https://carolinecontedev-foodordering.vercel.app/',

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
] as const;