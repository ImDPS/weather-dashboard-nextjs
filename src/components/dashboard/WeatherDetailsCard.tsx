import React, { ReactNode } from 'react';

interface WeatherDetailsCardProps {
  title: string;
  value: string;
  subValue?: string;
  icon: ReactNode;
  isLoading?: boolean;
}

const WeatherDetailsCard: React.FC<WeatherDetailsCardProps> = ({ 
  title, 
  value,
  subValue,
  icon,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-6 bg-gray-300 rounded w-2/3 mb-1"></div>
        {subValue && <div className="h-4 bg-gray-300 rounded w-1/3"></div>}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 transition-transform hover:scale-105 duration-300">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center text-dark-gray dark:text-gray-400 text-sm">
          {icon}
          <span className="ml-1">{title}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-semibold text-dark-blue dark:text-white">{value}</span>
        {subValue && (
          <span className="text-xs text-dark-gray dark:text-gray-400 mt-1">{subValue}</span>
        )}
      </div>
    </div>
  );
};

export default WeatherDetailsCard; 