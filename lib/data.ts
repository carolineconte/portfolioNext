import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PASSWORD from '@/public/PASSWORD.png'
import NEWS from '@/public/NEWS.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Password generator",
    description:
      "Progetto realizzato solo con Javascript Vanilla per migliorare e allenare la mia logica.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl:PASSWORD,
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
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: PASSWORD,
    repository: 'https://github.com/carolineconte/passwordGenerator',
    demo: 'https://password-generator-nine-inky.vercel.app/',

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