import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-16">
      <div className="flex-1 space-y-8">
        <div className="inline-block px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full shadow-sm">
          <p className="text-dark-blue text-sm font-medium flex items-center">
            <span className="flex h-2 w-2 rounded-full bg-light-blue mr-2"></span>
            Real-time weather data for over 200,000 cities
          </p>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-gradient-cool">Real-time Weather</span>
          <br />
          at Your Fingertips
        </h1>
        
        <p className="text-lg text-dark-gray max-w-xl">
          Accurate forecasts, detailed weather data, and personalized insights. 
          All in one powerful and intuitive dashboard designed for weather enthusiasts.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-2">
          <Link 
            href="/dashboard" 
            className="primary-button"
          >
            Try Dashboard Now
          </Link>
          
          <Link 
            href="/features" 
            className="secondary-button"
          >
            See Features
          </Link>
        </div>
        
        <div className="flex items-center space-x-6 pt-2">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-light-gray overflow-hidden shadow-sm"></div>
            ))}
          </div>
          <p className="text-dark-gray font-medium">
            Joined by 10K+ weather enthusiasts
          </p>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <div className="glass-card p-8 relative z-10 max-w-md mx-auto transform transition-transform hover:scale-105 duration-500">
          <div className="bg-dark-blue text-white p-4 rounded-lg flex items-center justify-between mb-4">
            <h3 className="font-medium">Current Weather</h3>
            <span className="text-sm text-sky-blue">Toronto, CA</span>
          </div>
          
          <div className="p-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="temperature-display text-5xl">24°</span>
              <span className="text-dark-gray font-medium">Partly Cloudy</span>
              <div className="flex items-center mt-2 text-sm text-dark-gray">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-sunset-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v3M16 3v3M21 8H3M18 11v6M6 11v9M18 17a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
                  </svg>
                  H: 27°
                </span>
                <span className="mx-2">|</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1 text-rain-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v3M16 3v3M21 8H3M9 17a3 3 0 1 0 6 0c0-1-.6-1.5-1-2.5-.4-1-1-2-1-2s-.6 1-1 2c-.4 1-1 1.5-1 2.5"></path>
                  </svg>
                  L: 18°
                </span>
              </div>
            </div>
            
            <div className="relative w-24 h-24">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center animate-pulse">
                <Image 
                  src="/weather-partly-cloudy.svg" 
                  width={80} 
                  height={80} 
                  alt="Partly cloudy weather icon"
                  className="opacity-90"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-light-gray/50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-dark-gray">Today's Forecast</h4>
            </div>
            <div className="flex justify-between text-center">
              {["9AM", "12PM", "3PM", "6PM", "9PM"].map((time, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs text-dark-gray">{time}</span>
                  <span className="text-sm font-medium">{18 + i * 2}°</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-sunshine-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-light-blue/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero; 