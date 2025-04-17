"use client";

import React from 'react';

interface HourlyForecast {
  time: string;
  temperature: number;
  condition: string;
}

interface HourlyTemperatureProps {
  hourlyData: HourlyForecast[];
  isLoading: boolean;
  className?: string;
}

const HourlyTemperature: React.FC<HourlyTemperatureProps> = ({ 
  hourlyData, 
  isLoading,
  className = '' 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 ${className}`}>
      <h2 className="text-lg font-semibold text-dark-blue dark:text-white mb-6">Hourly Temperature</h2>
      
      {isLoading ? (
        <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      ) : (
        <div className="h-40 relative">
          {/* Curve Chart */}
          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="tempGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7AB2D8" />
                <stop offset="50%" stopColor="#F9D77E" />
                <stop offset="100%" stopColor="#F7A37B" />
              </linearGradient>
            </defs>
            <path 
              d={`M0,${100 - (hourlyData[0].temperature - 25) * 5} 
                C${60},${100 - (hourlyData[1].temperature - 25) * 5} 
                ${120},${100 - (hourlyData[2].temperature - 25) * 5} 
                ${180},${100 - (hourlyData[3].temperature - 25) * 5} 
                C${240},${100 - (hourlyData[3].temperature - 25) * 5} 
                ${270},${100 - (hourlyData[4].temperature - 25) * 5} 
                ${300},${100 - (hourlyData[4].temperature - 25) * 5}`}
              fill="none" 
              stroke="url(#tempGradient)" 
              strokeWidth="2"
              strokeLinecap="round"
            />
            
            {/* Data Points */}
            {hourlyData.map((hour, index) => (
              <circle 
                key={index} 
                cx={index * 75} 
                cy={100 - (hour.temperature - 25) * 5} 
                r="3" 
                fill={index < 2 ? "#7AB2D8" : index < 3 ? "#F9D77E" : "#F7A37B"} 
              />
            ))}
          </svg>
          
          {/* Time Markers */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-dark-gray dark:text-gray-400">
            {hourlyData.map((hour, index) => (
              <div key={index}>{hour.time}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HourlyTemperature; 