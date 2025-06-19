import React from "react";

import MarnStack from "../assets/mern.png";
import HTML from "../assets/css.png";
import css from "../assets/html.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import nodejs from "../assets/Nodejs.png";
import mongo from "../assets/MongoDB.png";
import express from "../assets/express.png";
import next from "../assets/naxt.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Rakib Sheikh
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development,
              WordPress, SEO, and the MERN stack.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I started my journey in web development with a passion for
                  creating intuitive and scalable applications. With proficiency
                  in the MERN stack (MongoDB, Express.js, React, and Node.js), I
                  have built Projects such as a full-stack food ordering website
                  , ajob portal, and even a LinkedIn clone. My projects
                  demonstrate my ability to integrate poweful backend solutions
                  with sleek, user-friendly frontend designs.
                </p>
                <img
                  src={MarnStack}
                  alt=""
                  className="p-2 rounded-lg w-52 mt-4"
                />
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={HTML} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={java} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={react} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={redux} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={nodejs} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>

                  <div className="border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={mongo} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={express} alt="" className="w-10" />
                    <span className="font-semibold">Express Js</span>
                  </div>

                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={next} alt="" className="w-9" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">More About Me</h3>
            <p className="mt-4 text-lg text-gray-600">Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. I also run a YouTube channel where I teach Javascript, MERN Stack development, Wordpress and digital Marketing, helping others dive deep into the world of programming and technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
