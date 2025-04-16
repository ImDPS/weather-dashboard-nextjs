import React, { useState } from 'react';
import Image from 'next/image';
import type { DailyForecast as DailyForecastType } from '@/types/weather';

interface DailyForecastProps {
  data: DailyForecastType[];
}

const DailyForecast: React.FC<DailyForecastProps> = ({ data }) => {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  
  const toggleDay = (day: string) => {
    if (expandedDay === day) {
      setExpandedDay(null);
    } else {
      setExpandedDay(day);
    }
  };
  
  // Helper function to get weather background color based on condition
  const getWeatherBackground = (condition: string): string => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'from-sunshine-yellow/20 to-sunshine-yellow/5';
      case 'mostly sunny':
        return 'from-sunshine-yellow/15 to-cloudy-gray/5';
      case 'partly cloudy':
        return 'from-cloudy-gray/15 to-sky-blue/10';
      case 'cloudy':
      case 'mostly cloudy':
        return 'from-cloudy-gray/20 to-cloudy-gray/5';
      case 'light rain':
        return 'from-rain-blue/15 to-rain-blue/5';
      case 'rain':
        return 'from-rain-blue/20 to-rain-blue/10';
      default:
        return 'from-light-blue/10 to-light-blue/5';
    }
  };

  return (
    <div className="space-y-3">
      {data.map((day, index) => (
        <div key={index} className="relative">
          <div 
            className={`bg-gradient-to-r ${getWeatherBackground(day.condition)} rounded-lg p-3 cursor-pointer transition-all duration-300 ${expandedDay === day.day ? 'shadow-md' : 'hover:shadow-sm'}`}
            onClick={() => toggleDay(day.day)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 text-center">
                  <div className="font-medium">{day.day}</div>
                  <div className="text-xs text-dark-gray dark:text-gray-400">{day.date}</div>
                </div>
                
                <div className="w-10 h-10 flex-shrink-0">
                  <Image 
                    src={day.icon} 
                    alt={day.condition} 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                
                <div className="hidden sm:block text-sm text-dark-gray dark:text-gray-400">
                  {day.condition}
                </div>
              </div>
              
              <div className="flex items-center">
                {day.precipitation > 0 && (
                  <div className="hidden sm:flex items-center mr-6 text-sm">
                    <svg className="w-4 h-4 mr-1 text-rain-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2h10a2 2 0 012 2v6z" />
                    </svg>
                    <span className="text-dark-gray dark:text-gray-400">{day.precipitation}%</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{day.high}°</span>
                  <span className="text-dark-gray dark:text-gray-400">{day.low}°</span>
                </div>
                
                <svg 
                  className={`w-5 h-5 text-dark-gray dark:text-gray-400 ml-4 transition-transform ${expandedDay === day.day ? 'transform rotate-180' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            {/* Expanded Details */}
            {expandedDay === day.day && (
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex flex-col">
                  <span className="text-dark-gray dark:text-gray-400 mb-1">Humidity</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-rain-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="font-medium">{day.humidity}%</span>
                  </div>
                  <div className="mt-1 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rain-blue rounded-full"
                      style={{ width: `${day.humidity}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-dark-gray dark:text-gray-400 mb-1">Wind</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-storm-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <span className="font-medium">{day.wind} km/h</span>
                  </div>
                  <div className="mt-1 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-storm-blue rounded-full"
                      style={{ width: `${(day.wind / 20) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-dark-gray dark:text-gray-400 mb-1">UV Index</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-sunshine-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-medium">{day.uvIndex}</span>
                    <span className="text-xs ml-1 text-dark-gray dark:text-gray-400">
                      {day.uvIndex <= 2 ? 'Low' : day.uvIndex <= 5 ? 'Moderate' : day.uvIndex <= 7 ? 'High' : 'Very High'}
                    </span>
                  </div>
                  <div className="mt-1 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sunshine-yellow rounded-full"
                      style={{ width: `${(day.uvIndex / 11) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-dark-gray dark:text-gray-400 mb-1">Sunrise & Sunset</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-sunshine-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="font-medium">{day.sunrise}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-sunset-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.513 11.397a9.002 9.002 0 00-1.513-13.934M16 6.999H8a1 1 0 00-.8.4l-4 5.334a.5.5 0 00.8.6l2-2.666V18.5a2 2 0 002 2h8a2 2 0 002-2v-8.234l2 2.666a.5.5 0 00.8-.6l-4-5.334A1 1 0 0016 6.999z" />
                      </svg>
                      <span className="font-medium">{day.sunset}</span>
                    </div>
                  </div>
                  <div className="mt-2 h-1 bg-gradient-to-r from-sunshine-yellow via-light-blue to-dark-blue rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyForecast; 