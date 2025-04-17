"use client";

import React, { useState } from 'react';
import { 
  WiDaySunny, 
  WiRain, 
  WiCloudy, 
  WiSnow, 
  WiStormShowers, 
  WiFog, 
  WiHumidity, 
  WiStrongWind, 
  WiRaindrop, 
  WiBarometer 
} from 'react-icons/wi';

interface WeatherType {
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: { speed: number; direction: string };
  chanceOfRain: number;
  pressure: number;
  condition: string;
  airQuality: number;
}

interface CityType {
  id: number;
  name: string;
  district: string;
  currentWeather: WeatherType;
}

interface CurrentWeatherProps {
  city: CityType;
  isLoading: boolean;
  className?: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city, isLoading, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to get weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return <WiDaySunny className="text-sunny-yellow" />;
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
      return <WiDaySunny className="text-sunny-yellow" />;
    }
  };

  // Get temperature-based gradient colors
  const getTemperatureGradient = (temp: number) => {
    if (temp >= 30) {
      return 'from-sunset-orange to-sunshine-yellow'; // Hot
    } else if (temp >= 20) {
      return 'from-sunshine-yellow to-light-blue'; // Warm
    } else if (temp >= 10) {
      return 'from-light-blue to-sky-blue'; // Mild
    } else {
      return 'from-sky-blue to-rain-blue'; // Cool
    }
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden ${className} transition-all duration-300 hover:shadow-lg transform ${isHovered ? 'scale-[1.02]' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isLoading ? (
        <div className="p-6">
          <div className="animate-pulse">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
              <div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
            </div>
            <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded my-4"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex items-center justify-between mb-6 animate-fade-in">
            <div>
              <h2 className="text-lg font-semibold text-dark-blue dark:text-white flex items-center">
                Weather in {city.name}
                <div className="ml-2 text-2xl weather-icon transition-transform duration-300 ease-in-out">
                  {getWeatherIcon(city.currentWeather.condition)}
                </div>
              </h2>
              <p className="text-dark-gray dark:text-gray-400 text-sm">{city.currentWeather.condition}</p>
            </div>
            <div className={`text-5xl font-bold bg-gradient-to-r ${getTemperatureGradient(city.currentWeather.temperature)} bg-clip-text text-transparent transition-all duration-300`}>
              {city.currentWeather.temperature}°C
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 hover:bg-light-blue/5 dark:hover:bg-light-blue/10 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1 flex items-center">
                <WiHumidity className="mr-1 text-lg text-light-blue" /> Humidity
              </div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{city.currentWeather.humidity}%</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 hover:bg-light-blue/5 dark:hover:bg-light-blue/10 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1 flex items-center">
                <WiStrongWind className="mr-1 text-lg text-light-blue" /> Wind
              </div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{city.currentWeather.wind.speed} km/h</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 hover:bg-light-blue/5 dark:hover:bg-light-blue/10 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1 flex items-center">
                <WiRaindrop className="mr-1 text-lg text-light-blue" /> Precipitation
              </div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{city.currentWeather.chanceOfRain}%</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 hover:bg-light-blue/5 dark:hover:bg-light-blue/10 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1 flex items-center">
                <WiBarometer className="mr-1 text-lg text-light-blue" /> Pressure
              </div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{city.currentWeather.pressure} hPa</div>
            </div>
          </div>
          
          {/* Weather badge with feels like temperature */}
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-light-blue/10 to-sky-blue/10 border border-light-blue/20 text-sm text-light-blue animate-fade-in" style={{animationDelay: '0.5s'}}>
            Feels like {city.currentWeather.feelsLike}°C
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather; 