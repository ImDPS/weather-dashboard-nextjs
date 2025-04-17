"use client";

import React, { useState } from 'react';
import { 
  WiDaySunny, 
  WiUmbrella, 
  WiStrongWind, 
  WiThermometer, 
  WiDayCloudyGusts
} from 'react-icons/wi';

interface InsightType {
  type: string;
  description: string;
}

interface WeatherInsightsProps {
  insights: InsightType[];
  isLoading: boolean;
  className?: string;
}

const WeatherInsights: React.FC<WeatherInsightsProps> = ({ 
  insights, 
  isLoading,
  className = '' 
}) => {
  const [expandedInsight, setExpandedInsight] = useState<number | null>(null);

  // Get icon based on insight type
  const getInsightIcon = (type: string) => {
    const typeLower = type.toLowerCase();
    if (typeLower.includes('summary')) {
      return <WiDaySunny className="w-6 h-6" />;
    } else if (typeLower.includes('clothing')) {
      return <WiThermometer className="w-6 h-6" />;
    } else if (typeLower.includes('activity')) {
      return <WiUmbrella className="w-6 h-6" />;
    } else if (typeLower.includes('travel')) {
      return <WiStrongWind className="w-6 h-6" />;
    } else {
      return <WiDayCloudyGusts className="w-6 h-6" />;
    }
  };

  // Handle card click
  const toggleInsight = (index: number) => {
    if (expandedInsight === index) {
      setExpandedInsight(null);
    } else {
      setExpandedInsight(index);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 ${className} transition-all duration-300 hover:shadow-lg`}>
      <h2 className="text-lg font-semibold text-dark-blue dark:text-white mb-6 animate-fade-in">Weather Insights</h2>
      
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
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className={`flex bg-gray-50 dark:bg-gray-700/30 rounded-xl p-3 transition-all duration-300 cursor-pointer animate-fade-in hover:shadow-md ${
                expandedInsight === index ? 'ring-2 ring-light-blue shadow-md' : 'hover:bg-light-blue/5 dark:hover:bg-light-blue/10'
              }`} 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleInsight(index)}
            >
              <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-3 transition-all duration-300 ${
                insight.type.toLowerCase().includes('summary') ? 'bg-light-blue/10 text-light-blue' :
                insight.type.toLowerCase().includes('clothing') ? 'bg-sunshine-yellow/10 text-sunshine-yellow' :
                insight.type.toLowerCase().includes('activity') ? 'bg-sunset-orange/10 text-sunset-orange' :
                'bg-storm-blue/10 text-storm-blue'
              } ${expandedInsight === index ? 'scale-110' : ''}`}>
                {getInsightIcon(insight.type)}
              </div>
              <div className="flex-1">
                <h3 className={`text-sm font-medium text-dark-blue dark:text-white transition-all duration-200 ${expandedInsight === index ? 'text-light-blue' : ''}`}>
                  {insight.type}
                </h3>
                <p className={`text-sm text-dark-gray dark:text-gray-400 mt-1 transition-all duration-300 ${
                  expandedInsight === index ? 'max-h-32' : 'line-clamp-2'
                }`}>
                  {insight.description}
                </p>
                {expandedInsight === index && (
                  <button 
                    className="mt-2 text-xs text-light-blue hover:text-sky-blue transition-colors duration-200 animate-fade-in flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedInsight(null);
                    }}
                  >
                    Read less
                    <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                )}
                {expandedInsight !== index && insight.description.length > 120 && (
                  <button 
                    className="mt-1 text-xs text-light-blue hover:text-sky-blue transition-colors duration-200 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedInsight(index);
                    }}
                  >
                    Read more
                    <svg className="w-3 h-3 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherInsights; 