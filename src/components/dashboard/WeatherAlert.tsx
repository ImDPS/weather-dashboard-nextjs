"use client";

import React from 'react';

interface AlertType {
  id: number;
  type: string;
  severity: string;
  title: string;
  description: string;
  issuedAt: Date;
  expiresAt: Date;
  affectedAreas: string[];
}

interface WeatherAlertProps {
  alert: AlertType;
  className?: string;
}

const WeatherAlert: React.FC<WeatherAlertProps> = ({ alert, className = '' }) => {
  return (
    <div className={`bg-sunset-orange/10 border border-sunset-orange/20 text-sunset-orange rounded-xl p-4 ${className}`}>
      <div className="flex items-start">
        <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <div>
          <h3 className="font-medium">{alert.title}</h3>
          <p className="mt-1 text-sm">{alert.description}</p>
          <div className="mt-2 flex items-center text-xs">
            <span className="px-2 py-0.5 bg-sunset-orange/20 rounded-full mr-2">{alert.severity}</span>
            <span className="mr-2">Valid until: {new Date(alert.expiresAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlert; 