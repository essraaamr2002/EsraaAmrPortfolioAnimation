import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia, contactInfo } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center pb-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={`mailto:${contactInfo.email}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-sm md:text-base text-white-200">
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-purple transition-colors"
          >
            {contactInfo.email}
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="hover:text-purple transition-colors"
          >
            {contactInfo.phone}
          </a>
          <span>{contactInfo.location}</span>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Esraa Amr
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition-colors"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;