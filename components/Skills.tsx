"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiRecoil,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiPowerbi,
  SiJira,
  SiTrello,
  SiWebpack,
  SiBabel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaCube } from "react-icons/fa6";

import { skillGroups } from "@/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  SASS: SiSass,
  TailwindCSS: SiTailwindcss,
  Bootstrap: SiBootstrap,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Redux: SiRedux,
  "Redux Toolkit": SiRedux,
  Recoil: SiRecoil,
  Zustand: FaCube,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "RESTful APIs": TbApi,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  Docker: SiDocker,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Postman: SiPostman,
  "Power BI": SiPowerbi,
  Jira: SiJira,
  Trello: SiTrello,
  Webpack: SiWebpack,
  Babel: SiBabel,
};

const SkillPill = ({ name }: { name: string }) => {
  const Icon = iconMap[name] ?? FaCube;
  return (
    <li className="group/pill flex-shrink-0 list-none">
      <div className="flex items-center gap-2.5 rounded-full border border-white/[0.1] bg-[#0b0e28] px-5 py-2.5 transition-all duration-300 group-hover/pill:border-purple/60 group-hover/pill:shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)]">
        <Icon className="text-lg text-[#CBACF9] transition-transform duration-300 group-hover/pill:scale-125 group-hover/pill:rotate-6" />
        <span className="whitespace-nowrap text-sm font-medium text-white-100">
          {name}
        </span>
      </div>
    </li>
  );
};

const MarqueeRow = ({
  items,
  direction,
  speed,
}: {
  items: string[];
  direction: "left" | "right";
  speed: "fast" | "normal" | "slow";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        scrollerRef.current?.appendChild(item.cloneNode(true));
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "22s" : speed === "normal" ? "34s" : "48s"
      );
      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="scroller relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2",
          start && "animate-scroll",
          "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((name, idx) => (
          <SkillPill key={`${name}-${idx}`} name={name} />
        ))}
      </ul>
    </div>
  );
};

const speeds: Array<"fast" | "normal" | "slow"> = ["normal", "slow", "fast"];

const Skills = () => {
  return (
    <div className="py-20 w-full" id="skills">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading"
      >
        My <span className="text-purple">Tech Arsenal</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-white-200 mt-4 max-w-2xl mx-auto"
      >
        A living, breathing stack — the languages, frameworks, and tools I
        reach for every day.
      </motion.p>

      <div className="mt-12 flex flex-col gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white-200 text-center">
              {group.title}
            </p>
            <MarqueeRow
              items={group.row}
              direction={i % 2 === 0 ? "left" : "right"}
              speed={speeds[i % speeds.length]}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
