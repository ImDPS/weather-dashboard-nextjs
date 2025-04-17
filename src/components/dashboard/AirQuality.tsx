"use client";

import React from 'react';

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
  // Helper function to get AQI category and color
  const getAqiCategory = (aqi: number): { category: string; color: string } => {
    if (aqi < 50) {
      return { category: 'Good', color: 'bg-emerald-100 text-emerald-800' };
    } else if (aqi < 100) {
      return { category: 'Moderate', color: 'bg-yellow-100 text-yellow-800' };
    } else if (aqi < 150) {
      return { category: 'Unhealthy for Sensitive Groups', color: 'bg-orange-100 text-orange-800' };
    } else {
      return { category: 'Unhealthy', color: 'bg-red-100 text-red-800' };
    }
  };

  const aqiInfo = getAqiCategory(pollution.aqi);

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden ${className}`}>
      <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Air Quality</h2>
        <div className={`px-3 py-1 text-sm rounded-md ${aqiInfo.color}`}>
          AQI: {pollution.aqi}
        </div>
      </div>
      
      {isLoading ? (
        <div className="p-6">
          <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      ) : (
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">PM2.5</div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{pollution.pm25} μg/m³</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">PM10</div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{pollution.pm10} μg/m³</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Ozone (O₃)</div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{pollution.o3} μg/m³</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
              <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Nitrogen Dioxide</div>
              <div className="text-lg font-semibold text-dark-blue dark:text-white">{pollution.no2} μg/m³</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-dark-gray dark:text-gray-400">
            {pollution.aqi < 50 ? 'Air quality is good. Ideal for outdoor activities.' :
            pollution.aqi < 100 ? 'Air quality is moderate. Sensitive individuals should consider limiting prolonged outdoor exertion.' :
            pollution.aqi < 150 ? 'Air quality is unhealthy for sensitive groups. Limit outdoor activities if experiencing symptoms.' :
            'Air quality is unhealthy. Everyone should reduce outdoor activities, especially those with respiratory issues.'}
          </div>
        </div>
      )}
    </div>
  );
};

export default AirQuality; 