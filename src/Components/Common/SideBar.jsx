// components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ShoppingCart, Package, Plus, Users, 
  Activity, Settings, BarChart, Sun, Moon 
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

const menuItems = [
  { id: 'pos', name: 'Point of Sale', icon: ShoppingCart, path: '/' },
  { id: 'inventory', name: 'Inventory', icon: Package, path: '/inventory' },
  { id: 'add-items', name: 'Add Items', icon: Plus, path: '/add-items' },
  { id: 'employees', name: 'Employees', icon: Users, path: '/employees' },
  { id: 'reports', name: 'Reports', icon: Activity, path: '/reports' },
  { id: 'analytics', name: 'Analytics', icon: BarChart, path: '/analytics' },
  { id: 'settings', name: 'Settings', icon: Settings, path: '/settings' }
];

const Sidebar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`w-20 flex flex-col items-center py-6 h-screen fixed left-0 transition-colors duration-200 
      ${isDark ? 'bg-gray-900 text-white' : 'bg-indigo-600 text-white'}`}>
      {menuItems.map(item => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) => `
            p-3 rounded-xl mb-4 w-16 flex flex-col items-center transition-colors duration-200
            ${isActive 
              ? (isDark ? 'bg-gray-800' : 'bg-indigo-800')
              : (isDark ? 'hover:bg-gray-800' : 'hover:bg-indigo-700')}
          `}
        >
          <item.icon className="h-6 w-6 mb-1" />
          <span className="text-xs text-center">{item.name}</span>
        </NavLink>
      ))}
      
      <button
        onClick={toggleTheme}
        className={`p-3 rounded-xl mt-auto w-16 flex flex-col items-center transition-colors duration-200
          ${isDark ? 'hover:bg-gray-800' : 'hover:bg-indigo-700'}`}
      >
        {isDark ? (
          <Sun className="h-6 w-6 mb-1" />
        ) : (
          <Moon className="h-6 w-6 mb-1" />
        )}
        <span className="text-xs text-center">
          {isDark ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
};

export default Sidebar;