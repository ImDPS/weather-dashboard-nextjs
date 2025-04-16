"use client";

import React, { useState, useEffect } from 'react';
import { chhattisgarh_cities } from '@/mocks/chhattisgarh-data';

interface LocationFilterProps {
  selectedCityId: number;
  onCityChange: (cityId: number) => void;
}

const LocationFilter: React.FC<LocationFilterProps> = ({ selectedCityId, onCityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get the currently selected city
  const selectedCity = chhattisgarh_cities.find(city => city.id === selectedCityId) || chhattisgarh_cities[0];
  
  // Filter cities based on search term
  const filteredCities = searchTerm 
    ? chhattisgarh_cities.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        city.district.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : chhattisgarh_cities;
  
  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.location-filter')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleCitySelect = (cityId: number) => {
    onCityChange(cityId);
    setIsOpen(false);
    setSearchTerm('');
  };
  
  return (
    <div className="location-filter relative">
      {/* Selected city button */}
      <button 
        className="flex items-center bg-white dark:bg-gray-800 text-dark-blue dark:text-white p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <svg className="w-5 h-5 text-light-blue mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="mr-2">{selectedCity.name}</span>
          <span className="text-dark-gray dark:text-gray-400 text-sm">{selectedCity.district}</span>
        </div>
        <svg className="w-4 h-4 ml-2 text-dark-gray dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 z-20">
          {/* Search input */}
          <div className="p-2 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-8 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-700 border-0 rounded-md text-dark-blue dark:text-white placeholder-dark-gray dark:placeholder-gray-400 focus:ring-1 focus:ring-light-blue outline-none"
                placeholder="Search for a city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-2.5 top-2.5 w-4 h-4 text-dark-gray dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Cities list */}
          <div className="max-h-60 overflow-y-auto scrollbar-hide p-1">
            {filteredCities.length > 0 ? (
              filteredCities.map(city => (
                <button
                  key={city.id}
                  className={`flex items-center justify-between w-full px-3 py-2 text-left text-sm rounded-md ${
                    city.id === selectedCityId 
                      ? 'bg-light-blue/10 text-light-blue' 
                      : 'text-dark-blue dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => handleCitySelect(city.id)}
                >
                  <div className="flex items-center">
                    <span className="font-medium">{city.name}</span>
                    <span className="ml-2 text-xs text-dark-gray dark:text-gray-400">{city.district}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-xs text-dark-gray dark:text-gray-400 mr-1">
                      {city.currentWeather.temperature}°C
                    </span>
                    <div className={`w-2 h-2 rounded-full ${
                      city.currentWeather.condition.toLowerCase().includes('sunny') ? 'bg-sunshine-yellow' :
                      city.currentWeather.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray' :
                      city.currentWeather.condition.toLowerCase().includes('rain') ? 'bg-rain-blue' :
                      'bg-light-blue'
                    }`}></div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-dark-gray dark:text-gray-400 text-center">
                No cities found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationFilter; 