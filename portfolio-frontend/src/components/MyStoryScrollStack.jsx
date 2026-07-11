import React, { useState, useEffect } from 'react';

import scienceExhiImg from '../assets/scienceExhi.jpg';
import headboyImg from '../assets/headboy.jpg';
import ngoImg from '../assets/ngo.jpg';
import dsaImg from '../assets/dsa.jpg';
import bwuImg from '../assets/bwu.jpg';

const TypewriterText = ({ text, className, delay = 0, speed = 80 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [start, setStart] = useState(false);
  const ref = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStart(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!start) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i === text.length) clearInterval(intervalId);
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed, start]);

  return (
    <div ref={ref} className={className}>
      {displayedText}
      <span className="animate-pulse border-r-2 border-[#d76767] ml-1 h-[1em] inline-block align-middle" />
    </div>
  );
};

const MyStoryScrollStack = () => {
  const cards = [
    { id: 1, title: 'High School', content: 'Science Exhibition, built a 35x zoom capable Telescope from scratch.', minHeight: '450px', image: scienceExhiImg },
    { id: 2, title: 'Head Boy', content: 'Appointed as Head Boy of School for session 2023-24' , minHeight: '450px', image: headboyImg },
    { id: 3, title: 'NGO Volunteer', content: 'Volunteered in multiple NGO drives along with Sanskrit Youth Foundation and NSS.', minHeight: '450px', image: ngoImg },
    { id: 4, title: 'Problem Solving', content: 'Continuously working on my problem solving and DSA with weekly contests.', minHeight: '450px', image: dsaImg },
    { id: 5, title: 'Build With Udyami', content: 'Attended the Build With Udyami Bootcamp to work on WebDev with hands-on learning.', minHeight: '450px', image: bwuImg },
   
  ];

  return (
    <div className="w-full relative py-20 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row-reverse pb-10">

      <div className="w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center items-start lg:pl-16 pt-10 lg:pt-0 mb-20 lg:mb-0 z-0">
         <TypewriterText 
            text="My Story Gallery" 
            className="text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-none mb-6" 
            delay={200}
         />
         <p className="text-xl text-gray-400 font-light leading-relaxed max-w-sm">
            Scroll down to explore my journey through code, data, and design.
         </p>
      </div>

      <div className="w-full lg:w-10/12 relative z-10">
        {cards.map((card, index) => (
          <div 
            key={card.id}
           
            className="sticky w-full max-w-5xl mx-auto rounded-3xl p-8 shadow-2xl flex flex-col md:flex-row gap-8 border border-white/10 overflow-hidden"
            style={{ 
             
              top: `calc(100px + ${index * 30}px)`, 
              backgroundColor: 'rgba(20, 20, 30, 0.95)',
              backdropFilter: 'blur(10px)',
              zIndex: index + 1,
             
              marginBottom: '15vh',
              minHeight: card.minHeight
            }}
          >
            
            <div className="w-full md:w-9/12 h-56 md:h-auto bg-black/50 rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-7/12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">{card.title}</h2>
              <p className="text-lg text-gray-300 leading-relaxed font-light">{card.content}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MyStoryScrollStack;
