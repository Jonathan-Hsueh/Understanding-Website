import { useState, useEffect } from 'react';

const HeroSearchDemo = () => {
  const cyclingWords = [
    "artificial intelligence",
    "quantum computing", 
    "climate change",
    "blockchain technology",
    "space exploration",
    "renewable energy",
    "genetic engineering",
    "machine learning"
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(80);
  const [searchValue, setSearchValue] = useState('');
  
  const isSearchEmpty = searchValue.trim() === '';

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = cyclingWords[currentWordIndex];
      if (isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypeSpeed(40);
      } else {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypeSpeed(80);
      }

      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typeSpeed, cyclingWords]);

  // Floating orbs with vertical-only Brownian motion
  const floatingOrbs = [
    { id: 1, color: 'from-blue-400 to-blue-600', x: '8%', y: '15%', duration: '8s', delay: '0s', link: 'https://example.com/1' },
    { id: 4, color: 'from-green-400 to-green-600', x: '88%', y: '80%', duration: '8.5s', delay: '1.5s', link: 'https://example.com/4' },
    { id: 5, color: 'from-yellow-400 to-yellow-600', x: '50%', y: '8%', duration: '9.5s', delay: '2s', link: 'https://example.com/5' },
    { id: 6, color: 'from-red-400 to-red-600', x: '18%', y: '45%', duration: '8.2s', delay: '0.3s', link: 'https://example.com/6' },
    { id: 7, color: 'from-indigo-400 to-indigo-600', x: '78%', y: '35%', duration: '9.8s', delay: '0.8s', link: 'https://example.com/7' },
    { id: 8, color: 'from-cyan-400 to-cyan-600', x: '3%', y: '88%', duration: '8.8s', delay: '1.2s', link: 'https://example.com/8' },
    { id: 9, color: 'from-orange-400 to-orange-600', x: '92%', y: '25%', duration: '9.2s', delay: '1.8s', link: 'https://example.com/9' },
    { id: 10, color: 'from-teal-400 to-teal-600', x: '25%', y: '82%', duration: '8.7s', delay: '0.7s', link: 'https://example.com/10' },
    { id: 11, color: 'from-violet-400 to-violet-600', x: '65%', y: '60%', duration: '9.3s', delay: '1.3s', link: 'https://example.com/11' },
    { id: 12, color: 'from-emerald-400 to-emerald-600', x: '35%', y: '28%', duration: '8.9s', delay: '1.7s', link: 'https://example.com/12' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Floating Orbs with Glowing Rings */}
      {floatingOrbs.map((orb) => (
        <a
          key={orb.id}
          href={orb.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full group transition-all duration-300 cursor-pointer hover:scale-110 z-20"
          style={{
            left: orb.x,
            top: orb.y,
            animation: `verticalFloat${orb.id} ${orb.duration} ease-in-out infinite ${orb.delay}`,
          }}
        >
          {/* Large Glowing Ring (visible when not hovered) */}
          <div 
            className="absolute inset-[-8px] rounded-full bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-md group-hover:opacity-0 transition-opacity duration-300" 
            style={{ 
              boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2), 0 0 90px rgba(255, 255, 255, 0.1)' 
            }}
          />
          
          {/* Small White Ring (visible on hover) */}
          <div className="absolute inset-0 rounded-full border-1 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          {/* Orb Content */}
          <div className={`w-full h-full bg-gradient-to-br ${orb.color} blur-2xl group-hover:blur-none transition-all duration-500 rounded-full overflow-hidden relative`}>
            {/* Image Label - shows on hover */}
            <div className="absolute inset-0 flex items-center justify-center text-white/0 group-hover:text-white transition-all duration-300 text-xs font-medium z-20">
              im{orb.id}.jpg
            </div>
          </div>
        </a>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold text-white mb-8 leading-tight">
          Understand the world,
          <br />
          <span className="text-white bg-clip-text text-transparent"> {/* bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500*/}
            just one click.
          </span>
        </h1>

        {/* Search Container */}
        <div className="w-full max-w-md mx-auto mb-8">
          {/* Search Box */}
          <div className="relative mb-4">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
              <label className="block text-gray-400 text-sm font-medium mb-3 text-left">
                Type your topic
              </label>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={currentText + '|'}
                className="w-full bg-transparent text-white text-2xl font-semibold outline-none placeholder-gray-500 placeholder-opacity-80"
              />
            </div>
          </div>

          {/* Get Started Button - Changes based on search input */}
          <button 
            className={`w-full font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform ${
              isSearchEmpty 
                ? 'bg-pink-900/60 text-pink-300/50 cursor-not-allowed opacity-60' 
                : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white hover:scale-[1.02] shadow-lg hover:shadow-xl'
            }`}
            disabled={isSearchEmpty}
          >
            Get started
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
          Explore knowledge across 14+ domains including
          <br />
          Science, Technology, and Philosophy.
        </p>
      </div>

      {/* CSS for vertical-only floating animations */}
      <style jsx>{`
        @keyframes verticalFloat1 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-25px); } }
        @keyframes verticalFloat2 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-30px); } }
        @keyframes verticalFloat3 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes verticalFloat4 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-35px); } }
        @keyframes verticalFloat5 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-28px); } }
        @keyframes verticalFloat6 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-22px); } }
        @keyframes verticalFloat7 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-32px); } }
        @keyframes verticalFloat8 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-26px); } }
        @keyframes verticalFloat9 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-24px); } }
        @keyframes verticalFloat10 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-29px); } }
        @keyframes verticalFloat11 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-27px); } }
        @keyframes verticalFloat12 { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-31px); } }
      `}</style>
    </div>
  );
};

export default HeroSearchDemo;