import React from 'react';
import SoftAroraBg from './components/ui/SoftAroraBg';
import IdCard from './components/IdCard';
import cardImage from './assets/card.png';

function App() {
  return (
    <SoftAroraBg>
      {/* 
        This wrapper makes the ID Card fixed to the right side of the screen.
        'fixed' keeps it in place while you scroll.
        'top-1/2 -translate-y-1/2' vertically centers it.
        'right-10' adds some padding from the right edge.
      */}
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
          innerGradient="linear-gradient(145deg, rgba(225, 0, 255, 0.15) 0%, rgba(247, 247, 247, 0.05) 100%)"
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
