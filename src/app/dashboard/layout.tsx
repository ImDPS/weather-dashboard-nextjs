"use client";

import React, { useState, ReactNode } from 'react';
import Link from 'next/link';

// Icons
import { RiDashboardLine, RiMapPinLine, RiCalendarLine, RiHistoryLine, RiAlertLine, RiSettings4Line, RiLogoutBoxLine } from 'react-icons/ri';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-md border-r border-gray-100 dark:border-gray-700 fixed h-full transition-all duration-300 ease-in-out z-20">
        {/* Logo and Toggle */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-light-blue to-sky-blue flex items-center justify-center text-white font-bold mr-2">
              W
            </div>
            <span className="text-dark-blue dark:text-white font-semibold text-lg">WeatherWise</span>
          </div>
          <button className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-dark-gray dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <div className="p-4">
          <h2 className="text-xs font-semibold text-dark-gray dark:text-gray-400 uppercase tracking-wider mb-3">
            Main Menu
          </h2>
          <nav className="space-y-1">
            <Link href="/dashboard" 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg bg-light-blue/10 text-light-blue">
              <RiDashboardLine className="mr-3 w-5 h-5" />
              Dashboard
            </Link>
            <Link href="/dashboard/map" 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-dark-blue dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors">
              <RiMapPinLine className="mr-3 w-5 h-5" />
              Weather Map
            </Link>
            <Link href="/dashboard/forecast" 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-dark-blue dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors">
              <RiCalendarLine className="mr-3 w-5 h-5" />
              Extended Forecast
            </Link>
            <Link href="/dashboard/history" 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-dark-blue dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors">
              <RiHistoryLine className="mr-3 w-5 h-5" />
              Historical Data
            </Link>
            <Link href="/dashboard/alerts" 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-dark-blue dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors">
              <RiAlertLine className="mr-3 w-5 h-5" />
              Weather Alerts
            </Link>
          </nav>
          
          <h2 className="text-xs font-semibold text-dark-gray dark:text-gray-400 uppercase tracking-wider mt-6 mb-3">
            Settings
          </h2>
          <nav className="space-y-1">
            <Link href="/dashboard/settings" 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-dark-blue dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors">
              <RiSettings4Line className="mr-3 w-5 h-5" />
              Preferences
            </Link>
            <button 
              className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-dark-blue dark:text-gray-300 hover:bg-light-blue/10 hover:text-light-blue dark:hover:bg-light-blue/10 dark:hover:text-light-blue transition-colors w-full text-left">
              <RiLogoutBoxLine className="mr-3 w-5 h-5" />
              Sign Out
            </button>
          </nav>
        </div>
        
        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-light-blue flex items-center justify-center text-white font-medium mr-3">
              JD
            </div>
            <div>
              <div className="text-sm font-medium text-dark-blue dark:text-white">John Doe</div>
              <div className="text-xs text-dark-gray dark:text-gray-400">Premium Account</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
}
