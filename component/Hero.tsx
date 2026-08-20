import React from 'react'
import { Spotlight } from './Spotlight'

const Hero = () => {
  return (
      <div className="relative pb-20 pt-36 h-[500px]">
        <div>
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-full"
          fill="white"
        />
        <Spotlight
          className="absolute h-[80%] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="absolute left-80 top-28 h-[80%] w-[50vw]" fill="blue" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

      </div>
      </div>
      </div>
   
  )
}

export default Hero
