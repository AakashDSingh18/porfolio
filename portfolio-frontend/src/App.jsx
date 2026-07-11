import React, { useState, useEffect } from 'react';
import SoftAroraBg from './components/ui/SoftAroraBg';
import IdCard from './components/IdCard';
import cardImage from './assets/card.png';
import logoImage from './assets/logo(1).png';
import MyStoryScrollStack from './components/MyStoryScrollStack';
import ResumeAndConnect from './components/ResumeAndConnect';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-[800ms] ease-out ${scrolled ? 'py-[8px] pl-[30px] pr-[15px] shadow-[0_2px_20px_rgba(215,103,103,0.2)] bg-black/40 backdrop-blur-md' : 'py-6'}`}>
      <nav className="flex items-center justify-evenly flex-1 text-[15px] p-[1px] max-w-7xl mx-auto">
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[14px]' : 'text-[17px] tracking-wide'}`} href="/">PORTFOLIO</a>
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[14px]' : 'text-[17px] tracking-wide'}`} href="https://codolio.com/profile/AakashDSingh18" target="_blank" rel="noreferrer">CODOLIO</a>
        <a href="/" className="relative flex items-center justify-center">
          <img 
            src={logoImage} 
            alt="Aakash" 
            className={`transition-all duration-[800ms] ease-out object-contain ${scrolled ? 'w-[90px] h-[46px]' : 'w-[120px] h-[60px]'}`}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="hidden text-[#d76767] font-extrabold text-2xl tracking-widest uppercase">Aakash</span>
        </a>
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[14px]' : 'text-[17px] tracking-wide'}`} href="https://github.com/AakashDSingh18" target="_blank" rel="noreferrer">GITHUB</a>
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[14px]' : 'text-[17px] tracking-wide'}`} href="#contact">CONTACT</a>
      </nav>
    </header>
  );
};

const BlurText = ({ text, className, delay = 0 }) => {
  const words = text.split(" ");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <h1 className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span 
          key={i} 
          className="mr-3 lg:mr-4 transition-all duration-[800ms] ease-out"
          style={{ 
            opacity: mounted ? 1 : 0, 
            filter: mounted ? 'blur(0px)' : 'blur(12px)',
            transform: mounted ? 'translateY(0)' : 'translateY(15px)',
            transitionDelay: mounted ? `${i * 120}ms` : '0ms'
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

const TypewriterText = ({ text, className, delay = 0, speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay);
    return () => clearTimeout(timer);
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
    <div className={className}>
      {displayedText}
      <span className="animate-pulse border-r-2 border-[#d76767] ml-1 h-[1em] inline-block align-middle" />
    </div>
  );
};

function App() {
  return (
    <div className="w-full bg-[#050505] min-h-screen font-sans text-white selection:bg-[#d76767] selection:text-white">
      <NavBar />
      <SoftAroraBg>
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="w-full h-full max-w-[1400px] mx-auto relative flex items-center justify-end pr-6 md:pr-10 lg:pr-12">
          <div className="pointer-events-auto hidden md:block">
            <IdCard
              name="Aakash Deep Singh"
              title="AI ML Engineer | Full Stack Developer"
              handle=""
              status="Online"
              contactText="Contact Me"
              avatarUrl={cardImage}
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log('Contact clicked')}
              behindGlowColor="rgba(225, 0, 255, 0.4)"
              iconUrl={cardImage}
              behindGlowEnabled
              innerGradient="linear-gradient(145deg, rgba(0, 0, 0, 0.15) 0%, rgba(1, 1, 1, 0.05) 100%)"
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center pl-6 md:pl-12 lg:pl-16 w-full max-w-[1400px] mx-auto pt-24 pb-10">
        <div className="flex flex-col space-y-10 max-w-2xl lg:max-w-[800px] text-left z-10">
          <BlurText 
            text="Aakash Deep Singh" 
            className="text-6xl md:text-7xl lg:text-[6rem] font-extrabold text-white tracking-tight leading-none" 
            delay={200}
          />
          
          <TypewriterText 
            text="I am an AI ML Engineer and Full Stack Developer. I build intelligent data-driven solutions and craft premium digital experiences."
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light"
            delay={1200}
            speed={40}
          />
          
          <div className="pt-20 animate-bounce opacity-70">
            <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">Scroll Down for More</p>
            <svg className="w-8 h-8 text-[#d76767]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

    </SoftAroraBg>
    <MyStoryScrollStack />
    <ResumeAndConnect />
    </div>
  );
}

export default App;
