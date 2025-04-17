"use client";

import React, { useState } from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiStormShowers, WiFog } from 'react-icons/wi';

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
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  // Get weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return <WiDaySunny className="text-sunshine-yellow" />;
    } else if (conditionLower.includes('rain')) {
      return <WiRain className="text-rain-blue" />;
    } else if (conditionLower.includes('cloud')) {
      return <WiCloudy className="text-cloudy-gray" />;
    } else if (conditionLower.includes('snow')) {
      return <WiSnow className="text-snow-white" />;
    } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
      return <WiStormShowers className="text-storm-blue" />;
    } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
      return <WiFog className="text-cloudy-gray" />;
    } else {
      return <WiDaySunny className="text-sunshine-yellow" />;
    }
  };

  // Start animation when component mounts
  React.useEffect(() => {
    if (!isLoading) {
      setIsAnimated(true);
    }
  }, [isLoading]);

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 ${className} transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Hourly Temperature</h2>
        <button 
          className="text-light-blue hover:text-sky-blue transition-colors duration-200 p-2 rounded-full hover:bg-light-blue/10"
          onClick={() => setIsAnimated(true)}
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
      
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
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Area under the curve - semi-transparent */}
            <path 
              d={`M0,${100 - (hourlyData[0].temperature - 25) * 5} 
                C${60},${100 - (hourlyData[1].temperature - 25) * 5} 
                ${120},${100 - (hourlyData[2].temperature - 25) * 5} 
                ${180},${100 - (hourlyData[3].temperature - 25) * 5} 
                C${240},${100 - (hourlyData[3].temperature - 25) * 5} 
                ${270},${100 - (hourlyData[4].temperature - 25) * 5} 
                ${300},${100 - (hourlyData[4].temperature - 25) * 5}
                L300,100 L0,100 Z`}
              fill="url(#tempGradient)"
              fillOpacity="0.1"
              className={isAnimated ? "animate-fade-in" : "opacity-0"}
              style={{ animationDelay: '0.5s' }}
            />
            
            {/* Temperature curve */}
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
              strokeDasharray={isAnimated ? "0" : "400"}
              strokeDashoffset={isAnimated ? "0" : "400"}
              style={{ 
                transition: "stroke-dashoffset 1.5s ease-in-out",
                filter: "url(#glow)"
              }}
            />
            
            {/* Data Points with larger hit areas */}
            {hourlyData.map((hour, index) => (
              <g key={index} className="animate-fade-in" style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                {/* Invisible larger hit area circle */}
                <circle 
                  cx={index * 75} 
                  cy={100 - (hour.temperature - 25) * 5} 
                  r="15"
                  fill="transparent"
                  onMouseEnter={() => setHoveredPoint(index)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  className="cursor-pointer"
                />
                
                {/* Visible data point */}
                <circle 
                  cx={index * 75} 
                  cy={100 - (hour.temperature - 25) * 5} 
                  r={hoveredPoint === index ? "6" : "3"} 
                  fill={index < 2 ? "#7AB2D8" : index < 3 ? "#F9D77E" : "#F7A37B"} 
                  stroke="#FFFFFF"
                  strokeWidth="1"
                  className="transition-all duration-200 cursor-pointer"
                  style={{ filter: hoveredPoint === index ? "url(#glow)" : "" }}
                />
                
                {/* Tooltip */}
                {hoveredPoint === index && (
                  <g className="animate-fade-in">
                    <rect
                      x={index * 75 - 40}
                      y={100 - (hour.temperature - 25) * 5 - 50}
                      width="80"
                      height="40"
                      rx="5"
                      fill="white"
                      stroke={index < 2 ? "#7AB2D8" : index < 3 ? "#F9D77E" : "#F7A37B"}
                      strokeWidth="1"
                      className="shadow-lg"
                    />
                    <text
                      x={index * 75}
                      y={100 - (hour.temperature - 25) * 5 - 32}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill="#2C3741"
                    >
                      {hour.temperature}°C
                    </text>
                    <text
                      x={index * 75}
                      y={100 - (hour.temperature - 25) * 5 - 18}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#565656"
                    >
                      {hour.condition}
                    </text>
                  </g>
                )}
              </g>
            ))}
          </svg>
          
          {/* Time and Weather Icons - Interactive */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-dark-gray dark:text-gray-400">
            {hourlyData.map((hour, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center animate-fade-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className={`text-lg transition-all duration-200 ${hoveredPoint === index ? 'scale-125 text-light-blue' : ''}`}>
                  {getWeatherIcon(hour.condition)}
                </div>
                <div className={`transition-all duration-200 ${hoveredPoint === index ? 'font-semibold text-light-blue' : ''}`}>
                  {hour.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HourlyTemperature; 