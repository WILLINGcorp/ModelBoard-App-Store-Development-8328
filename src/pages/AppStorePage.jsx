import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiSearch, FiFilter, FiStar, FiDownload, FiCheck } = FiIcons;

const AppStorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Apps' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'business', name: 'Business' },
    { id: 'communication', name: 'Communication' },
    { id: 'analytics', name: 'Analytics' },
  ];

  const apps = [
    {
      id: 'mb-bookings',
      name: 'MB Bookings',
      developer: 'ModelBoard',
      category: 'business',
      description: 'Complete booking and appointment management system for professionals',
      rating: 4.9,
      downloads: '10K+',
      price: 'Free',
      icon: FiCalendar,
      installed: true,
      featured: true,
      screenshots: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400',
      ],
    },
    {
      id: 'mb-analytics',
      name: 'MB Analytics',
      developer: 'ModelBoard',
      category: 'analytics',
      description: 'Advanced analytics and reporting tools for your business data',
      rating: 4.7,
      downloads: '5K+',
      price: '$9.99/month',
      icon: FiIcons.FiBarChart3,
      installed: false,
      featured: false,
    },
    {
      id: 'mb-messenger',
      name: 'MB Messenger',
      developer: 'ModelBoard',
      category: 'communication',
      description: 'Secure messaging and communication platform for teams',
      rating: 4.8,
      downloads: '15K+',
      price: 'Free',
      icon: FiIcons.FiMessageCircle,
      installed: false,
      featured: true,
    },
  ];

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredApps = apps.filter(app => app.featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900">App Store</h1>
        <p className="mt-2 text-gray-600">
          Discover and install business applications to enhance your ModelBoard experience
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <SafeIcon
              icon={FiSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SafeIcon icon={FiFilter} className="h-5 w-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {featuredApps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-primary-500 rounded-xl flex items-center justify-center mr-4">
                      <SafeIcon icon={app.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-500">{app.developer}</p>
                    </div>
                    {app.installed && (
                      <div className="flex items-center text-success-600">
                        <SafeIcon icon={FiCheck} className="h-4 w-4 mr-1" />
                        <span className="text-sm">Installed</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {app.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{app.rating}</span>
                      </div>
                      <span className="text-gray-400 mx-2">•</span>
                      <div className="flex items-center">
                        <SafeIcon icon={FiDownload} className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{app.downloads}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-primary-600">{app.price}</span>
                  </div>
                  
                  <Link
                    to={`/app-store/${app.id}`}
                    className="block w-full bg-primary-500 text-white text-center py-2 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    {app.installed ? 'Open' : 'Install'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          All Apps ({filteredApps.length})
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {filteredApps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow"
            >
              <div className="flex items-center">
                <div className="h-16 w-16 bg-primary-500 rounded-xl flex items-center justify-center mr-6">
                  <SafeIcon icon={app.icon} className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{app.name}</h3>
                    {app.installed && (
                      <div className="flex items-center text-success-600">
                        <SafeIcon icon={FiCheck} className="h-4 w-4 mr-1" />
                        <span className="text-sm">Installed</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{app.developer}</p>
                  <p className="text-gray-600 mb-3">{app.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{app.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <SafeIcon icon={FiDownload} className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{app.downloads}</span>
                      </div>
                      <span className="text-sm font-medium text-primary-600">{app.price}</span>
                    </div>
                    <Link
                      to={`/app-store/${app.id}`}
                      className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                    >
                      {app.installed ? 'Open' : 'Install'}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AppStorePage;