
import PASSWORD from '@/public/PASSWORD.png'
import NEWS from '@/public/NEWS.png'
import FOODORDERING from '@/public/food-ordering.png'
import DRAGANDDROP from '@/public/DRAGANDDROP.png'
import jquery from '@/public/jquery.png'
import devbooks from '@/public/devbooks.png'

export const projectsData = [

  {
    description: 0,
    title: "Newsletter Module",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: NEWS,
    repository: 'https://github.com/carolineconte/newsletter-form',
    demo: 'https://newsletter-form-phi.vercel.app/',

  },
  {
    description: 1,
    title: "Password Generator",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: PASSWORD,
    repository: 'https://github.com/carolineconte/passwordGenerator',
    demo: 'https://password-generator-nine-inky.vercel.app/',
  },
  {
    description: 2,
    title: "To Do jQuery",
    tags: ["HTML", "CSS", "Javascript",'jQuery'],
    imageUrl: jquery,
    repository: 'https://github.com/carolineconte/todo-jquery',
    demo: 'https://carolineconte-todojquery-nu.vercel.app/',
  },
  {
    description: 3,
    title: "To Do List with Drag and Drop",
    tags: ["React", "TypeScript", "Tailwind","Mongoose", "MongoDB"],
    imageUrl: DRAGANDDROP,
    repository: 'https://github.com/carolineconte/toDo-DragandDrop',
    demo: 'https://to-do-dragand-drop.vercel.app/',

  },
  {
    description: 4,
    title: "Ordering Platform for an Italian Pizzeria",
    tags: ["React", "Next.js", "Tailwind", "MongoDB", "Node", "Mongoose"],
    imageUrl: FOODORDERING,
    repository: 'https://github.com/carolineconte/food-ordering',
    demo: 'https://carolinecontedev-foodordering.vercel.app/',

  },  {
    description: 5,
    title: "DevBooks",
    tags: ["React", "Next.js", "SASS", "AXIOS", "Node", "Express","Context"],
    imageUrl: devbooks,
    repository: 'https://github.com/carolineconte/devBooks',
    demo: 'https://devbooks.onrender.com/',

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
