import React from 'react';

interface WeatherMapProps {
  isPreview?: boolean;
}

const WeatherMap: React.FC<WeatherMapProps> = ({ isPreview = false }) => {
  // In a real implementation, this would be a map integration like Google Maps, Mapbox, etc.
  // For this mockup, we're displaying a placeholder with controls
  return (
    <div className="relative w-full h-full">
      {/* Static Map Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-blue/30 to-white dark:from-light-blue/20 dark:to-gray-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center text-dark-gray dark:text-gray-400">
            <div className="text-center">
              {isPreview ? (
                <>
                  <svg className="w-10 h-10 mx-auto mb-2 text-light-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-sm font-medium">Interactive Weather Map</p>
                </>
              ) : (
                <span className="text-xl font-medium">Weather Map Loading...</span>
              )}
            </div>
          </div>
        </div>
        
        {/* Map location markers - simplified for mockup */}
        <div className="absolute left-1/3 top-1/2 w-4 h-4 bg-light-blue rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute w-8 h-8 bg-light-blue/30 rounded-full animate-ping"></div>
        </div>
      </div>
      
      {/* Map Controls - not functional in this mockup */}
      {!isPreview && (
        <>
          <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-md p-2 space-y-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-dark-gray dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 text-dark-gray dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center divide-x divide-gray-200 dark:divide-gray-700">
              <button className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span className="text-xs text-dark-gray dark:text-gray-300">Temperature</span>
              </button>
              <button className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span className="text-xs text-dark-gray dark:text-gray-300">Precipitation</span>
              </button>
              <button className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span className="text-xs text-dark-gray dark:text-gray-300">Wind</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherMap; 