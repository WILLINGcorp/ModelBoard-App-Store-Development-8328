import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import AppStorePage from './pages/AppStorePage';
import AppDetailPage from './pages/AppDetailPage';
import BookingsAppPage from './pages/BookingsAppPage';
import './App.css';

function App() {
  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gray-50"
      >
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app-store" element={<AppStorePage />} />
            <Route path="/app-store/:appId" element={<AppDetailPage />} />
            <Route path="/apps/bookings" element={<BookingsAppPage />} />
          </Routes>
        </Layout>
      </motion.div>
    </Router>
  );
}

export default App;