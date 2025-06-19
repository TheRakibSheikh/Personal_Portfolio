import React from 'react';

import Portfolio from '../assets/portfolio.png';
import SpicyBites from '../assets/spicy.png';
import Youtube from '../assets/youtube.png';
import Webelite from '../assets/website.png';
import Supercar from '../assets/supercar.png';
import Card from './Card';

const projects = [
  {
    title: 'Portfolio',
    desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
    image: Portfolio,
    live: "https://rohitsingh93300-portfolio.vercel.app/",
    github: "https://github.com/rohitsingh93300/portfolio"
  },
  {
    title: 'Spicy Bites',
    desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
    image: SpicyBites,
    live: "https://spicybites.netlify.app/",
    github: "https://github.com/rohitsingh93300/YtSpicyBites"
  },
  {
    title: 'YouTube Clone',
    desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
    image: Youtube,
    live: "https://youtube-clone-93300.netlify.app/",
    github: "https://github.com/rohitsingh93300/YouTube-clone"
  },
  {
    title: 'Webelite builder',
    desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
    image: Webelite,
    live: "https://www.webelitebuilders.com/",
    github: "#"
  },
  {
    title: 'Super Car',
    desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
    image: Supercar,
    live: "https://supercar123.netlify.app/",
    github: "https://github.com/rohitsingh93300/supercars"
  }
];

const Projece = () => {
  return (
    <section id='project' className='relative bg-gray-700 py-10 px-4'>
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                {projects.map((items)=>{
                    return <Card item={items}/>
                })}
            </div>
      </div>
    </section>
  );
};

export default Projece;
