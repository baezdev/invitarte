'use client'

import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import about from "@/data/about.json";

enum AboutSections {
  about = "Nosotros",
  mission = "Misión",
  vision = "Visión",
}

export const AboutSlider = () => {
  const [activeSection, setActiveSection] = useState(AboutSections.about);

  const selectedSection = about.find(({ title }) => title === activeSection);

  return (
    <>
      <div className="flex justify-center gap-5 md:justify-start">
        {about.map(({ title, id }) => (
          <button
            key={id}
            className={twMerge(`border-4 border-gray-200 leading-none inline-block font-semibold text-black px-4 py-3 rounded-3xl transition ease-in-out hover:scale-110 duration-300 capitalize cursor-pointer`, `${activeSection === title && "border-primary"}`)}
            onClick={() =>
              setActiveSection(AboutSections[id as keyof typeof AboutSections])
            }
          >
            {title}
          </button>
        ))}
      </div>
      <AboutContent selectedSection={selectedSection} />
    </>
  );
};

interface AboutContent {
  id: string
  title: string
  desc: string
}

interface AboutContentProps {
  selectedSection: AboutContent | undefined
}

export const AboutContent: React.FC<AboutContentProps> = ({ selectedSection }) => {
  return (
    <article className="flex flex-col items-center gap-6 md:gap-14 md:flex-row">
      {/* Todo: Hacer que tenga un delay al mostrar la seccion */}
      <div className="mt-10 md:mt-0">
        <h4 className="text-center mb-6 font-semibold text-xl md:text-3xl pb-2 relative w-fit before:content-[''] before:h-1 before:w-14 before:bg-secon before:absolute before:bottom-0 before:left-0 before:rounded mx-auto">
          {selectedSection?.title}
        </h4>
        <p className="text-base text-center md:text-lg">
          {selectedSection?.desc}
        </p>
      </div>
      <Image
        src={`/images/${selectedSection?.id}.svg`}
        alt="sobre nosotros"
        width={100}
        height={100}
        className="w-60 md:w-96"
      />
    </article>
  )
}