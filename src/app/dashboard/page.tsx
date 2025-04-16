"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  currentWeather, 
  hourlyForecast, 
  dailyForecast, 
  weatherAlerts,
  weatherInsights
} from '@/mocks/weather-data';

// Components
import WeatherCard from '@/components/dashboard/WeatherCard';
import HourlyForecast from '@/components/dashboard/HourlyForecast';
import DailyForecast from '@/components/dashboard/DailyForecast';
import WeatherMap from '@/components/dashboard/WeatherMap';
import WeatherAlerts from '@/components/dashboard/WeatherAlerts';
import WeatherInsights from '@/components/dashboard/WeatherInsights';
import WeatherDetailsCard from '@/components/dashboard/WeatherDetailsCard';

export default function DashboardPage() {
  // State for weather data loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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
              <button className="p-2 rounded-full bg-light-blue/10 hover:bg-light-blue/20 text-light-blue transition-colors shadow-sm">
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
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
        {weatherAlerts.length > 0 && !isLoading && (
          <div className="mb-8">
            <WeatherAlerts alerts={weatherAlerts} />
          </div>
        )}
        
        {/* Main Weather Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Current Weather Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
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
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Weather</h2>
                    <p className="text-dark-gray dark:text-gray-400 text-sm">Current conditions</p>
                  </div>
                  <div className="text-3xl font-bold text-dark-blue dark:text-white">{currentWeather.temperature}°C</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Humidity</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{currentWeather.humidity}%</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Wind</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{currentWeather.wind.speed} km/h</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Precipitation</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{currentWeather.chanceOfRain}%</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Pressure</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{currentWeather.pressure} hPa</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* 7-Day Forecast Activity */}
          <div className="col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
            {isLoading ? (
              <div className="p-6">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-40 mb-4"></div>
                  <div className="space-y-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mr-4"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-6 mr-4"></div>
                        <div className="flex-grow h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12 ml-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-dark-blue dark:text-white">7-Day Forecast</h2>
                  <div className="flex space-x-1">
                    <button className="px-3 py-1 text-sm bg-light-blue text-white rounded-md">Weekly</button>
                    <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-dark-gray dark:text-gray-300 rounded-md">Monthly</button>
                  </div>
                </div>
                
                <div className="space-y-6 relative">
                  {/* Progress Line */}
                  <div className="absolute left-[60px] top-4 bottom-4 w-[2px] bg-gray-100 dark:bg-gray-700"></div>
                  
                  {dailyForecast.slice(0, 5).map((day, index) => (
                    <div key={index} className="flex items-center relative">
                      <div className="w-14 text-sm text-dark-gray dark:text-gray-400 mr-4">{day.day}</div>
                      <div className={`w-8 h-8 rounded-full z-10 flex items-center justify-center 
                        ${day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow/20 text-sunshine-yellow' : 
                          day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray/20 text-cloudy-gray' : 
                          day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue/20 text-rain-blue' : 
                          'bg-light-blue/20 text-light-blue'}`}
                      >
                        <div className={`w-4 h-4 rounded-full 
                          ${day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow' : 
                            day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray' : 
                            day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue' : 
                            'bg-light-blue'}`}
                        ></div>
                      </div>
                      <div className="ml-4 flex-grow">
                        <div className="text-sm font-medium text-dark-blue dark:text-white">{day.condition}</div>
                        <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              day.condition.toLowerCase().includes('sun') ? 'bg-sunshine-yellow' : 
                              day.condition.toLowerCase().includes('cloud') ? 'bg-cloudy-gray' : 
                              day.condition.toLowerCase().includes('rain') ? 'bg-rain-blue' : 
                              'bg-light-blue'
                            }`}
                            style={{ width: `${(day.high / 40) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 w-16 text-right">
                        <span className="text-sm font-medium text-dark-blue dark:text-white">{day.high}°</span>
                        <span className="text-sm text-dark-gray dark:text-gray-400 ml-1">{day.low}°</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Other Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Water Level - Chart Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">
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
                    d="M0,60 C25,40 50,70 75,50 C100,30 125,45 150,55 C175,65 200,20 225,30 C250,40 275,50 300,45" 
                    fill="none" 
                    stroke="url(#tempGradient)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  
                  {/* Data Points */}
                  <circle cx="0" cy="60" r="3" fill="#7AB2D8" />
                  <circle cx="75" cy="50" r="3" fill="#7AB2D8" />
                  <circle cx="150" cy="55" r="3" fill="#F9D77E" />
                  <circle cx="225" cy="30" r="3" fill="#F7A37B" />
                  <circle cx="300" cy="45" r="3" fill="#F7A37B" />
                </svg>
                
                {/* Time Markers */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-dark-gray dark:text-gray-400">
                  <div>9AM</div>
                  <div>12PM</div>
                  <div>3PM</div>
                  <div>6PM</div>
                  <div>9PM</div>
                </div>
              </div>
            )}
          </div>
          
          {/* Weather Insights */}
          <div className="col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-dark-blue dark:text-white mb-6">Weather Insights</h2>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {weatherInsights.map((insight, index) => (
                  <div key={index} className="flex">
                    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-3 ${
                      insight.type.toLowerCase().includes('summary') ? 'bg-light-blue/10 text-light-blue' :
                      insight.type.toLowerCase().includes('clothing') ? 'bg-sunshine-yellow/10 text-sunshine-yellow' :
                      insight.type.toLowerCase().includes('activity') ? 'bg-sunset-orange/10 text-sunset-orange' :
                      'bg-storm-blue/10 text-storm-blue'
                    }`}>
                      {insight.type.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-dark-blue dark:text-white">{insight.type}</h3>
                      <p className="text-sm text-dark-gray dark:text-gray-400 mt-1">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Weather Map */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden">
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
            <div className="h-64 relative">
              <WeatherMap isPreview={true} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
