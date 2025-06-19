import React from "react";

import facebook from "../assets/Facebook.png";
import instragam from "../assets/Instragam.png";
import linkdin from "../assets/Linkdin.png";
import Lottie from "lottie-react";
import contact from "../assets/contact.json";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-50 bg-gray-800 py-10 px-5 md:px-0"
    >
      <div className="max-w-7xl mx-auto">
        {/* 👉 Flex-row-reverse use kora hoyeche */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center">
          {/* === Right Side Form === */}
          <form className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10">
            <h1 className="text-gray-900 text-4xl font-bold mb-7">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium">Name</label>
              <input type="text" id="name" className="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Full Name"/>
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm text-gray-700 font-medium">Email</label>
              <input type="email" id="email" className="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Email"/>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm text-gray-700 font-medium">Message</label>
              <textarea id="message" className="mt-1 p-2 w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Enter Your Message"/>
            </div>
            <button className="bg-red-500 text-white px-3 py-2 rounded-lg">Send Meassage</button>
          </form>

          {/* === Left Content === */}
          <div className="md:w-1/2 mb-8 md:mb-0 px-4">
            <h2 className="text-3xl text-red-500 font-bold mb-3">Get in Touch</h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>

            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:scale-110 transition">
                <img src={facebook} alt="facebook" className="h-6 w-6" />
              </a>

              <a href="#" className="hover:scale-110 transition">
                <img src={instragam} alt="instagram" className="h-6 w-6" />
              </a>

              <a href="#" className="hover:scale-110 transition">
                <img src={linkdin} alt="linkedin" className="h-6 w-6" />
              </a>
            </div>

            <Lottie animationData={contact} className="w-[350px] mx-auto lg:w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
