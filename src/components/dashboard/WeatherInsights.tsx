import React from 'react';
import type { WeatherInsight } from '@/types/weather';

interface WeatherInsightsProps {
  insights: WeatherInsight[];
}

const WeatherInsights: React.FC<WeatherInsightsProps> = ({ insights }) => {
  // Helper function to get insight icon based on type
  const getInsightIcon = (type: string): React.ReactNode => {
    if (type.toLowerCase().includes('summary')) {
      return (
        <svg className="w-5 h-5 text-light-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    if (type.toLowerCase().includes('clothing')) {
      return (
        <svg className="w-5 h-5 text-sunshine-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    }
    
    if (type.toLowerCase().includes('activity')) {
      return (
        <svg className="w-5 h-5 text-sunset-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    if (type.toLowerCase().includes('energy')) {
      return (
        <svg className="w-5 h-5 text-storm-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    
    return (
      <svg className="w-5 h-5 text-light-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
  };
  
  // Helper function to get insight background color based on type
  const getInsightGradient = (type: string): string => {
    if (type.toLowerCase().includes('summary')) {
      return 'from-light-blue/10 to-white dark:from-light-blue/10 dark:to-gray-800';
    }
    
    if (type.toLowerCase().includes('clothing')) {
      return 'from-sunshine-yellow/10 to-white dark:from-sunshine-yellow/10 dark:to-gray-800';
    }
    
    if (type.toLowerCase().includes('activity')) {
      return 'from-sunset-orange/10 to-white dark:from-sunset-orange/10 dark:to-gray-800';
    }
    
    if (type.toLowerCase().includes('energy')) {
      return 'from-storm-blue/10 to-white dark:from-storm-blue/10 dark:to-gray-800';
    }
    
    return 'from-light-blue/10 to-white dark:from-light-blue/10 dark:to-gray-800';
  };

  return (
    <div className="space-y-4">
      {insights.map(insight => (
        <div 
          key={insight.id} 
          className={`bg-gradient-to-br ${getInsightGradient(insight.type)} rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md`}
        >
          <div className="flex items-start space-x-3">
            <div className="mt-0.5">
              {getInsightIcon(insight.type)}
            </div>
            <div>
              <h3 className="font-medium text-dark-blue dark:text-white">{insight.type}</h3>
              <p className="text-dark-gray dark:text-gray-300 text-sm mt-1">{insight.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex items-center justify-center pt-2">
        <button className="text-light-blue text-sm hover:underline focus:outline-none flex items-center">
          <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh Insights
        </button>
      </div>
    </div>
  );
};

export default WeatherInsights; 