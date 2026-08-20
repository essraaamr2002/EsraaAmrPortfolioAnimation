"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";

import { education } from "@/data";

const Education = () => {
  return (
    <div className="py-20 w-full" id="education">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading"
      >
        My <span className="text-purple">Education</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/[0.1] bg-[#0b0e28] p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-purple/60 transition-colors"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#10132E] text-purple text-2xl">
          <FaGraduationCap />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">{education.school}</h3>
          <p className="text-sm text-white-200 mt-1">{education.degree}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-white-200/80">
            <span>{education.period}</span>
            <span>•</span>
            <span>{education.location}</span>
            <span>•</span>
            <span className="text-purple">Grade: {education.grade}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
