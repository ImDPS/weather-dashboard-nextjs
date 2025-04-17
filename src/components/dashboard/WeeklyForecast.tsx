"use client";

import React, { useState } from 'react';
import { 
  WiDaySunny, 
  WiRain, 
  WiCloudy, 
  WiSnow, 
  WiStormShowers, 
  WiFog
} from 'react-icons/wi';

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  condition: string;
  chanceOfRain: number;
}

interface WeeklyForecastProps {
  forecast: ForecastDay[];
  isLoading: boolean;
  className?: string;
  daysToShow?: number;
}

const WeeklyForecast: React.FC<WeeklyForecastProps> = ({ 
  forecast, 
  isLoading, 
  className = '',
  daysToShow = 5
}) => {
  const [activeView, setActiveView] = useState<'weekly' | 'monthly'>('weekly');
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  // Function to get weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return <WiDaySunny className="text-sunshine-yellow text-lg" />;
    } else if (conditionLower.includes('rain')) {
      return <WiRain className="text-rain-blue text-lg" />;
    } else if (conditionLower.includes('cloud')) {
      return <WiCloudy className="text-cloudy-gray text-lg" />;
    } else if (conditionLower.includes('snow')) {
      return <WiSnow className="text-snow-white text-lg" />;
    } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
      return <WiStormShowers className="text-storm-blue text-lg" />;
    } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
      return <WiFog className="text-cloudy-gray text-lg" />;
    } else {
      return <WiDaySunny className="text-sunshine-yellow text-lg" />;
    }
  };

  // Get color for weather condition
  const getWeatherColor = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return 'bg-sunshine-yellow'; 
    } else if (conditionLower.includes('cloud')) {
      return 'bg-cloudy-gray';
    } else if (conditionLower.includes('rain')) {
      return 'bg-rain-blue';
    } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
      return 'bg-storm-blue';
    } else if (conditionLower.includes('snow')) {
      return 'bg-snow-white';
    } else {
      return 'bg-light-blue';
    }
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 ${className} transition-all duration-300 hover:shadow-lg`}
    >
      {isLoading ? (
        <div className="p-6">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-4"></div>
            <div className="space-y-3">
              {[...Array(daysToShow)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mr-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-6 mr-4"></div>
                  <div className="flex-grow h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12 ml-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <h2 className="text-lg font-semibold text-dark-blue dark:text-white">7-Day Forecast</h2>
            <div className="flex space-x-1">
              <button 
                className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${activeView === 'weekly' ? 'bg-light-blue text-white shadow-md' : 'bg-gray-100 dark:bg-gray-700 text-dark-gray dark:text-gray-300 hover:bg-light-blue/20'}`}
                onClick={() => setActiveView('weekly')}
              >
                Weekly
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${activeView === 'monthly' ? 'bg-light-blue text-white shadow-md' : 'bg-gray-100 dark:bg-gray-700 text-dark-gray dark:text-gray-300 hover:bg-light-blue/20'}`}
                onClick={() => setActiveView('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <div className="space-y-6 relative">
            {/* Progress Line */}
            <div className="absolute left-[60px] top-4 bottom-4 w-[2px] bg-gray-100 dark:bg-gray-700"></div>
            
            {forecast.slice(0, activeView === 'weekly' ? daysToShow : 10).map((day, index) => (
              <div 
                key={index} 
                className={`flex items-center relative animate-fade-in transform transition-all duration-300 ${hoveredDay === index ? 'scale-[1.02]' : ''}`} 
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => setHoveredDay(index)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                <div className="w-14 text-sm text-dark-gray dark:text-gray-400 mr-4">{day.day}</div>
                <div className={`w-8 h-8 rounded-full z-10 flex items-center justify-center transition-all duration-300
                  ${day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow/20 text-sunshine-yellow' : 
                    day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray/20 text-cloudy-gray' : 
                    day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue/20 text-rain-blue' : 
                    'bg-light-blue/20 text-light-blue'} ${hoveredDay === index ? 'scale-125' : ''}`}
                >
                  {getWeatherIcon(day.condition)}
                </div>
                <div className="ml-4 flex-grow">
                  <div className="text-sm font-medium text-dark-blue dark:text-white flex items-center">
                    {day.condition}
                    {day.chanceOfRain > 20 && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-rain-blue/10 text-rain-blue inline-flex items-center">
                        <WiRain className="mr-1" /> {day.chanceOfRain}%
                      </span>
                    )}
                  </div>
                  <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${getWeatherColor(day.condition)}`}
                      style={{ 
                        width: `${(day.high / 40) * 100}%`,
                        transition: 'width 1s ease-in-out'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="ml-4 w-16 text-right">
                  <span className="text-sm font-medium text-dark-blue dark:text-white">{day.high}°</span>
                  <span className="text-sm text-dark-gray dark:text-gray-400 ml-1">{day.low}°</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* View more button */}
          {activeView === 'weekly' && forecast.length > daysToShow && (
            <div className="mt-6 text-center animate-fade-in">
              <button 
                className="text-sm text-light-blue hover:text-sky-blue transition-colors duration-200 flex items-center mx-auto"
                onClick={() => setActiveView('monthly')}
              >
                View more days
                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeeklyForecast; 