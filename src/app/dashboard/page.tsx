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
        {chhattisgarh_alerts.length > 0 && !isLoading && selectedCity.district && 
          chhattisgarh_alerts.some(alert => alert.affectedAreas.includes(selectedCity.district)) && (
            <div className="mb-8">
              <div className="bg-sunset-orange/10 border border-sunset-orange/20 text-sunset-orange rounded-xl p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">
                      {chhattisgarh_alerts.find(alert => alert.affectedAreas.includes(selectedCity.district))?.title || "Weather Alert"}
                    </h3>
                    <p className="mt-1 text-sm">
                      {chhattisgarh_alerts.find(alert => alert.affectedAreas.includes(selectedCity.district))?.description || ""}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        
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
                    <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Weather in {selectedCity.name}</h2>
                    <p className="text-dark-gray dark:text-gray-400 text-sm">{selectedCity.currentWeather.condition}</p>
                  </div>
                  <div className="text-3xl font-bold text-dark-blue dark:text-white">{selectedCity.currentWeather.temperature}°C</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Humidity</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.currentWeather.humidity}%</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Wind</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.currentWeather.wind.speed} km/h</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Precipitation</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.currentWeather.chanceOfRain}%</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                    <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Pressure</div>
                    <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.currentWeather.pressure} hPa</div>
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
                  
                  {selectedCity.dailyForecast.slice(0, 5).map((day, index) => (
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
          {/* Hourly Temperature Chart */}
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
                    d={`M0,${100 - (selectedCity.hourlyForecast[0].temperature - 25) * 5} 
                      C${60},${100 - (selectedCity.hourlyForecast[1].temperature - 25) * 5} 
                      ${120},${100 - (selectedCity.hourlyForecast[2].temperature - 25) * 5} 
                      ${180},${100 - (selectedCity.hourlyForecast[3].temperature - 25) * 5} 
                      C${240},${100 - (selectedCity.hourlyForecast[3].temperature - 25) * 5} 
                      ${270},${100 - (selectedCity.hourlyForecast[4].temperature - 25) * 5} 
                      ${300},${100 - (selectedCity.hourlyForecast[4].temperature - 25) * 5}`}
                    fill="none" 
                    stroke="url(#tempGradient)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  
                  {/* Data Points */}
                  {selectedCity.hourlyForecast.map((hour, index) => (
                    <circle 
                      key={index} 
                      cx={index * 75} 
                      cy={100 - (hour.temperature - 25) * 5} 
                      r="3" 
                      fill={index < 2 ? "#7AB2D8" : index < 3 ? "#F9D77E" : "#F7A37B"} 
                    />
                  ))}
                </svg>
                
                {/* Time Markers */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-dark-gray dark:text-gray-400">
                  {selectedCity.hourlyForecast.map((hour, index) => (
                    <div key={index}>{hour.time}</div>
                  ))}
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
                {cityInsights.map((insight, index) => (
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

        {/* Air Quality Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden mb-8">
          <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-dark-blue dark:text-white">Air Quality</h2>
            <div className={`px-3 py-1 text-sm rounded-md ${
              selectedCity.pollution.aqi < 50 ? 'bg-emerald-100 text-emerald-800' :
              selectedCity.pollution.aqi < 100 ? 'bg-yellow-100 text-yellow-800' :
              selectedCity.pollution.aqi < 150 ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              AQI: {selectedCity.pollution.aqi}
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
                  <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.pollution.pm25} μg/m³</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">PM10</div>
                  <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.pollution.pm10} μg/m³</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Ozone (O₃)</div>
                  <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.pollution.o3} μg/m³</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                  <div className="text-sm text-dark-gray dark:text-gray-400 mb-1">Nitrogen Dioxide</div>
                  <div className="text-lg font-semibold text-dark-blue dark:text-white">{selectedCity.pollution.no2} μg/m³</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-dark-gray dark:text-gray-400">
                {selectedCity.pollution.aqi < 50 ? 'Air quality is good. Ideal for outdoor activities.' :
                selectedCity.pollution.aqi < 100 ? 'Air quality is moderate. Sensitive individuals should consider limiting prolonged outdoor exertion.' :
                selectedCity.pollution.aqi < 150 ? 'Air quality is unhealthy for sensitive groups. Limit outdoor activities if experiencing symptoms.' :
                'Air quality is unhealthy. Everyone should reduce outdoor activities, especially those with respiratory issues.'}
              </div>
            </div>
          )}
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
            <div className="h-64 relative bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Simple placeholder for Chhattisgarh Map */}
                <div className="relative w-full h-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center text-dark-gray dark:text-gray-400 p-4">
                    <p className="text-xl font-semibold mb-2">Chhattisgarh Weather Map</p>
                    <p className="text-sm">Interactive map coming soon</p>
                  </div>
                  
                  {/* City Markers */}
                  {chhattisgarh_cities.map((city) => (
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
                      onClick={() => handleCityChange(city.id)}
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
      </div>
    </div>
  );
}
