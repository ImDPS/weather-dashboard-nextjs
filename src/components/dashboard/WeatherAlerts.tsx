import React, { useState } from 'react';
import type { WeatherAlert } from '@/types/weather';

interface WeatherAlertsProps {
  alerts: WeatherAlert[];
}

const WeatherAlerts: React.FC<WeatherAlertsProps> = ({ alerts }) => {
  const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([]);
  const [expandedAlerts, setExpandedAlerts] = useState<number[]>([]);
  
  const dismissAlert = (id: number) => {
    setDismissedAlerts([...dismissedAlerts, id]);
  };
  
  const toggleAlert = (id: number) => {
    if (expandedAlerts.includes(id)) {
      setExpandedAlerts(expandedAlerts.filter(alertId => alertId !== id));
    } else {
      setExpandedAlerts([...expandedAlerts, id]);
    }
  };
  
  // Filter out dismissed alerts
  const activeAlerts = alerts.filter(alert => !dismissedAlerts.includes(alert.id));
  
  if (activeAlerts.length === 0) {
    return null;
  }
  
  // Helper function to get alert background color based on severity
  const getAlertBackground = (severity: string): string => {
    switch (severity.toLowerCase()) {
      case 'extreme':
        return 'bg-destructive/10 border-destructive';
      case 'severe':
        return 'bg-sunset-orange/10 border-sunset-orange';
      case 'moderate':
        return 'bg-sunshine-yellow/10 border-sunshine-yellow';
      case 'minor':
        return 'bg-light-blue/10 border-light-blue';
      default:
        return 'bg-light-blue/10 border-light-blue';
    }
  };
  
  // Helper function to get alert icon based on type
  const getAlertIcon = (type: string): React.ReactNode => {
    if (type.toLowerCase().includes('thunderstorm')) {
      return (
        <svg className="w-5 h-5 text-sunshine-yellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    
    if (type.toLowerCase().includes('flood')) {
      return (
        <svg className="w-5 h-5 text-rain-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    }
    
    if (type.toLowerCase().includes('storm') || type.toLowerCase().includes('wind')) {
      return (
        <svg className="w-5 h-5 text-storm-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    }
    
    return (
      <svg className="w-5 h-5 text-dark-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
  };

  return (
    <div className="space-y-3">
      {activeAlerts.map(alert => (
        <div 
          key={alert.id} 
          className={`border-l-4 rounded-lg overflow-hidden transition-all duration-300 ${getAlertBackground(alert.severity)}`}
        >
          <div className="p-4 bg-white dark:bg-gray-800">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <div className="mr-3 mt-0.5">
                  {getAlertIcon(alert.type)}
                </div>
                <div>
                  <div className="flex items-center">
                    <h3 className="font-semibold text-dark-blue dark:text-white mr-2">
                      {alert.type}
                    </h3>
                    <span 
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        alert.severity === 'Extreme' ? 'bg-destructive text-white' :
                        alert.severity === 'Severe' ? 'bg-sunset-orange text-white' :
                        alert.severity === 'Moderate' ? 'bg-sunshine-yellow text-dark-gray' :
                        'bg-light-blue text-white'
                      }`}
                    >
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-dark-gray dark:text-gray-300 text-sm mt-1">
                    {expandedAlerts.includes(alert.id) ? 
                      alert.description : 
                      `${alert.description.substring(0, 120)}${alert.description.length > 120 ? '...' : ''}`
                    }
                  </p>
                  <div className="flex items-center text-xs text-dark-gray dark:text-gray-400 mt-2 space-x-4">
                    <span>Issued: {alert.issuedAt}</span>
                    <span>Expires: {alert.expiresAt}</span>
                    {alert.description.length > 120 && (
                      <button 
                        className="text-light-blue hover:underline"
                        onClick={() => toggleAlert(alert.id)}
                      >
                        {expandedAlerts.includes(alert.id) ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </div>
                  {expandedAlerts.includes(alert.id) && (
                    <div className="mt-2 text-dark-gray dark:text-gray-300 text-sm">
                      <p className="font-medium">Affected Areas:</p>
                      <p>{alert.areas}</p>
                    </div>
                  )}
                </div>
              </div>
              <button 
                onClick={() => dismissAlert(alert.id)}
                className="text-dark-gray dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                aria-label="Dismiss alert"
              >
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherAlerts; 