import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiPlus, FiClock, FiUser, FiMapPin, FiPhone, FiMail, FiEdit3, FiTrash2 } = FiIcons;

const BookingsAppPage = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [showNewBooking, setShowNewBooking] = useState(false);

  const bookings = [
    {
      id: 1,
      client: 'John Smith',
      service: 'Business Consultation',
      time: '09:00 AM',
      duration: '1 hour',
      status: 'confirmed',
      phone: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      notes: 'First-time consultation about marketing strategy',
    },
    {
      id: 2,
      client: 'Sarah Johnson',
      service: 'Project Review',
      time: '02:00 PM',
      duration: '45 minutes',
      status: 'pending',
      phone: '+1 (555) 987-6543',
      email: 'sarah.j@company.com',
      notes: 'Quarterly project review meeting',
    },
    {
      id: 3,
      client: 'Mike Wilson',
      service: 'Strategy Session',
      time: '04:30 PM',
      duration: '1.5 hours',
      status: 'confirmed',
      phone: '+1 (555) 456-7890',
      email: 'mike.wilson@startup.com',
      notes: 'Discuss growth strategy for Q2',
    },
  ];

  const stats = [
    { label: 'Today\'s Bookings', value: '3', color: 'text-primary-600' },
    { label: 'This Week', value: '12', color: 'text-success-600' },
    { label: 'Pending', value: '1', color: 'text-warning-600' },
    { label: 'Total Revenue', value: '$2,450', color: 'text-purple-600' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success-100 text-success-800';
      case 'pending':
        return 'bg-warning-100 text-warning-800';
      case 'cancelled':
        return 'bg-error-100 text-error-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">MB Bookings</h1>
          <p className="mt-2 text-gray-600">
            Manage your appointments and bookings efficiently
          </p>
        </div>
        <button
          onClick={() => setShowNewBooking(true)}
          className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          <SafeIcon icon={FiPlus} className="h-4 w-4 mr-2" />
          New Booking
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
              </div>
              <SafeIcon icon={FiCalendar} className={`h-8 w-8 ${stat.color}`} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-soft"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Today's Schedule</h2>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {bookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-medium transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <SafeIcon icon={FiUser} className="h-5 w-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{booking.client}</h3>
                          <p className="text-sm text-gray-500">{booking.service}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <SafeIcon icon={FiEdit3} className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-error-600">
                          <SafeIcon icon={FiTrash2} className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiClock} className="h-4 w-4 mr-2" />
                        {booking.time} ({booking.duration})
                      </div>
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiPhone} className="h-4 w-4 mr-2" />
                        {booking.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <SafeIcon icon={FiMail} className="h-4 w-4 mr-2" />
                        {booking.email}
                      </div>
                    </div>
                    
                    {booking.notes && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">{booking.notes}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                <SafeIcon icon={FiPlus} className="h-4 w-4 mr-2" />
                New Booking
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <SafeIcon icon={FiCalendar} className="h-4 w-4 mr-2" />
                View Calendar
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <SafeIcon icon={FiIcons.FiSettings} className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-soft p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Team Meeting</p>
                  <p className="text-xs text-gray-500">Tomorrow at 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-success-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Client Presentation</p>
                  <p className="text-xs text-gray-500">Wednesday at 2:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 bg-warning-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Project Review</p>
                  <p className="text-xs text-gray-500">Friday at 11:00 AM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingsAppPage;