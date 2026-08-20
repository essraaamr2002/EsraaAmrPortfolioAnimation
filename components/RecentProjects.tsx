"use client";

import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-14">
        {projects.map((item, i) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b0e28] hover:border-purple/60 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div
              className="relative w-full aspect-video overflow-hidden"
              style={{ backgroundColor: "#13162D" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${
                  item.imgFit === "contain" ? "object-contain p-8" : "object-cover"
                }`}
              />
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h3 className="font-bold text-lg lg:text-xl text-white">
                {item.title}
              </h3>
              <p
                className="text-sm mt-2 flex-1"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index}px)` }}
                    >
                      <img src={icon} alt="" className="p-1.5" />
                    </div>
                  ))}
                </div>

                <span className="flex items-center text-sm text-purple">
                  Check Live Site
                  <FaLocationArrow className="ms-2 text-xs" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
