// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Bell, User } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`h-16 shadow-md flex items-center justify-between px-6 fixed top-0 right-0 left-20 z-10 transition-colors duration-200
      ${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">SuperMart POS</h1>
        <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>|</span>
        <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Register #1</span>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-end">
          <span className="text-lg font-semibold">
            {currentTime.toLocaleTimeString()}
          </span>
          <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className={`h-6 w-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center
              ${isDark ? 'bg-gray-700' : 'bg-indigo-100'}`}>
              <User className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-indigo-600'}`} />
            </div>
            <div className="text-sm">
              <div className="font-medium">John Doe</div>
              <div className={isDark ? 'text-gray-400' : 'text-gray-500'}>Cashier</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
