import React from 'react'
import { Spotlight } from './Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/* spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* grid section */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
        absolute top-0 left-0 z-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
           dark:bg-black-100
           bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Dynamic Web Magic with Next.js */}
      <div className="flex justify-center relative mt-8 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
        </div>
      </div>

      {/* text Generate effect */}
      <TextGenerateEffect
        className="text-center text-[50px] md:text-5xl lg:text-10xl z-10"
        words="Innovative Front-End Developer with a Passion for Creating Stunning, User-Centric Web Experiences"
      />

      <p
        className="text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl"
         
      >
        Hi, I&apos;m Esraa, a Next.js Developer based in Egypt
      </p>

      <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="center"
            />
      </a>
    </div>
  );
};

export default Hero;
