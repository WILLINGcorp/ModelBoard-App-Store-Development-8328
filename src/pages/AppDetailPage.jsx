import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiStar, FiDownload, FiCheck, FiArrowLeft, FiShield, FiSmartphone, FiMonitor } = FiIcons;

const AppDetailPage = () => {
  const { appId } = useParams();

  const app = {
    id: 'mb-bookings',
    name: 'MB Bookings',
    developer: 'ModelBoard',
    category: 'business',
    description: 'Complete booking and appointment management system for professionals. Streamline your scheduling process with advanced features including calendar integration, automated reminders, and comprehensive reporting.',
    longDescription: `MB Bookings is a comprehensive appointment management solution designed specifically for professionals and businesses. With its intuitive interface and powerful features, you can easily manage your schedule, track appointments, and provide excellent customer service.

Key features include:
• Advanced calendar management with multiple view options
• Automated email and SMS reminders
• Client management and history tracking
• Customizable booking forms and services
• Real-time availability checking
• Comprehensive reporting and analytics
• Integration with popular calendar applications
• Mobile-responsive design for on-the-go management

Whether you're a consultant, healthcare provider, service professional, or run a business with appointment-based services, MB Bookings provides all the tools you need to manage your schedule efficiently and professionally.`,
    rating: 4.9,
    downloads: '10K+',
    price: 'Free',
    icon: FiCalendar,
    installed: true,
    featured: true,
    screenshots: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    ],
    version: '2.1.0',
    size: '12.5 MB',
    compatibility: ['Web', 'Mobile'],
    permissions: ['Calendar Access', 'Notifications', 'Contact Management'],
    lastUpdated: '2024-01-15',
  };

  const features = [
    {
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that prevents double bookings and optimizes your calendar',
      icon: FiCalendar,
    },
    {
      title: 'Client Management',
      description: 'Comprehensive client profiles with booking history and preferences',
      icon: FiIcons.FiUsers,
    },
    {
      title: 'Automated Reminders',
      description: 'Reduce no-shows with automated email and SMS reminder notifications',
      icon: FiIcons.FiBell,
    },
    {
      title: 'Reporting & Analytics',
      description: 'Detailed insights into your booking patterns and business performance',
      icon: FiIcons.FiBarChart3,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center">
        <Link
          to="/app-store"
          className="mr-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <SafeIcon icon={FiArrowLeft} className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">App Details</h1>
          <p className="mt-2 text-gray-600">
            Learn more about {app.name} and its features
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 bg-primary-500 rounded-xl flex items-center justify-center mr-6">
                <SafeIcon icon={app.icon} className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold text-gray-900">{app.name}</h2>
                  {app.installed && (
                    <div className="flex items-center text-success-600 bg-success-50 px-3 py-1 rounded-full">
                      <SafeIcon icon={FiCheck} className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Installed</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 mb-3">{app.developer}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{app.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiDownload} className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-gray-500">{app.downloads}</span>
                  </div>
                  <span className="text-primary-600 font-medium">{app.price}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium">
                {app.installed ? 'Open Application' : 'Install Now'}
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">{app.description}</p>
            
            <div className="whitespace-pre-line text-gray-600">
              {app.longDescription}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={feature.title} className="flex items-start">
                  <div className="h-10 w-10 bg-primary-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <SafeIcon icon={feature.icon} className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {app.screenshots.map((screenshot, index) => (
                <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={screenshot}
                    alt={`${app.name} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">App Information</h3>
            <div className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Version</dt>
                <dd className="text-sm text-gray-900">{app.version}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Size</dt>
                <dd className="text-sm text-gray-900">{app.size}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="text-sm text-gray-900 capitalize">{app.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                <dd className="text-sm text-gray-900">{app.lastUpdated}</dd>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Compatibility</h3>
            <div className="space-y-3">
              {app.compatibility.map((platform, index) => (
                <div key={platform} className="flex items-center">
                  <SafeIcon
                    icon={platform === 'Web' ? FiMonitor : FiSmartphone}
                    className="h-4 w-4 text-gray-400 mr-3"
                  />
                  <span className="text-sm text-gray-900">{platform}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Permissions</h3>
            <div className="space-y-3">
              {app.permissions.map((permission, index) => (
                <div key={permission} className="flex items-center">
                  <SafeIcon icon={FiShield} className="h-4 w-4 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-900">{permission}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppDetailPage;