import React, { useState, useEffect } from 'react';
import SoftAroraBg from './components/ui/SoftAroraBg';
import IdCard from './components/IdCard';
import cardImage from './assets/card.png';
import logoImage from './assets/logo(1).png';

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
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[13px]' : 'text-[15px]'}`} href="/">PORTFOLIO</a>
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[13px]' : 'text-[15px]'}`} href="https://codolio.com/profile/AakashDSingh18" target="_blank" rel="noreferrer">CODOLIO</a>
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
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[13px]' : 'text-[15px]'}`} href="https://github.com/AakashDSingh18" target="_blank" rel="noreferrer">GITHUB</a>
        <a className={`text-[#d76767] font-bold no-underline whitespace-nowrap transition-all duration-[800ms] ease-out hover:text-white ${scrolled ? 'text-[13px]' : 'text-[15px]'}`} href="#contact">CONTACT</a>
      </nav>
    </header>
  );
};

function App() {
  return (
    <SoftAroraBg>
      <NavBar />
      <div className="fixed top-1/2 right-10 -translate-y-1/2 z-50 hidden md:block">
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
      <div className="min-h-screen bg-transparent flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10 text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Welcome to My Portfolio
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            This is a fresh boilerplate set up with React, Vite, and <span className="text-blue-600 font-semibold">Tailwind CSS</span>. Ready to build something amazing?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View Projects
            </button>
            
            <button className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-full transition-all border-2 border-gray-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </SoftAroraBg>
  );
}

export default App;
