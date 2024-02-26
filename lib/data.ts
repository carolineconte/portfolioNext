import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PASSWORD from '@/public/PASSWORD.png'
import NEWS from '@/public/NEWS.png'
import FOODORDERING from '@/public/food-ordering.png'
import DRAGANDDROP from '@/public/DRAGANDDROP.png'
import jquery from '@/public/jquery.png'

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
    title: "Modulo newsletter",
    description:
      "Progetto per apprendere il processo di convalida e styling dei moduli con Tailwind",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: NEWS,
    repository: 'https://github.com/carolineconte/newsletter-form',
    demo: 'https://newsletter-form-phi.vercel.app/',

  },
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
    title: "To Do list jQuery",
    description:
      "",
    tags: ["HTML", "CSS", "Javascript",'jQuery'],
    imageUrl: jquery,
    repository: 'https://github.com/carolineconte/todo-jquery',
    demo: 'https://carolineconte-todojquery-nu.vercel.app/',
  },
  {
    title: "To Do List",
    description:
      "Progetto di una lista delle attività collegata a MongoDB, realizzata in Next.js con opzioni per modificare, riorganizzare e cancellare gli elementi della lista.",
    tags: ["React", "TypeScript", "Tailwind","Mongoose", "MongoDB"],
    imageUrl: DRAGANDDROP,
    repository: 'https://github.com/carolineconte/toDo-DragandDrop',
    demo: 'https://to-do-dragand-drop.vercel.app/',

  },
  {
    title: "​Sito per una pizzeria",
    description:
      "Possibilità di accedere tramite autenticazione con Google OAuth, è stato integrato il servizio di pagamento Stripe. Include anche un'area amministrativa, dove gestire ordini, menù e altre",
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
  "jQuery",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Tailwind",
  "SASS",
  "Git",
  "GitHub",
  "Figma",
] as const;