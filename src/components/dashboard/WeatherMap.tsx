"use client";

import React from 'react';
import Link from 'next/link';

interface CityType {
  id: number;
  name: string;
  district: string;
  currentWeather: {
    temperature: number;
    condition: string;
  };
}

interface WeatherMapProps {
  cities: CityType[];
  selectedCityId: number;
  onCityChange: (cityId: number) => void;
  isLoading: boolean;
  className?: string;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ 
  cities, 
  selectedCityId, 
  onCityChange,
  isLoading,
  className = '' 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden ${className}`}>
      <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Weather Map</h2>
        <Link href="/dashboard/map" className="text-sm text-light-blue hover:text-light-blue/80 transition-colors flex items-center">
          Full Map
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
      
      {isLoading ? (
        <div className="h-64 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      ) : (
        <div className="h-64 relative bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Simple placeholder for Map */}
            <div className="relative w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <div className="text-center text-dark-gray dark:text-gray-400 p-4">
                <p className="text-xl font-semibold mb-2">Weather Map</p>
                <p className="text-sm">Interactive map coming soon</p>
              </div>
              
              {/* City Markers */}
              {cities.map((city) => (
                <div 
                  key={city.id}
                  className={`absolute w-3 h-3 rounded-full cursor-pointer hover:w-4 hover:h-4 transition-all duration-200 ${
                    city.id === selectedCityId ? 'w-4 h-4 border-2 border-white' : ''
                  } ${
                    city.currentWeather.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow' :
                    city.currentWeather.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray' :
                    city.currentWeather.condition.toLowerCase().includes('rain') ? 'bg-rain-blue' :
                    'bg-light-blue'
                  }`}
                  style={{
                    // Approximated positions for illustrative purposes
                    left: `${38 + (city.id * 7) % 35}%`,
                    top: `${35 + (city.id * 5) % 30}%`,
                  }}
                  title={`${city.name}: ${city.currentWeather.temperature}°C, ${city.currentWeather.condition}`}
                  onClick={() => onCityChange(city.id)}
                />
              ))}
              
              {/* Legend */}
              <div className="absolute bottom-2 left-2 bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg text-xs shadow-sm">
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-sunshine-yellow mr-1"></div>
                  <span className="text-dark-gray dark:text-gray-400">Sunny</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-cloudy-gray mr-1"></div>
                  <span className="text-dark-gray dark:text-gray-400">Cloudy</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-rain-blue mr-1"></div>
                  <span className="text-dark-gray dark:text-gray-400">Rainy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-light-blue mr-1"></div>
                  <span className="text-dark-gray dark:text-gray-400">Clear</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherMap; 