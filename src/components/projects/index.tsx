import React from "react";
import ButtonComponent from "../button";
import Link from "next/link";

const projectsList = [
  {
    name: "Dr.Agenda",
    image: "/dragenda.png",
    link: "https://github.com/AnthonyH30/dr-agenda",
    technologies: [
      { name: "React", image: "/reactjs.png" },
      { name: "Next.js", image: "/nextjs.png" },
      { name: "TypeScript", image: "/typescript.png" },
    ],
  },
  {
    name: "CineTicket",
    image: "/cineticket.png",
    link: "https://github.com/AnthonyH30/CineTicket",
    technologies: [
      { name: "React", image: "/reactjs.png" },
      { name: "Next.js", image: "/nextjs.png" },
      { name: "TypeScript", image: "/typescript.png" },
    ],
  },
  {
    name: "LazerFlix",
    image: "/lazerflix.png",
    link: "https://github.com/AnthonyH30/LazerFlix",
    technologies: [
      { name: "React", image: "/reactjs.png" },
      { name: "Next.js", image: "/nextjs.png" },
      { name: "TypeScript", image: "/typescript.png" },
    ],
  },
];

export default function Projects() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 pt-8 mb-32 flex flex-col gap-14 items-center bg-[#16181d]">
      <div className="flex flex-col gap-1 items-center text-xl text-center">
        <h3 className="text-green-500">Meu trabalho</h3>
        <h2 className="text-4xl font-bold text-white">Projetos em Destaque</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectsList.map((project) => (
          <Link
            href={project.link}
            target="_blank"
            key={project.name}
            className="relative group hover:cursor-pointer hover:scale-105 transition-transform duration-300 border-b-4 border-green-500"
          >
            <img src={project.image} className="w-full h-full object-cover" />
            <div className="absolute top-0 right-0 backdrop-brightness-40 transition-all duration-300 group-hover:hidden flex w-full h-full flex-col items-center justify-center">
              <h3 className="font-bold text-white">{project.name}</h3>
              <ul className="flex gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <li key={tech.name}>
                    <img src={tech.image} className="w-6 h-6" alt={tech.name} />
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      <ButtonComponent
        href="https://github.com/AnthonyH30"
        className="bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300"
      >
        Ver todos os Projetos
      </ButtonComponent>
    </div>
  );
}
