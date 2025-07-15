import Image from "next/image";
import Link from "next/link";
import React from "react";

const contactInfo = [
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/anthony-harisson-421b50231/",
  },
  {
    name: "Github",
    icon: "github.svg",
    link: "https://github.com/AnthonyH30",
  },
  {
    name: "Email",
    icon: "email.svg",
    link: "mailto:anthonyharisson30@gmail.com",
  },
];

export default function ContactMe() {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-center h-screen max-h-[800px] bg-[url('/footer-bg.png')] px-2.5 bg-no-repeat bg-center bg-cover`}
    >
      <p className="text-green-500">Contato</p>
      <h2 className="text-center text-3xl font-bold text-gray-200">
        Gostou do meu trabalho?
      </h2>
      <p className="text-gray-400 text-center">
        Entre em contato ou acompanhe as minhas redes sociais!
      </p>
      <div className="flex flex-col mt-12 gap-4">
        {contactInfo.map((contact) => (
          <Link
            href={contact.link}
            target="_blank"
            key={contact.name}
            className="flex w-[320px] items-center justify-between bg-[#292C34] h-16 rounded-md px-6"
          >
            <div className="flex gap-3">
              <Image
                src={contact.icon}
                width={28}
                height={28}
                alt={`${contact.name} Logo`}
              />
              <h3 className="text-gray-200">{contact.name}</h3>
            </div>
            <Image
              src={"/arrow.svg"}
              width={15}
              height={15}
              alt="seta que sinaliza saída da página ao clicar"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
