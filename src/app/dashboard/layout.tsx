"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-light-gray dark:bg-gray-900 overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`bg-sidebar text-sidebar-foreground ${
          isSidebarOpen ? 'w-64' : 'w-16'
        } transition-all duration-300 flex flex-col border-r border-sidebar-border`}
      >
        {/* Logo */}
        <div className="p-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-blue flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v7"></path>
                <path d="M12 22v-3"></path>
                <path d="M4.93 4.93l4.24 4.24"></path>
                <path d="M14.83 14.83l4.24 4.24"></path>
                <path d="M2 12h3"></path>
                <path d="M19 12h3"></path>
                <path d="M4.93 19.07l4.24-4.24"></path>
                <path d="M14.83 9.17l4.24-4.24"></path>
              </svg>
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl">WeatherDash</span>
            )}
          </Link>
          <button 
            className="text-sidebar-foreground p-1 rounded-md hover:bg-sidebar-border"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isSidebarOpen ? (
                <path d="M15 18l-6-6 6-6" />
              ) : (
                <path d="M9 18l6-6-6-6" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          <Link href="/dashboard" 
            className={`flex items-center p-2 rounded-md ${
              pathname === "/dashboard" ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'hover:bg-sidebar-border'
            } transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {isSidebarOpen && <span className="ml-3">Dashboard</span>}
          </Link>
          
          <Link href="/dashboard/map" 
            className={`flex items-center p-2 rounded-md ${
              pathname === "/dashboard/map" ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'hover:bg-sidebar-border'
            } transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            {isSidebarOpen && <span className="ml-3">Weather Map</span>}
          </Link>
          
          <Link href="/dashboard/forecast" 
            className={`flex items-center p-2 rounded-md ${
              pathname === "/dashboard/forecast" ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'hover:bg-sidebar-border'
            } transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {isSidebarOpen && <span className="ml-3">Extended Forecast</span>}
          </Link>
          
          <Link href="/dashboard/history" 
            className={`flex items-center p-2 rounded-md ${
              pathname === "/dashboard/history" ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'hover:bg-sidebar-border'
            } transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isSidebarOpen && <span className="ml-3">Historical Data</span>}
          </Link>
          
          <Link href="/dashboard/alerts" 
            className={`flex items-center p-2 rounded-md ${
              pathname === "/dashboard/alerts" ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'hover:bg-sidebar-border'
            } transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {isSidebarOpen && <span className="ml-3">Weather Alerts</span>}
          </Link>
        </nav>
        
        {/* Bottom Section */}
        <div className="p-2 border-t border-sidebar-border">
          <Link href="/settings" 
            className={`flex items-center p-2 rounded-md hover:bg-sidebar-border transition-colors ${!isSidebarOpen && 'justify-center'}`}
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {isSidebarOpen && <span className="ml-3">Settings</span>}
          </Link>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm h-16 flex items-center justify-between px-4 border-b border-medium-gray dark:border-gray-700">
          {/* Location Search */}
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="search" 
              className="block w-full py-2 pl-10 pr-3 text-sm border-gray-300 rounded-md dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-light-blue" 
              placeholder="Search for location..."
            />
          </div>
          
          {/* Right Side Items */}
          <div className="flex items-center ml-4 space-x-4">
            {/* Theme Toggle */}
            <button 
              className="p-2 text-gray-500 rounded-full hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            
            {/* Notifications */}
            <button 
              className="p-2 text-gray-500 rounded-full hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            {/* Profile Menu */}
            <div className="relative">
              <button 
                className="flex items-center focus:outline-none"
                onClick={toggleProfileMenu}
              >
                <div className="w-8 h-8 rounded-full bg-light-blue text-white flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 border border-medium-gray dark:border-gray-700">
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </Link>
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Profile
                  </Link>
                  <Link href="/help" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Help
                  </Link>
                  <div className="border-t border-gray-200 dark:border-gray-700"></div>
                  <Link href="/sign-out" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light-gray dark:bg-gray-900 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
