"use client";

import React from 'react';

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
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6 ${className}`}>
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
          {insights.map((insight, index) => (
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
  );
};

export default WeatherInsights; 