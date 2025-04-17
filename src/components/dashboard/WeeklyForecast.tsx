"use client";

import React from 'react';

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
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 ${className}`}>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-dark-blue dark:text-white">7-Day Forecast</h2>
            <div className="flex space-x-1">
              <button className="px-3 py-1 text-sm bg-light-blue text-white rounded-md">Weekly</button>
              <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-dark-gray dark:text-gray-300 rounded-md">Monthly</button>
            </div>
          </div>
          
          <div className="space-y-6 relative">
            {/* Progress Line */}
            <div className="absolute left-[60px] top-4 bottom-4 w-[2px] bg-gray-100 dark:bg-gray-700"></div>
            
            {forecast.slice(0, daysToShow).map((day, index) => (
              <div key={index} className="flex items-center relative">
                <div className="w-14 text-sm text-dark-gray dark:text-gray-400 mr-4">{day.day}</div>
                <div className={`w-8 h-8 rounded-full z-10 flex items-center justify-center 
                  ${day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow/20 text-sunshine-yellow' : 
                    day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray/20 text-cloudy-gray' : 
                    day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue/20 text-rain-blue' : 
                    'bg-light-blue/20 text-light-blue'}`}
                >
                  <div className={`w-4 h-4 rounded-full 
                    ${day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow' : 
                      day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray' : 
                      day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue' : 
                      'bg-light-blue'}`}
                  ></div>
                </div>
                <div className="ml-4 flex-grow">
                  <div className="text-sm font-medium text-dark-blue dark:text-white">{day.condition}</div>
                  <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow' : 
                        day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray' : 
                        day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue' : 
                        'bg-light-blue'
                      }`}
                      style={{ width: `${(day.high / 40) * 100}%` }}
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
        </div>
      )}
    </div>
  );
};

export default WeeklyForecast; 