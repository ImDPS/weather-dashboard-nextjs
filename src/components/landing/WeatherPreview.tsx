"use client"

import Image from 'next/image';
import { WiThermometer, WiHumidity, WiStrongWind } from 'react-icons/wi';

const mockForecast = [
  {
    day: 'Today',
    condition: 'Sunny',
    icon: '/weather-sunny.svg',
    high: '32°C',
    low: '24°C'
  },
  {
    day: 'Tomorrow',
    condition: 'Partly Cloudy',
    icon: '/weather-partly-cloudy.svg',
    high: '30°C',
    low: '23°C'
  },
  {
    day: 'Wednesday',
    condition: 'Rainy',
    icon: '/weather-rain.svg',
    high: '28°C',
    low: '22°C'
  }
];

const WeatherPreview = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="text-center mb-12">
        <h2 className="text-header-l font-bold text-neutral-black mb-4">Experience Our Dashboard</h2>
        <p className="text-body text-dark-gray max-w-2xl mx-auto">
          Get a preview of our intuitive weather dashboard with real-time data visualization.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Dashboard Header */}
          <div className="bg-dark-blue text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-light-blue flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-medium">Weather Dashboard</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-small">Raipur, CG</span>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="p-6">
            {/* Top Section with Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Current Weather Card */}
              <div className="bg-[#C2E0E8] rounded-xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-[#1C1C1C] font-medium mb-2">Current Weather</h4>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">32°C</span>
                    <span className="text-[#565656]">Sunny</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image 
                    src="/weather-sunny.svg" 
                    width={60} 
                    height={60} 
                    alt="Sunny weather icon"
                  />
                </div>
              </div>
              
              {/* Air Quality Card */}
              <div className="bg-[#E8F6C2] rounded-xl p-4">
                <h4 className="text-[#1C1C1C] font-medium mb-2">Air Quality</h4>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">42</span>
                    <span className="text-[#565656]">Good</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">AQI</span>
                  </div>
                </div>
              </div>
              
              {/* Forecast Summary Card */}
              <div className="bg-[#C2CEF8] rounded-xl p-4">
                <h4 className="text-[#1C1C1C] font-medium mb-2">Weekly Overview</h4>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold">30°C</span>
                    <span className="text-[#565656]">Avg. Temp</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-12 bg-blue-200 rounded-full" style={{height: '30px'}}></div>
                    <div className="w-1 h-12 bg-blue-300 rounded-full" style={{height: '24px'}}></div>
                    <div className="w-1 h-12 bg-blue-400 rounded-full" style={{height: '36px'}}></div>
                    <div className="w-1 h-12 bg-blue-300 rounded-full" style={{height: '32px'}}></div>
                    <div className="w-1 h-12 bg-blue-200 rounded-full" style={{height: '28px'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Weather Details & Forecast Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Weather Details */}
              <div className="bg-white rounded-xl border border-[#D3D3D3] p-4">
                <h4 className="text-[#1C1C1C] font-medium mb-4">Weather Details</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                      <WiHumidity className="text-[#565656] text-2xl" />
                    </div>
                    <div>
                      <p className="text-[#565656] text-sm">Humidity</p>
                      <p className="font-medium">55%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                      <WiThermometer className="text-[#565656] text-2xl" />
                    </div>
                    <div>
                      <p className="text-[#565656] text-sm">Pressure</p>
                      <p className="font-medium">1013 hPa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F3] flex items-center justify-center">
                      <WiStrongWind className="text-[#565656] text-2xl" />
                    </div>
                    <div>
                      <p className="text-[#565656] text-sm">Wind</p>
                      <p className="font-medium">12 km/h</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 3-Day Forecast */}
              <div className="bg-white rounded-xl border border-[#D3D3D3] p-4">
                <h4 className="text-[#1C1C1C] font-medium mb-4">3-Day Forecast</h4>
                <div className="grid grid-cols-3 gap-2">
                  {mockForecast.map((day, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <p className="font-medium text-sm">{day.day}</p>
                      <div className="my-1">
                        <Image 
                          src={day.icon} 
                          width={36} 
                          height={36} 
                          alt={day.condition}
                        />
                      </div>
                      <p className="text-xs text-[#565656]">{day.condition}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="font-medium text-xs">{day.high}</span>
                        <span className="text-[#565656] text-xs">{day.low}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Dashboard Preview Label */}
            <div className="mt-6 bg-gray-50 rounded-md p-3 text-center">
              <span className="text-sm text-gray-500">This is a preview. Sign up for full dashboard access with interactive maps and real-time updates.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherPreview; 