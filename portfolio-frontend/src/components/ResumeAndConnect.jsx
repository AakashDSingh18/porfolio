import React from 'react';
import { Mail, FileText } from 'lucide-react';
import resumePdf from '../assets/resume_aakash.pdf';
import linkedinBg from '../assets/linkedinprofile.png';
import githubBg from '../assets/githubprofile.png';
import resumeBg from '../assets/resume.png';

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ResumeAndConnect = () => {
  const contactCards = [
    {
      id: 1,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aakash-deep-singh-416825286/',
      icon: <LinkedinIcon size={36} className="text-[#2867B2]" />,
      textColor: 'text-[#2867B2]',
      bgImage: `url(${linkedinBg})`
    },
    {
      id: 2,
      title: 'Email',
      link: 'mailto:aakash.singh3306@gmail.com',
      icon: <Mail size={36} className="text-white" />,
      textColor: 'text-white',
      bgImage: 'linear-gradient(to bottom right, #1E293B, #9c1e1e)'
    },
    {
      id: 3,
      title: 'GitHub',
      link: 'https://github.com/AakashDSingh18',
      icon: <GithubIcon size={36} className="text-white" />,
      textColor: 'text-white',
      bgImage: `url(${githubBg})`
    },
    {
      id: 4,
      title: 'Resume',
      link: resumePdf,
      icon: <FileText size={36} className="text-[#E2E8F0]" />,
      textColor: 'text-[#E2E8F0]',
      bgImage: `url(${resumeBg})`
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto pt-10 pb-16 px-1 flex flex-col items-center relative z-20" id="contact">

      <h1 className="text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-white tracking-tight leading-none mb-8 hover:text-[#d76767] transition-colors duration-300 cursor-default">
        CONTACT
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed text-center max-w-4xl tracking-wide mb-20">
        I am always looking for opportunities to grow, contribute, and network. I am currently open to internship positions, collaborative freelance projects, and professional networking.
      </p>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {contactCards.map((card) => (
          <a 
            key={card.id}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-[280px] md:h-[350px] rounded-[2rem] border-4 border-[#432727] bg-[#111115] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
          >
            
            <div className="absolute inset-0 flex items-center justify-center translate-y-0 group-hover:translate-y-[75%] transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-10 pointer-events-none">
              <div className="flex items-center gap-4 bg-black/50 px-6 py-4 rounded-2xl backdrop-blur-md shadow-xl border border-white/5">
                <span className={`text-3xl md:text-4xl font-extrabold ${card.textColor}`}>{card.title}</span>
                {card.icon}
              </div>
            </div>

            <div 
              className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
              style={{
                background: card.bgImage,
                backgroundColor: '#111115',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default ResumeAndConnect;
