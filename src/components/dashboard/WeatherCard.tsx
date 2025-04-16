import React from 'react';
import Image from 'next/image';
import type { CurrentWeather } from '@/types/weather';

interface WeatherCardProps {
  weather: CurrentWeather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="relative overflow-hidden p-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-blue/10 to-white dark:from-sky-blue/10 dark:to-gray-800 opacity-50"></div>
      
      <div className="relative z-10">
        {/* Location and Time */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-bold text-dark-blue dark:text-white flex items-center">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {weather.location}
            </h2>
            <p className="text-dark-gray dark:text-gray-400 text-sm mt-1">
              {weather.currentTime} · Local Time
            </p>
          </div>
          <div className="flex items-center text-dark-gray dark:text-gray-400 text-sm">
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
          </div>
        </div>
        
        {/* Current Weather */}
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center lg:items-start mb-6 lg:mb-0">
            <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-4 lg:mb-0 flex-shrink-0">
              <Image 
                src={weather.conditionIcon} 
                alt={weather.condition}
                width={100}
                height={100}
                className="w-full h-full object-contain animate-pulse-slow"
              />
            </div>
            <div className="lg:ml-6 flex flex-col items-center lg:items-start">
              <div className="temperature-display text-6xl lg:text-7xl font-bold">
                {weather.temperature}°
              </div>
              <div className="text-dark-gray dark:text-gray-300 text-lg font-medium">
                {weather.condition}
              </div>
              <div className="flex items-center mt-2 text-dark-gray dark:text-gray-400 text-sm">
                <span>Feels like {weather.feelsLike}°</span>
                <span className="mx-2">|</span>
                <span>Chance of rain: {weather.chanceOfRain}%</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-auto lg:ml-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Sunrise & Sunset */}
            <div className="px-4 py-3 bg-white dark:bg-gray-700/30 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-dark-gray dark:text-gray-400 mb-1">
                <svg className="w-4 h-4 mr-1 text-sunshine-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Sunrise
              </div>
              <div className="text-sm font-medium">{weather.sunrise}</div>
            </div>
            
            <div className="px-4 py-3 bg-white dark:bg-gray-700/30 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-dark-gray dark:text-gray-400 mb-1">
                <svg className="w-4 h-4 mr-1 text-sunset-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.513 11.397a9.002 9.002 0 00-1.513-13.934M16 6.999H8a1 1 0 00-.8.4l-4 5.334a.5.5 0 00.8.6l2-2.666V18.5a2 2 0 002 2h8a2 2 0 002-2v-8.234l2 2.666a.5.5 0 00.8-.6l-4-5.334A1 1 0 0016 6.999z" />
                </svg>
                Sunset
              </div>
              <div className="text-sm font-medium">{weather.sunset}</div>
            </div>
            
            {/* Humidity */}
            <div className="px-4 py-3 bg-white dark:bg-gray-700/30 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-dark-gray dark:text-gray-400 mb-1">
                <svg className="w-4 h-4 mr-1 text-rain-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Humidity
              </div>
              <div className="text-sm font-medium">{weather.humidity}%</div>
            </div>
            
            {/* Wind */}
            <div className="px-4 py-3 bg-white dark:bg-gray-700/30 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-dark-gray dark:text-gray-400 mb-1">
                <svg className="w-4 h-4 mr-1 text-storm-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Wind
              </div>
              <div className="text-sm font-medium">{weather.wind.speed} km/h {weather.wind.direction}</div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar for Day/Night Cycle */}
        <div className="mt-8">
          <div className="flex justify-between items-center text-xs text-dark-gray dark:text-gray-400 mb-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-sunshine-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>Sunrise {weather.sunrise}</span>
            </div>
            <div>Day Length: {weather.dayLength}</div>
            <div className="flex items-center">
              <span>Sunset {weather.sunset}</span>
              <svg className="w-4 h-4 ml-1 text-sunset-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.513 11.397a9.002 9.002 0 00-1.513-13.934M16 6.999H8a1 1 0 00-.8.4l-4 5.334a.5.5 0 00.8.6l2-2.666V18.5a2 2 0 002 2h8a2 2 0 002-2v-8.234l2 2.666a.5.5 0 00.8-.6l-4-5.334A1 1 0 0016 6.999z" />
              </svg>
            </div>
          </div>
          
          <div className="h-3 bg-gradient-to-r from-sunshine-yellow via-light-blue to-dark-blue rounded-full overflow-hidden">
            <div 
              className="h-full bg-white/30 relative"
              style={{ 
                width: '40%',
                boxShadow: '0 0 10px 2px rgba(255,255,255,0.7)'
              }}
            >
              <div className="absolute top-0 right-0 w-2 h-full bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard; 