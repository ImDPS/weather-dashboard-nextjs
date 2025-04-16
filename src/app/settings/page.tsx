"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  // Theme state
  const [theme, setTheme] = useState('system'); // light, dark, system
  
  // Temperature unit state
  const [tempUnit, setTempUnit] = useState('celsius');
  
  // Default Location
  const [defaultLocation, setDefaultLocation] = useState('');
  
  // Notification preferences
  const [notifications, setNotifications] = useState(true);
  
  // Save state
  const [saved, setSaved] = useState(false);
  
  const handleSave = () => {
    // Logic to save settings would go here
    setSaved(true);
    
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Settings</h1>
      
      <div className="space-y-6">
        {/* Units Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Units</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Temperature</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className={`flex items-center justify-center px-4 py-2 rounded-md ${
                    tempUnit === "celsius" 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                  onClick={() => setTempUnit("celsius")}
                >
                  Celsius (°C)
                </button>
                <button
                  className={`flex items-center justify-center px-4 py-2 rounded-md ${
                    tempUnit === "fahrenheit" 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                  onClick={() => setTempUnit("fahrenheit")}
                >
                  Fahrenheit (°F)
                </button>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Location Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Default Location</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location</label>
              <input
                type="text"
                className="px-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Enter city or zip code"
                value={defaultLocation}
                onChange={(e) => setDefaultLocation(e.target.value)}
              />
            </div>
            <Button 
              className="mt-2"
              onClick={() => {
                // Logic to use current location would go here
                navigator.geolocation?.getCurrentPosition(
                  () => {
                    // In a real app, we'd convert coordinates to a city name
                    setDefaultLocation("Current Location");
                  },
                  () => {
                    alert("Unable to access your location. Please enter manually.");
                  }
                );
              }}
            >
              Use Current Location
            </Button>
          </div>
        </Card>

        {/* Notification Preferences */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Weather Alerts</span>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer">
                <input
                  type="checkbox"
                  id="toggle"
                  className="absolute w-0 h-0 opacity-0"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
                <label
                  htmlFor="toggle"
                  className={`block w-12 h-6 rounded-full ${
                    notifications ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  <span
                    className={`absolute left-1 top-1 w-4 h-4 transition duration-200 ease-in-out transform bg-white rounded-full ${
                      notifications ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </label>
              </div>
            </div>
          </div>
        </Card>

        {/* Theme Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Theme</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <button
                className={`flex items-center justify-center px-4 py-2 rounded-md ${
                  theme === "light" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setTheme("light")}
              >
                Light
              </button>
              <button
                className={`flex items-center justify-center px-4 py-2 rounded-md ${
                  theme === "dark" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
              <button
                className={`flex items-center justify-center px-4 py-2 rounded-md ${
                  theme === "system" 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setTheme("system")}
              >
                System
              </button>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button onClick={handleSave} className="px-6">
            {saved ? "Saved!" : "Save Settings"}
          </Button>
        </div>
      </div>
    </div>
  );
}
