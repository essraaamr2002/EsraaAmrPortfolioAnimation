"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCircleCheck } from "react-icons/fa6";

import { certifications } from "@/data";

const Certifications = () => {
  return (
    <div className="py-20 w-full" id="certifications">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="heading"
      >
        Certifications & <span className="text-purple">Credentials</span>
      </motion.h1>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b0e28] p-6 flex flex-col gap-3 hover:border-purple/60 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#10132E] text-purple text-xl group-hover:scale-110 transition-transform">
                <FaAward />
              </div>
              {(cert.verifyUrl || cert.verified) && (
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <FaCircleCheck /> Verified
                </span>
              )}
            </div>

            <h3 className="font-bold text-white leading-snug">
              {cert.title}
            </h3>
            <p className="text-sm text-white-200">{cert.issuer}</p>
            <span className="text-xs text-white-200/70">{cert.date}</span>

            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-purple hover:underline"
              >
                Verify credential →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
