import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHome, FiGrid, FiCalendar, FiBarChart3, FiSettings, FiHelpCircle } = FiIcons;

const navigation = [
  { name: 'Dashboard', href: '/', icon: FiHome },
  { name: 'App Store', href: '/app-store', icon: FiGrid },
  { name: 'MB Bookings', href: '/apps/bookings', icon: FiCalendar },
  { name: 'Analytics', href: '/analytics', icon: FiBarChart3 },
];

const secondaryNavigation = [
  { name: 'Settings', href: '/settings', icon: FiSettings },
  { name: 'Help', href: '/help', icon: FiHelpCircle },
];

const Sidebar = () => {
  const location = useLocation();

  const NavItem = ({ item, isActive }) => (
    <Link
      to={item.href}
      className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
        isActive
          ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
      }`}
    >
      <SafeIcon
        icon={item.icon}
        className={`mr-3 h-5 w-5 transition-colors ${
          isActive ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'
        }`}
      />
      {item.name}
    </Link>
  );

  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex md:flex-shrink-0"
    >
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 mb-8">
              <div className="h-8 w-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MB</span>
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">Business</span>
            </div>
            
            <nav className="flex-1 px-3 space-y-1">
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={location.pathname === item.href}
                />
              ))}
            </nav>
          </div>
          
          <div className="flex-shrink-0 border-t border-gray-200 p-3">
            <nav className="space-y-1">
              {secondaryNavigation.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={location.pathname === item.href}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;