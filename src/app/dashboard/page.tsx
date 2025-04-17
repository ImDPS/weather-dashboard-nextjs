"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  chhattisgarh_cities, 
  DEFAULT_CITY_ID, 
  getCityById, 
  chhattisgarh_alerts,
  getWeatherInsights 
} from '@/mocks/chhattisgarh-data';

// Components
import LocationFilter from '@/components/dashboard/LocationFilter';
import CurrentWeather from '@/components/dashboard/CurrentWeather';
import WeeklyForecast from '@/components/dashboard/WeeklyForecast';
import HourlyTemperature from '@/components/dashboard/HourlyTemperature';
import WeatherInsights from '@/components/dashboard/WeatherInsights';
import AirQuality from '@/components/dashboard/AirQuality';
import WeatherMap from '@/components/dashboard/WeatherMap';
import WeatherAlert from '@/components/dashboard/WeatherAlert';

export default function DashboardPage() {
  // State for weather data loading
  const [isLoading, setIsLoading] = useState(true);
  // State for selected city
  const [selectedCityId, setSelectedCityId] = useState(DEFAULT_CITY_ID);
  
  // Get the selected city data
  const selectedCity = getCityById(selectedCityId);
  const cityInsights = getWeatherInsights(selectedCityId);

  // Handle city change
  const handleCityChange = (cityId: number) => {
    setSelectedCityId(cityId);
  };

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Find alerts for the current district
  const currentAlert = chhattisgarh_alerts.find(
    alert => selectedCity.district && alert.affectedAreas.includes(selectedCity.district)
  );

  return (
    <div className="min-h-screen flex flex-col animate-fade-in-up relative">
      {/* Decorative background elements - updated to match landing page */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-blue/5 dark:bg-sky-blue/10 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <path d="M46,230 C146,307 287,261 341,171 C395,81 343,28 284,58 C225,88 178,171 102,187 C26,203 -54,153 46,230 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sky-blue dark:text-light-blue" />
            <path d="M128,144 C100,187 122,250 178,277 C234,304 297,252 332,181 C367,110 341,19 255,42 C169,65 156,101 128,144 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sky-blue dark:text-light-blue" />
            <path d="M78,274 C134,177 228,207 287,139 C346,71 340,4 266,33 C192,62 156,165 78,274 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-sky-blue dark:text-light-blue" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8">
        {/* Welcome Section with improved contrast */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-dark-blue dark:text-white">Welcome back!</h1>
              <p className="text-dark-gray dark:text-gray-300 mt-1">
                {isLoading ? (
                  <div className="h-5 bg-gray-200/50 dark:bg-gray-700/30 rounded w-40 animate-pulse"></div>
                ) : (
                  <>{new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</>
                )}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Location Filter */}
              <LocationFilter selectedCityId={selectedCityId} onCityChange={handleCityChange} />
              
              <button className="p-2 rounded-full bg-light-blue/10 hover:bg-light-blue/20 text-light-blue transition-colors shadow-sm">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center text-white shadow-sm">
                <span>JD</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Weather Alerts Banner (conditionally displayed) */}
        {currentAlert && !isLoading && (
          <div className="mb-8">
            <WeatherAlert alert={currentAlert} />
          </div>
        )}
        
        {/* Main Weather Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Current Weather Card */}
          <CurrentWeather 
            city={selectedCity} 
            isLoading={isLoading} 
          />
          
          {/* 7-Day Forecast Activity */}
          <WeeklyForecast 
            forecast={selectedCity.dailyForecast} 
            isLoading={isLoading} 
            className="col-span-2"
          />
        </div>
        
        {/* Other Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Hourly Temperature Chart */}
          <HourlyTemperature 
            hourlyData={selectedCity.hourlyForecast} 
            isLoading={isLoading} 
          />
          
          {/* Weather Insights */}
          <WeatherInsights 
            insights={cityInsights} 
            isLoading={isLoading}
            className="col-span-2" 
          />
        </div>

        {/* Air Quality Section */}
        <AirQuality 
          pollution={selectedCity.pollution} 
          isLoading={isLoading}
          className="mb-8" 
        />

        {/* Weather Map */}
        <WeatherMap 
          cities={chhattisgarh_cities} 
          selectedCityId={selectedCityId} 
          onCityChange={handleCityChange}
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
}
