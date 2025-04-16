"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-light-blue flex items-center justify-center">
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
              <span className="font-bold text-xl">WeatherDash</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-sky-blue transition-colors">Home</Link>
            <Link href="/features" className="hover:text-sky-blue transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-sky-blue transition-colors">Pricing</Link>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/signin" className="hover:text-sky-blue transition-colors">Sign In</Link>
            <Link 
              href="/signup" 
              className="bg-light-blue px-4 py-2 rounded-sm hover:bg-[#619fca] transition-colors"
            >
              Sign Up
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-blue border-t border-[#3a4754] py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="block hover:text-sky-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/features" 
              className="block hover:text-sky-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/pricing" 
              className="block hover:text-sky-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/signin" 
              className="block hover:text-sky-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className="inline-block bg-light-blue px-4 py-2 rounded-sm hover:bg-[#619fca] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 