"use client";
import React from "react";
import Lottie from "lottie-react";
import workingAnimation from "./assets/working.json";
import ButtonComponent from "@/components/button";

export default function BlogMainPage() {
  return (
    <div className="bg-[#16181d] flex flex-col items-center justify-center h-screen">
      <p className="text-green-500">Estará pronto em breve...</p>
      <h2 className="text-4xl font-bold text-gray-200 text-center">
        Ainda estou trabalhando nisso!
      </h2>
      <Lottie
        animationData={workingAnimation}
        className="w-full max-w-[700px]"
      />
      <ButtonComponent
        href="/"
        className="bg-gray-100 hover:bg-gray-300 transition-all duration-300"
      >
        Voltar ao portifólio
      </ButtonComponent>
    </div>
  );
}
