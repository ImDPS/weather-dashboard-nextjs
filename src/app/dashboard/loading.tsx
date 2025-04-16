import React from 'react';

export default function DashboardLoading() {
  return (
    <div className="min-h-screen flex flex-col animate-fade-in-up">
      {/* Main Content with curved sections and gradients */}
      <div className="space-y-6 pb-6">
        {/* Header Section - Clean and Minimal */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="h-8 w-56 bg-gradient-to-r from-light-blue to-sky-blue rounded-lg"></div>
            <div className="h-4 w-32 bg-gray-200/50 dark:bg-gray-700/30 rounded-md mt-2"></div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-gray-200/50 dark:bg-gray-700/30 rounded-full"></div>
            <div className="h-9 w-9 bg-gray-200/50 dark:bg-gray-700/30 rounded-full"></div>
            <div className="h-9 w-9 bg-gray-200/50 dark:bg-gray-700/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Top Section with Curved Background - Main Weather Card */}
        <div className="curved-section bg-gradient-to-br from-sky-blue/30 to-light-blue/10 pt-6 pb-16 -mx-4 px-4 rounded-b-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sunshine-yellow/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-light-blue/20 rounded-full blur-xl -mb-10"></div>
          
          <div className="max-w-5xl mx-auto">
            {/* Primary Weather Card */}
            <div className="flex lg:flex-row flex-col items-center bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-white/20">
              <div className="animate-float mr-6 flex items-center justify-center h-28 w-28 rounded-full bg-gradient-to-br from-sunshine-yellow/20 to-transparent">
                <div className="h-20 w-20 rounded-full bg-sunshine-yellow/30 animate-pulse-slow flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-sunshine-yellow/40"></div>
                </div>
              </div>
              
              <div className="space-y-3 w-full">
                <div className="flex items-end">
                  <div className="h-16 w-24 bg-gradient-to-r from-dark-blue/10 to-transparent rounded-lg"></div>
                  <div className="h-6 w-40 bg-gray-200/30 dark:bg-gray-700/20 rounded-md ml-4"></div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-24 bg-white/60 dark:bg-gray-700/30 rounded-full shadow-sm"></div>
                  <div className="h-8 w-24 bg-white/60 dark:bg-gray-700/30 rounded-full shadow-sm"></div>
                  <div className="h-8 w-24 bg-white/60 dark:bg-gray-700/30 rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Section - Weather Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-10 px-2 max-w-5xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-4 border border-white/20 animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center mb-3">
                <div className={`h-10 w-10 rounded-full mr-3 ${
                  i === 0 ? 'bg-rain-blue/20' : 
                  i === 1 ? 'bg-sunshine-yellow/20' : 
                  i === 2 ? 'bg-sunset-orange/20' : 
                  'bg-storm-blue/20'
                } flex items-center justify-center`}>
                  <div className={`h-5 w-5 rounded-full ${
                    i === 0 ? 'bg-rain-blue/40' : 
                    i === 1 ? 'bg-sunshine-yellow/40' : 
                    i === 2 ? 'bg-sunset-orange/40' : 
                    'bg-storm-blue/40'
                  }`}></div>
                </div>
                <div className="h-5 bg-gray-200/50 dark:bg-gray-700/30 rounded-md w-20"></div>
              </div>
              <div className="h-7 bg-gray-200/50 dark:bg-gray-700/30 rounded-md w-16 ml-2"></div>
            </div>
          ))}
        </div>
        
        {/* Temperature Curve Section */}
        <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 p-6 mt-6 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 bg-gradient-to-r from-light-blue to-sky-blue/50 rounded-md w-40"></div>
            <div className="flex space-x-2">
              <div className="h-8 w-8 bg-light-blue/10 rounded-full"></div>
              <div className="h-8 w-8 bg-light-blue/10 rounded-full"></div>
              <div className="h-8 w-8 bg-light-blue/10 rounded-full"></div>
            </div>
          </div>
          
          <div className="h-36 w-full relative">
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-700/30"></div>
            
            {/* Curve line */}
            <div className="absolute bottom-12 left-0 right-0 h-24">
              <svg className="w-full h-full" viewBox="0 0 500 100" preserveAspectRatio="none">
                <path 
                  d="M0,50 C100,20 200,80 300,50 C400,20 500,50 500,50" 
                  fill="none" 
                  stroke="url(#temperatureGradient)" 
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="temperatureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4A6FA5" />
                    <stop offset="50%" stopColor="#F9D77E" />
                    <stop offset="100%" stopColor="#F7A37B" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Dots on the curve */}
            <div className="absolute bottom-[44px] left-[60px] h-4 w-4 rounded-full bg-white border-2 border-storm-blue"></div>
            <div className="absolute bottom-[20px] left-[180px] h-4 w-4 rounded-full bg-white border-2 border-sunshine-yellow"></div>
            <div className="absolute bottom-[44px] left-[300px] h-4 w-4 rounded-full bg-white border-2 border-sky-blue"></div>
            <div className="absolute bottom-[36px] left-[420px] h-4 w-4 rounded-full bg-white border-2 border-sunset-orange"></div>
            
            {/* Time labels */}
            <div className="absolute bottom-0 left-[60px] transform -translate-x-1/2">
              <div className="h-4 w-16 bg-gray-200/40 dark:bg-gray-700/20 rounded-md"></div>
            </div>
            <div className="absolute bottom-0 left-[180px] transform -translate-x-1/2">
              <div className="h-4 w-16 bg-gray-200/40 dark:bg-gray-700/20 rounded-md"></div>
            </div>
            <div className="absolute bottom-0 left-[300px] transform -translate-x-1/2">
              <div className="h-4 w-16 bg-gray-200/40 dark:bg-gray-700/20 rounded-md"></div>
            </div>
            <div className="absolute bottom-0 left-[420px] transform -translate-x-1/2">
              <div className="h-4 w-16 bg-gray-200/40 dark:bg-gray-700/20 rounded-md"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Forecast Rows */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-white/20">
              <div className="h-6 bg-gradient-to-r from-light-blue to-sky-blue/50 rounded-md w-36 mb-6"></div>
              <div className="space-y-5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center animate-pulse-slow" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="h-6 w-14 bg-gray-200/50 dark:bg-gray-700/30 rounded-md"></div>
                    <div className="h-10 w-10 bg-gradient-to-br from-light-blue/20 to-sky-blue/10 rounded-full mx-6"></div>
                    <div className="flex-grow h-2 bg-gradient-to-r from-rain-blue/20 via-sunshine-yellow/20 to-sunset-orange/20 rounded-full"></div>
                    <div className="ml-6 flex items-center space-x-3">
                      <div className="h-6 w-12 bg-gray-200/50 dark:bg-gray-700/30 rounded-md"></div>
                      <div className="h-6 w-12 bg-gray-200/30 dark:bg-gray-700/20 rounded-md"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hourly Forecast */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-white/20">
              <div className="h-6 bg-gradient-to-r from-light-blue to-sky-blue/50 rounded-md w-32 mb-6"></div>
              <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex-shrink-0 animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="h-4 bg-gray-200/50 dark:bg-gray-700/30 rounded-md w-10 mb-3 mx-auto"></div>
                    <div className="h-12 w-12 bg-gradient-to-br from-sunshine-yellow/20 to-transparent rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="h-8 w-8 bg-sunshine-yellow/30 rounded-full"></div>
                    </div>
                    <div className="h-5 bg-gray-200/50 dark:bg-gray-700/30 rounded-md w-12 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {/* Weather Map Preview */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden border border-white/20">
              <div className="px-5 py-4 border-b border-gray-100/50 dark:border-gray-700/50 flex justify-between items-center">
                <div className="h-5 bg-gradient-to-r from-light-blue to-sky-blue/50 rounded-md w-28"></div>
                <div className="h-4 bg-light-blue/10 dark:bg-light-blue/5 rounded-md w-16"></div>
              </div>
              <div className="h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-light-blue/20 via-sky-blue/10 to-white/80 dark:from-light-blue/20 dark:via-sky-blue/10 dark:to-gray-800/80"></div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-light-blue/20 animate-pulse-slow flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-light-blue/40 animate-ping"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent dark:from-gray-800/60 dark:to-transparent"></div>
              </div>
            </div>
            
            {/* Weather Insights */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-sm p-6 border border-white/20">
              <div className="h-6 bg-gradient-to-r from-light-blue to-sky-blue/50 rounded-md w-36 mb-6"></div>
              <div className="space-y-4">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="p-3 bg-gradient-to-r from-light-blue/5 to-transparent dark:from-light-blue/5 dark:to-transparent rounded-lg animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }}>
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-light-blue/20 dark:bg-light-blue/10 rounded-full mr-3 flex items-center justify-center">
                        <div className="h-4 w-4 bg-light-blue/40 dark:bg-light-blue/30 rounded-full"></div>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <div className="h-4 bg-gray-200/50 dark:bg-gray-700/30 rounded-md w-1/3"></div>
                        <div className="h-3 bg-gray-200/30 dark:bg-gray-700/20 rounded-md w-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
