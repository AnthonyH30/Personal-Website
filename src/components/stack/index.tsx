"use client";
import React from "react";
import Lottie from "lottie-react";
import techsAnimation from "./assets/techs.json";

const techs = [
  {
    name: "HTML",
    value: "90%",
  },
  {
    name: "CSS",
    value: "88%",
  },
  {
    name: "JavaScript",
    value: "76%",
  },
  {
    name: "Typescript",
    value: "70%",
  },
  {
    name: "Sass",
    value: "88%",
  },
  {
    name: "Tailwind",
    value: "70%",
  },
  {
    name: "Styled-Components",
    value: "77%",
  },
  {
    name: "ReactJs",
    value: "80%",
  },
  {
    name: "NextJs",
    value: "70%",
  },
  {
    name: "Jest",
    value: "65%",
  },
  {
    name: "Storybook",
    value: "50%",
  },
  {
    name: "Jenkins",
    value: "60%",
  },
];

export default function Stack() {
  return (
    <section
      id="know-more"
      className="bg-[#0D0E11] w-full flex flex-col items-center gap-10 px-4 py-10"
    >
      <Lottie animationData={techsAnimation} className="w-[320px]" />
      <h2 className="text-4xl font-bold text-gray-200 text-center">
        Tecnologias e ferramentas que domino
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techs.map((tech) => (
          <div key={tech.name} className="min-w-[320px]">
            <h3 className="text-gray-200 font-bold">{tech.name}</h3>
            <div className="flex items-center gap-4">
              <p className="text-gray-200">{tech.value}</p>
              <div className="w-full bg-gray-700 h-2 rounded-sm">
                <div
                  style={{ width: tech.value }}
                  className="h-2 bg-green-500 rounded-sm"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
