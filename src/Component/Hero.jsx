import React from 'react';

import HeroPic from '../assets/Hero.png';
import ReactLogo from '../assets/react.png';
import ReduxLogo from '../assets/Redux.png';
import TailwindLogo from '../assets/Tailwind.png';
import Facebook from '../assets/Facebook.png';
import Twtter from '../assets/Twtter.png';
import Instragam from '../assets/Instragam.png';
import Linkdin from '../assets/Linkdin.png';

import '../index.css'; // 🔴 glow CSS import

const Hero = () => {
  return (
    <section className='relative'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There,<br />I'm Rakib <span className='text-red-500'>Sheikh</span>
            </h1>
            <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
            <p className='mb-4'>
              I'm a passionate web developer with expertise in React, Next.js, and modern web technologies.
              I love creating beautiful and functional websites that solve real world problems.
            </p>
            <button className='bg-black text-white px-3 py-2 rounded-md w-max mb-20 hover:bg-red-200 hover:text-black'>Download CV</button>
          </div>

          <div className="md:w-1/2 relative flex items-center justify-center mt-5 md:mt-0">
            <div className="glow-ring-wrapper">
              <div className="glow-ring"></div>
              <img src={HeroPic} alt="Profile" className="hero-img" />
            </div>

            <img src={ReactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
            <img src={ReduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={TailwindLogo} alt="" className='absolute w-10 right-0 bottom-36 rounded-full md:hidden' />
          </div>
        </div>
      </div>

      <div className="absolute top-25 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <img src={Facebook} alt="" className='w-7' />
        <img src={Instragam} alt="" className='w-7' />
        <img src={Twtter} alt="" className='w-7' />
        <img src={Linkdin} alt="" className='w-7' />
      </div>
    </section>
  );
};

export default Hero;
