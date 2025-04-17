"use client";

import React, { useState, useEffect } from 'react';
import { WiDust, WiSmoke, WiWindy, WiSandstorm } from 'react-icons/wi';

interface PollutionData {
  aqi: number;
  pm25: number;
  pm10: number;
  o3: number;
  no2: number;
}

interface AirQualityProps {
  pollution: PollutionData;
  isLoading: boolean;
  className?: string;
}

const AirQuality: React.FC<AirQualityProps> = ({ 
  pollution, 
  isLoading,
  className = '' 
}) => {
  const [selectedPollutant, setSelectedPollutant] = useState<string | null>(null);
  const [showAnimations, setShowAnimations] = useState(false);
  const [isAqiHovered, setIsAqiHovered] = useState(false);

  // Helper function to get AQI category and color
  const getAqiCategory = (aqi: number): { category: string; color: string; bgColor: string; textColor: string } => {
    if (aqi < 50) {
      return { 
        category: 'Good', 
        color: 'bg-emerald-500', 
        bgColor: 'bg-emerald-100',
        textColor: 'text-emerald-800'
      };
    } else if (aqi < 100) {
      return { 
        category: 'Moderate', 
        color: 'bg-yellow-500',
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-800'
      };
    } else if (aqi < 150) {
      return { 
        category: 'Unhealthy for Sensitive Groups', 
        color: 'bg-orange-500',
        bgColor: 'bg-orange-100',
        textColor: 'text-orange-800'
      };
    } else {
      return { 
        category: 'Unhealthy', 
        color: 'bg-red-500',
        bgColor: 'bg-red-100',
        textColor: 'text-red-800'
      };
    }
  };

  // Get pollutant icon
  const getPollutantIcon = (pollutant: string) => {
    switch(pollutant) {
      case 'pm25':
        return <WiDust className="mr-2 text-lg" />;
      case 'pm10':
        return <WiSandstorm className="mr-2 text-lg" />;
      case 'o3':
        return <WiSmoke className="mr-2 text-lg" />;
      case 'no2':
        return <WiWindy className="mr-2 text-lg" />;
      default:
        return <WiDust className="mr-2 text-lg" />;
    }
  };

  // Get percentage (for visualization) based on value and pollutant type
  const getPercentage = (value: number, type: string) => {
    const maxValues: Record<string, number> = {
      pm25: 100,
      pm10: 150,
      o3: 150,
      no2: 200
    };
    
    const max = maxValues[type] || 100;
    return Math.min(100, (value / max) * 100);
  };

  // Start animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimations(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const aqiInfo = getAqiCategory(pollution.aqi);

  // Function to get AQI description based on the AQI value
  const getAqiDescription = (aqi: number) => {
    if (aqi < 50) {
      return 'Air quality is good. Ideal for outdoor activities and poses little to no risk.';
    } else if (aqi < 100) {
      return 'Air quality is moderate. Sensitive individuals should consider limiting prolonged outdoor exertion.';
    } else if (aqi < 150) {
      return 'Air quality is unhealthy for sensitive groups. Those with respiratory or heart conditions, the elderly, and children should limit outdoor exertion.';
    } else {
      return 'Air quality is unhealthy. Everyone should reduce outdoor activities, especially those with respiratory issues. Consider wearing a mask outdoors.';
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden ${className} transition-all duration-300 hover:shadow-lg`}>
      <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center animate-fade-in">
        <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Air Quality</h2>
        <div className={`px-3 py-1 text-sm rounded-md ${aqiInfo.bgColor} ${aqiInfo.textColor}`}>
          AQI: {pollution.aqi}
        </div>
      </div>
      
      {isLoading ? (
        <div className="p-6">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex flex-col-reverse md:flex-row gap-6">
            {/* Left side - Pollutant tiles */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4 h-full">
                {[
                  { name: 'PM2.5', key: 'pm25', value: pollution.pm25, unit: 'μg/m³' },
                  { name: 'PM10', key: 'pm10', value: pollution.pm10, unit: 'μg/m³' },
                  { name: 'Ozone (O₃)', key: 'o3', value: pollution.o3, unit: 'μg/m³' },
                  { name: 'Nitrogen Dioxide', key: 'no2', value: pollution.no2, unit: 'μg/m³' }
                ].map((pollutant, index) => (
                  <div 
                    key={pollutant.key} 
                    className={`bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 cursor-pointer animate-fade-in hover:bg-light-blue/5 dark:hover:bg-light-blue/10 ${
                      selectedPollutant === pollutant.key ? 'ring-2 ring-light-blue shadow-md' : ''
                    }`}
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    onClick={() => setSelectedPollutant(selectedPollutant === pollutant.key ? null : pollutant.key)}
                  >
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1 flex items-center">
                      {getPollutantIcon(pollutant.key)}
                      {pollutant.name}
                    </div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{pollutant.value} {pollutant.unit}</div>
                    
                    {/* Progress bar */}
                    <div className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-full mt-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${selectedPollutant === pollutant.key ? aqiInfo.color : 'bg-light-blue'}`}
                        style={{ 
                          width: showAnimations ? `${getPercentage(pollutant.value, pollutant.key)}%` : '0%',
                          transition: 'width 1s ease-out'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - AQI Meter */}
            <div 
              className="md:w-1/2 flex flex-col items-center justify-center mb-4 md:mb-0"
              onMouseEnter={() => setIsAqiHovered(true)}
              onMouseLeave={() => setIsAqiHovered(false)}
              onClick={() => setSelectedPollutant(selectedPollutant === 'aqi' ? null : 'aqi')}
            >
              <div className={`relative h-48 w-48 transition-all duration-500 ${isAqiHovered || selectedPollutant === 'aqi' ? 'scale-110' : ''} cursor-pointer`}>
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  {/* Background arc */}
                  <path 
                    d="M30,150 A 70,70 0 0,1 170,150" 
                    stroke="#E5E7EB" 
                    strokeWidth="10" 
                    fill="none"
                    className="transition-all duration-300"
                  />
                  
                  {/* Colored arc based on AQI */}
                  <path 
                    d="M30,150 A 70,70 0 0,1 170,150" 
                    stroke="url(#aqiGradient)" 
                    strokeWidth="10" 
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset={showAnimations ? 220 - (pollution.aqi / 300 * 220) : 220}
                    className="transition-all duration-1500 ease-out"
                  />
                  
                  {/* Value labels */}
                  <text x="30" y="170" fontSize="10" fill="#6B7280" textAnchor="middle">0</text>
                  <text x="100" y="170" fontSize="10" fill="#6B7280" textAnchor="middle">150</text>
                  <text x="170" y="170" fontSize="10" fill="#6B7280" textAnchor="middle">300</text>
                  
                  {/* AQI indicator */}
                  <circle 
                    cx={30 + (pollution.aqi / 300) * 140} 
                    cy="150" 
                    r={isAqiHovered || selectedPollutant === 'aqi' ? "10" : "8"} 
                    className={`${aqiInfo.color} transition-all duration-300 ${isAqiHovered || selectedPollutant === 'aqi' ? 'animate-pulse' : ''}`}
                    style={{
                      transform: showAnimations ? 'scale(1)' : 'scale(0)',
                      transformOrigin: 'center',
                      transition: 'transform 0.5s ease-out 1.5s'
                    }}
                  />
                  
                  <defs>
                    <linearGradient id="aqiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="33%" stopColor="#FBBF24" />
                      <stop offset="66%" stopColor="#F97316" />
                      <stop offset="100%" stopColor="#EF4444" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-center w-full mt-4">
                  <div className={`text-4xl font-bold transition-all duration-300 ${isAqiHovered || selectedPollutant === 'aqi' ? aqiInfo.textColor : 'text-dark-blue dark:text-white'}`}>
                    {pollution.aqi}
                  </div>
                  <div className={`text-sm font-medium transition-all duration-300 ${isAqiHovered || selectedPollutant === 'aqi' ? aqiInfo.textColor : 'text-dark-gray dark:text-gray-400'}`}>
                    {aqiInfo.category}
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-center mt-2 font-medium text-dark-blue dark:text-white">
                Air Quality Index
              </div>
            </div>
          </div>
          
          {/* Description Box */}
          <div className={`mt-6 text-sm p-4 border rounded-lg transition-all duration-300 animate-fade-in ${
            selectedPollutant === 'aqi' ? `${aqiInfo.bgColor} ${aqiInfo.textColor} border-${aqiInfo.color}` :
            selectedPollutant ? 'bg-light-blue/5 border-light-blue/20 text-dark-gray dark:text-gray-300' :
            'bg-gray-50 dark:bg-gray-700/20 border-gray-100 dark:border-gray-700 text-dark-gray dark:text-gray-400'
          }`} style={{ animationDelay: '0.9s' }}>
            {selectedPollutant === 'aqi' ? (
              <div className="flex flex-col">
                <span className="font-medium mb-1">{aqiInfo.category} Air Quality</span>
                {getAqiDescription(pollution.aqi)}
              </div>
            ) : selectedPollutant ? (
              <>
                {selectedPollutant === 'pm25' && (
                  <>
                    <span className="font-medium flex items-center mb-1">
                      {getPollutantIcon('pm25')} Fine Particulate Matter
                    </span>
                    <p>PM2.5 are fine inhalable particles with diameters of 2.5 micrometers or smaller that can penetrate deep into the lungs and even enter the bloodstream, causing serious health problems.</p>
                  </>
                )}
                {selectedPollutant === 'pm10' && (
                  <>
                    <span className="font-medium flex items-center mb-1">
                      {getPollutantIcon('pm10')} Inhalable Particles
                    </span>
                    <p>PM10 are inhalable particles with diameters of 10 micrometers or smaller. These particles can irritate your eyes, nose, and throat and cause respiratory issues.</p>
                  </>
                )}
                {selectedPollutant === 'o3' && (
                  <>
                    <span className="font-medium flex items-center mb-1">
                      {getPollutantIcon('o3')} Ground-level Ozone
                    </span>
                    <p>Ground-level ozone forms when pollutants emitted by cars, power plants, and other sources chemically react in sunlight. It can trigger chest pain, coughing, throat irritation, and inflammation of the airway.</p>
                  </>
                )}
                {selectedPollutant === 'no2' && (
                  <>
                    <span className="font-medium flex items-center mb-1">
                      {getPollutantIcon('no2')} Nitrogen Dioxide
                    </span>
                    <p>Nitrogen dioxide primarily gets in the air from burning fuel. It can irritate the human respiratory system, aggravate respiratory diseases, and increase susceptibility to respiratory infections.</p>
                  </>
                )}
              </>
            ) : (
              <>
                <span className="font-medium mb-1">Current Air Quality Status</span>
                <p>{getAqiDescription(pollution.aqi)}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AirQuality; 