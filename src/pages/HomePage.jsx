import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGrid, FiCalendar, FiTrendingUp, FiUsers, FiArrowRight } = FiIcons;

const HomePage = () => {
  const stats = [
    { name: 'Active Apps', value: '1', icon: FiGrid, color: 'text-primary-600' },
    { name: 'Total Bookings', value: '247', icon: FiCalendar, color: 'text-success-600' },
    { name: 'Growth Rate', value: '+12%', icon: FiTrendingUp, color: 'text-warning-600' },
    { name: 'Active Users', value: '1,234', icon: FiUsers, color: 'text-error-600' },
  ];

  const quickActions = [
    {
      title: 'Browse App Store',
      description: 'Discover and install new business applications',
      href: '/app-store',
      icon: FiGrid,
      color: 'bg-primary-500',
    },
    {
      title: 'Open MB Bookings',
      description: 'Manage your appointments and bookings',
      href: '/apps/bookings',
      icon: FiCalendar,
      color: 'bg-success-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to MB Business - Your professional app ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white overflow-hidden shadow-soft rounded-xl"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <SafeIcon
                    icon={stat.icon}
                    className={`h-8 w-8 ${stat.color}`}
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-soft rounded-xl"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <Link
                  key={action.title}
                  to={action.href}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className={`p-3 rounded-lg ${action.color} mr-4`}>
                    <SafeIcon icon={action.icon} className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{action.title}</h4>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                  <SafeIcon
                    icon={FiArrowRight}
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white shadow-soft rounded-xl"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-success-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">MB Bookings app installed</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">New booking received</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-warning-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">System update available</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;