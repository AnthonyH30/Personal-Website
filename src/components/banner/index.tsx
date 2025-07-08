import React from "react";

import Anthony from "./assets/sticker.png";
import Image from "next/image";
import ButtonComponent from "../button";

export default function Banner() {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center h-screen bg-[url('/bg.png')] px-2.5 bg-no-repeat bg-center bg-cover`}
    >
      <Image
        src={Anthony.src}
        alt={"Emoji de Anthony sorrindo"}
        width={200}
        height={200}
      />
      <h2 className="text-center text-gray-400">
        Hello World! Meu nome é{" "}
        <span className="text-green-500">Anthony Harisson</span> e sou <br />{" "}
      </h2>
      <h1 className="text-5xl text-gray-200 font-bold text-center">
        Desenvolvedor Front End
      </h1>
      <div className="flex gap-4 mt-2">
        <ButtonComponent
          href="#know-more"
          className="bg-gray-800 hover:bg-gray-700"
        >
          Conhecer mais
        </ButtonComponent>
        <ButtonComponent
          href="/blog"
          className="bg-white text-gray-900 hover:bg-gray-300"
        >
          Visitar Blog
        </ButtonComponent>
      </div>
    </div>
  );
}
