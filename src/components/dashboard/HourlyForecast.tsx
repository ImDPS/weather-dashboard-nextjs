import React, { useRef } from 'react';
import Image from 'next/image';
import type { HourlyForecast as HourlyForecastType } from '@/types/weather';

interface HourlyForecastProps {
  data: HourlyForecastType[];
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Helper function to find min and max temperatures
  const temperatures = data.map(hour => hour.temperature);
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);
  const tempRange = maxTemp - minTemp;
  
  // Function to calculate height percentage for the temperature bar
  const getHeightPercentage = (temp: number) => {
    return ((temp - minTemp) / (tempRange || 1)) * 100;
  };
  
  // Function to handle scroll buttons
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // pixels to scroll
      if (direction === 'left') {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="relative">
      {/* Scroll Buttons */}
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md p-1 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        onClick={() => scroll('left')}
      >
        <svg className="w-5 h-5 text-dark-gray dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-700 rounded-full shadow-md p-1 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        onClick={() => scroll('right')}
      >
        <svg className="w-5 h-5 text-dark-gray dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Temperature Trend Line for desktop */}
      <div className="hidden md:block h-20 mx-10 mb-2 relative">
        <div className="absolute inset-0 flex items-end pb-6">
          <svg className="w-full h-full overflow-visible" style={{ marginLeft: '20px', marginRight: '20px' }}>
            <defs>
              <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#5EAAE5" />
                <stop offset="50%" stopColor="#FFD166" />
                <stop offset="100%" stopColor="#FF8E6E" />
              </linearGradient>
            </defs>
            
            {/* Temperature line */}
            <polyline
              points={data.map((hour, i) => `${(i * 100) / (data.length - 1)}%, ${100 - getHeightPercentage(hour.temperature)}%`).join(' ')}
              fill="none"
              stroke="url(#tempGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Temperature points */}
            {data.map((hour, i) => (
              <circle
                key={i}
                cx={`${(i * 100) / (data.length - 1)}%`}
                cy={`${100 - getHeightPercentage(hour.temperature)}%`}
                r="4"
                fill="white"
                stroke={hour.temperature === maxTemp ? '#FF8E6E' : hour.temperature === minTemp ? '#5EAAE5' : '#FFD166'}
                strokeWidth="2"
                className="transition-all duration-300 hover:r-6"
              />
            ))}
          </svg>
        </div>
      </div>
      
      {/* Hourly Forecast Scroll */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto py-2 px-2 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {data.map((hour, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-20 flex flex-col items-center bg-white dark:bg-gray-800/50 rounded-lg px-2 py-3 hover:bg-light-blue/5 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">{hour.time}</div>
            <div className="relative w-12 h-12 my-1">
              <Image 
                src={hour.icon} 
                alt={hour.condition}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="text-lg font-semibold">{hour.temperature}°</div>
            {hour.precipitation > 0 && (
              <div className="flex items-center text-xs text-rain-blue mt-1">
                <svg className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v6z" />
                </svg>
                {hour.precipitation}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast; 