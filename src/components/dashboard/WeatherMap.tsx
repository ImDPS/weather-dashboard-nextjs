"use client";

import React, { useState, useEffect } from 'react';
import { 
  WiDaySunny, 
  WiRain, 
  WiCloudy, 
  WiSnow, 
  WiStormShowers, 
  WiFog,
  WiThermometer,
  WiHumidity,
  WiStrongWind
} from 'react-icons/wi';
import { FaExpand, FaTimes } from 'react-icons/fa';
import { CITY_COORDINATES } from '../../data/MapCoordinates';

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
  const [hoveredCity, setHoveredCity] = useState<number | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showFullMap, setShowFullMap] = useState(false);
  const [mapMode, setMapMode] = useState<'chhattisgarh' | 'india'>('chhattisgarh');
  
  // Get weather icon based on condition
  const getWeatherIcon = (condition: string, size: 'sm' | 'md' | 'lg' = 'md') => {
    const conditionLower = condition.toLowerCase();
    const sizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return <WiDaySunny className={`text-sunshine-yellow ${sizeClass}`} />;
    } else if (conditionLower.includes('rain')) {
      return <WiRain className={`text-rain-blue ${sizeClass}`} />;
    } else if (conditionLower.includes('cloud')) {
      return <WiCloudy className={`text-cloudy-gray ${sizeClass}`} />;
    } else if (conditionLower.includes('snow')) {
      return <WiSnow className={`text-snow-white ${sizeClass}`} />;
    } else if (conditionLower.includes('storm') || conditionLower.includes('thunder')) {
      return <WiStormShowers className={`text-storm-blue ${sizeClass}`} />;
    } else if (conditionLower.includes('fog') || conditionLower.includes('mist')) {
      return <WiFog className={`text-cloudy-gray ${sizeClass}`} />;
    } else {
      return <WiDaySunny className={`text-sunshine-yellow ${sizeClass}`} />;
    }
  };
  
  // Get background color based on condition
  const getWeatherColor = (condition: string, opacity: number = 0.2) => {
    const conditionLower = condition.toLowerCase();
    if (conditionLower.includes('sun') || conditionLower.includes('clear')) {
      return `rgba(255, 209, 102, ${opacity})`; // sunshine-yellow
    } else if (conditionLower.includes('cloud')) {
      return `rgba(169, 181, 193, ${opacity})`; // cloudy-gray
    } else if (conditionLower.includes('rain')) {
      return `rgba(133, 185, 211, ${opacity})`; // rain-blue
    } else if (conditionLower.includes('storm')) {
      return `rgba(74, 111, 165, ${opacity})`; // storm-blue
    } else {
      return `rgba(94, 170, 229, ${opacity})`; // light-blue
    }
  };

  // Function to calculate city position on the map based on geographical coordinates
  const getCityPosition = (cityName: string, mode: 'chhattisgarh' | 'india' = mapMode): { top: string; left: string } => {
    // Get coordinates from our defined mapping
    const coordinates = CITY_COORDINATES[cityName];
    
    if (!coordinates) {
      // Fallback if city not found in our mapping
      return { top: '50%', left: '50%' };
    }
    
    if (mode === 'chhattisgarh') {
      // Chhattisgarh focused view
      const MIN_LAT = 17;
      const MAX_LAT = 24;
      const MIN_LNG = 80;
      const MAX_LNG = 84;
      
      // Convert to percentage position (inverted for latitude as north is up)
      const topPercentage = 100 - ((coordinates.lat - MIN_LAT) / (MAX_LAT - MIN_LAT) * 100);
      const leftPercentage = ((coordinates.lng - MIN_LNG) / (MAX_LNG - MIN_LNG) * 100);
      
      // Add a margin to avoid placing cities at the very edge
      const MARGIN = 5; // 5% margin
      const adjustedTop = Math.min(Math.max(topPercentage, MARGIN), 100 - MARGIN);
      const adjustedLeft = Math.min(Math.max(leftPercentage, MARGIN), 100 - MARGIN);
      
      return {
        top: `${adjustedTop}%`,
        left: `${adjustedLeft}%`
      };
    } else {
      // India-wide view
      const MIN_LAT = 8;
      const MAX_LAT = 37;
      const MIN_LNG = 68;
      const MAX_LNG = 97;
      
      // Convert to percentage position (inverted for latitude as north is up)
      const topPercentage = 100 - ((coordinates.lat - MIN_LAT) / (MAX_LAT - MIN_LAT) * 100);
      const leftPercentage = ((coordinates.lng - MIN_LNG) / (MAX_LNG - MIN_LNG) * 100);
      
      // Add a margin to avoid placing cities at the very edge
      const MARGIN = 5; // 5% margin
      const adjustedTop = Math.min(Math.max(topPercentage, MARGIN), 100 - MARGIN);
      const adjustedLeft = Math.min(Math.max(leftPercentage, MARGIN), 100 - MARGIN);
      
      return {
        top: `${adjustedTop}%`,
        left: `${adjustedLeft}%`
      };
    }
  };
  
  // Check if city is visible in current mode
  const isCityVisible = (cityName: string): boolean => {
    if (mapMode === 'india') {
      return true; // All cities visible in India mode
    } else {
      // In Chhattisgarh mode, only show cities in Chhattisgarh
      const coordinates = CITY_COORDINATES[cityName];
      if (!coordinates) return false;
      
      // Approximate Chhattisgarh bounding box
      return (
        coordinates.lat >= 17 && coordinates.lat <= 24 &&
        coordinates.lng >= 80 && coordinates.lng <= 84
      );
    }
  };
  
  // Toggle between Chhattisgarh and India view
  const toggleMapMode = () => {
    setMapMode(prev => prev === 'chhattisgarh' ? 'india' : 'chhattisgarh');
  };
  
  // Animate map in
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setMapLoaded(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  
  // Render the map component (used for both normal and full-screen view)
  const renderMapContent = (fullScreen = false) => (
    <div className={`relative ${fullScreen ? 'h-full' : 'h-[400px]'} bg-gradient-to-b from-slate-50 to-sky-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden`}>
      {/* Map background with design elements */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${mapLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Map Mode Toggle */}
        {fullScreen && (
          <div className="absolute top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 rounded-md shadow-md p-2 flex gap-2">
            <button 
              onClick={() => setMapMode('chhattisgarh')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                mapMode === 'chhattisgarh' 
                  ? 'bg-light-blue text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Chhattisgarh
            </button>
            <button 
              onClick={() => setMapMode('india')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                mapMode === 'india' 
                  ? 'bg-light-blue text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              All India
            </button>
          </div>
        )}
        
        {/* Small toggle button for non-fullscreen view */}
        {!fullScreen && (
          <button
            onClick={toggleMapMode}
            className="absolute bottom-4 left-16 z-40 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 shadow-md border border-gray-100 dark:border-gray-700 text-light-blue hover:bg-white hover:text-light-blue/80 transition-colors"
            title={mapMode === 'chhattisgarh' ? 'View All India' : 'View Chhattisgarh'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </button>
        )}
        
        {/* Map grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
          {[...Array(6)].map((_, i) => (
            <div key={`vl-${i}`} className="h-full w-px bg-gray-200/50 dark:bg-gray-700/30" style={{ left: `${(i + 1) * (100 / 6)}%` }} />
          ))}
          {[...Array(6)].map((_, i) => (
            <div key={`hl-${i}`} className="w-full h-px bg-gray-200/50 dark:bg-gray-700/30" style={{ top: `${(i + 1) * (100 / 6)}%` }} />
          ))}
        </div>
        
        {/* Map decorative elements */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mapPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="rgba(94, 170, 229, 0.5)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#mapPattern)" />
        </svg>
        
        {/* Decorative paths */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,100 C50,80 100,120 200,80 C300,40 350,140 400,100" 
                stroke="rgba(94, 170, 229, 0.3)" strokeWidth="2" fill="none" />
          <path d="M0,150 C100,170 200,130 300,170 C400,190 450,100 500,120" 
                stroke="rgba(94, 170, 229, 0.2)" strokeWidth="1" fill="none" />
        </svg>
        
        {/* City connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {cities.map((city, index) => {
            // Skip cities not visible in current mode
            if (!isCityVisible(city.name)) return null;
            
            const nextCity = cities[(index + 1) % cities.length];
            // Skip if next city is not visible
            if (!isCityVisible(nextCity.name)) return null;
            
            const position = getCityPosition(city.name);
            const nextPosition = getCityPosition(nextCity.name);
            
            // Skip some connections for a more natural look
            if (mapMode === 'india' ? index % 5 !== 0 : index % 3 !== 0) return null;
            
            return (
              <path 
                key={`connection-${city.id}-${nextCity.id}`}
                d={`M ${position.left} ${position.top} Q ${(parseFloat(position.left) + parseFloat(nextPosition.left)) / 2}% ${Math.min(parseFloat(position.top), parseFloat(nextPosition.top)) - 10}%, ${nextPosition.left} ${nextPosition.top}`}
                stroke={selectedCityId === city.id || selectedCityId === nextCity.id ? "rgba(94, 170, 229, 0.8)" : "rgba(94, 170, 229, 0.2)"}
                strokeWidth={selectedCityId === city.id || selectedCityId === nextCity.id ? 2 : 1}
                fill="none"
                className="transition-all duration-300"
              />
            );
          })}
        </svg>
        
        {/* City Markers */}
        {cities.map((city) => {
          // Skip cities not visible in current mode
          if (!isCityVisible(city.name)) return null;
          
          const position = getCityPosition(city.name);
          const isSelected = city.id === selectedCityId;
          const isHovered = city.id === hoveredCity;
          
          // Determine if this is a major city (outside Chhattisgarh)
          const isMajorCity = !(
            CITY_COORDINATES[city.name]?.lat >= 17 && 
            CITY_COORDINATES[city.name]?.lat <= 24 &&
            CITY_COORDINATES[city.name]?.lng >= 80 && 
            CITY_COORDINATES[city.name]?.lng <= 84
          );
          
          // Skip rendering if not a valid city in our coordinates
          if (!CITY_COORDINATES[city.name]) return null;
          
          // In India view, make major cities more prominent
          const citySize = mapMode === 'india' 
            ? (isMajorCity ? (isSelected || isHovered ? 36 : 30) : (isSelected || isHovered ? 34 : 24))
            : (isSelected || isHovered ? 44 : (isMajorCity ? 30 : 36));
            
          return (
            <div 
              key={city.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 animate-fade-in`}
              style={{
                left: position.left,
                top: position.top,
                zIndex: isSelected || isHovered ? 40 : 30,
                animationDelay: `${0.1 * city.id}s`
              }}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
              onClick={() => onCityChange(city.id)}
            >
              {/* City marker */}
              <div 
                className={`relative flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 border-2 ${
                  isSelected || isHovered ? 'scale-125 shadow-lg' : 'scale-100'
                } ${isMajorCity && mapMode === 'chhattisgarh' ? 'opacity-70' : 'opacity-100'}`}
                style={{
                  width: `${citySize}px`,
                  height: `${citySize}px`,
                  background: getWeatherColor(city.currentWeather.condition, isSelected || isHovered ? 0.3 : 0.2),
                  borderColor: isSelected 
                    ? 'rgba(94, 170, 229, 0.7)' 
                    : (isMajorCity ? 'rgba(200, 125, 125, 0.5)' : 'rgba(255, 255, 255, 0.7)'),
                }}
              >
                {getWeatherIcon(
                  city.currentWeather.condition, 
                  isSelected || isHovered 
                    ? 'lg' 
                    : (isMajorCity && mapMode === 'chhattisgarh' ? 'sm' : 'md')
                )}
                
                {/* Temperature badge - show for all cities in full view */}
                {(fullScreen || !isMajorCity || isSelected || isHovered) && (
                  <div 
                    className={`absolute -top-1 -right-1 bg-white dark:bg-gray-800 rounded-full px-1 py-0.5 text-xs font-semibold border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300 ${
                      isSelected || isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-80'
                    }`}
                  >
                    {city.currentWeather.temperature}°
                  </div>
                )}
              </div>
              
              {/* City name label - improved for better contrast */}
              <div 
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-white dark:bg-gray-800 rounded-md text-xs font-medium shadow-md border border-gray-100 dark:border-gray-700 whitespace-nowrap transition-all duration-300 ${
                  isSelected || isHovered || (fullScreen && mapMode === 'india' && isMajorCity) 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-90 pointer-events-none'
                }`}
              >
                <span className="text-dark-blue dark:text-white font-semibold">{city.name}</span>
                <span className="text-dark-gray dark:text-gray-400">, {city.district}</span>
              </div>
            </div>
          );
        })}
        
        {/* City Details Panel - Shows when a city is selected - Repositioned */}
        {selectedCityId && (
          <div 
            className="absolute bottom-4 right-4 bg-white/95 dark:bg-gray-800/95 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 p-4 w-64 transition-all duration-300 animate-fade-in"
            style={{ 
              backdropFilter: 'blur(8px)', 
              zIndex: 40, 
              // Fix positioning in fullscreen to prevent overflow
              bottom: fullScreen ? '20px' : '16px', 
              right: fullScreen ? '20px' : '16px',
              maxWidth: 'calc(100% - 80px)'
            }}
          >
            {cities.map((city) => city.id === selectedCityId && (
              <div key={`detail-${city.id}`} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-dark-blue dark:text-white">{city.name}</h3>
                  <div className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-dark-gray dark:text-gray-300 font-medium">
                    {city.district}
                  </div>
                </div>
                
                <div className="flex items-center mt-1">
                  <div className="text-4xl">{getWeatherIcon(city.currentWeather.condition, 'lg')}</div>
                  <div className="ml-2">
                    <div className="text-2xl font-bold text-dark-blue dark:text-white">{city.currentWeather.temperature}°C</div>
                    <div className="text-sm text-dark-gray dark:text-gray-300 font-medium">{city.currentWeather.condition}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-2 text-center">
                  <div className="bg-light-blue/10 dark:bg-light-blue/20 rounded-lg p-2">
                    <WiThermometer className="mx-auto text-light-blue" />
                    <div className="text-xs text-dark-gray dark:text-gray-300 mt-1 font-medium">Feels Like</div>
                    <div className="text-sm font-semibold text-dark-blue dark:text-white">{city.currentWeather.temperature - 2}°C</div>
                  </div>
                  <div className="bg-light-blue/10 dark:bg-light-blue/20 rounded-lg p-2">
                    <WiHumidity className="mx-auto text-light-blue" />
                    <div className="text-xs text-dark-gray dark:text-gray-300 mt-1 font-medium">Humidity</div>
                    <div className="text-sm font-semibold text-dark-blue dark:text-white">{40 + (city.id * 5) % 30}%</div>
                  </div>
                  <div className="bg-light-blue/10 dark:bg-light-blue/20 rounded-lg p-2">
                    <WiStrongWind className="mx-auto text-light-blue" />
                    <div className="text-xs text-dark-gray dark:text-gray-300 mt-1 font-medium">Wind</div>
                    <div className="text-sm font-semibold text-dark-blue dark:text-white">{5 + (city.id * 3) % 10} km/h</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Legend with weather conditions only */}
        <div 
          className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 p-3 rounded-lg text-xs shadow-md border border-gray-100 dark:border-gray-700 transition-all duration-300 animate-fade-in" 
          style={{ 
            animationDelay: '0.5s', 
            backdropFilter: 'blur(8px)',
            zIndex: 40,
            top: fullScreen ? '16px' : '16px'
          }}
        >
          <div className="text-sm font-semibold text-dark-blue dark:text-white mb-2">Weather Conditions</div>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-sunshine-yellow/20 flex items-center justify-center mr-2">
                <WiDaySunny className="text-sunshine-yellow" />
              </div>
              <span className="text-dark-gray dark:text-gray-300 font-medium">Sunny</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-cloudy-gray/20 flex items-center justify-center mr-2">
                <WiCloudy className="text-cloudy-gray" />
              </div>
              <span className="text-dark-gray dark:text-gray-300 font-medium">Cloudy</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-rain-blue/20 flex items-center justify-center mr-2">
                <WiRain className="text-rain-blue" />
              </div>
              <span className="text-dark-gray dark:text-gray-300 font-medium">Rainy</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-storm-blue/20 flex items-center justify-center mr-2">
                <WiStormShowers className="text-storm-blue" />
              </div>
              <span className="text-dark-gray dark:text-gray-300 font-medium">Stormy</span>
            </div>
          </div>
        </div>
        
        {/* Expand button */}
        {!fullScreen && (
          <button 
            onClick={() => setShowFullMap(true)}
            className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-md border border-gray-100 dark:border-gray-700 text-light-blue hover:bg-white hover:text-light-blue/80 transition-colors z-40"
            title="View full map"
          >
            <FaExpand className="w-4 h-4" />
          </button>
        )}
        
        {/* Close button for full-screen view */}
        {fullScreen && (
          <button 
            onClick={() => setShowFullMap(false)}
            className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 shadow-md border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors z-50"
            title="Close full map"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
  
  return (
    <>
      <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden ${className} transition-all duration-300 hover:shadow-lg`}>
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Weather Map</h2>
          <button 
            onClick={() => setShowFullMap(true)}
            className="text-sm text-light-blue hover:text-light-blue/80 transition-colors flex items-center"
          >
            Full Map
            <FaExpand className="w-3 h-3 ml-1" />
          </button>
        </div>
        
        {isLoading ? (
          <div className="h-[400px] bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        ) : (
          renderMapContent(false)
        )}
      </div>
      
      {/* Full-screen map modal - with improved positioning */}
      {showFullMap && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 w-[92vw] h-[88vh] rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-dark-blue dark:text-white">
                {mapMode === 'india' ? 'India Weather Map' : 'Chhattisgarh Weather Map'}
              </h2>
              <button 
                onClick={() => setShowFullMap(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            {renderMapContent(true)}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherMap; 