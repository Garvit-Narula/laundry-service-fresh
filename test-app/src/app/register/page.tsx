'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone, Sparkles, Zap, Star, Eye, EyeOff } from 'lucide-react';
import { api } from '@/lib/api';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    phone_number: '',
    is_admin: false
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.register(formData);
      router.push('/login');
    } catch (err: any) {
      // Extract the specific error message from the backend
      const errorMessage = err.message || 'Registration failed. Please try again.';
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-16 left-12 w-32 h-32 bg-gradient-to-br from-teal-300 to-blue-400 rounded-full opacity-20"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 120, 240],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-28 right-16 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-25"
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            rotate: [0, -150, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div
          className="absolute bottom-24 left-1/4 w-40 h-40 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full opacity-15"
          animate={{
            y: [0, -30, 0],
            scale: [1, 0.8, 1],
            rotate: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
        <motion.div
          className="absolute top-1/3 right-12 w-28 h-28 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full opacity-30"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-teal-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="h-8 w-8 text-teal-600" />
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Laundry Express ✨
                </Link>
              </motion.div>
            </motion.div>
            <div className="flex items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-teal-600 hover:to-blue-600 shadow-lg transition-all duration-200">
                  Login 🔑
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center py-8 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-6xl">🎉</div>
          </motion.div>
          
          <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Join Our Family! 
          </h2>
          <p className="text-center text-gray-600 text-lg">
            Start your amazing laundry journey with us! 🌟
          </p>
        </motion.div>

        <motion.div 
          className="mt-6 sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="bg-white/80 backdrop-blur-sm py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 border border-white/50"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-teal-500" />
                  Email Address 📧
                </label>
                <motion.input
                  id="email"
                  type="email"
                  required
                  className="block w-full px-4 py-3 border-2 border-teal-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  whileFocus={{ scale: 1.02 }}
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="full_name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2 text-blue-500" />
                  Full Name 👤
                </label>
                <motion.input
                  id="full_name"
                  type="text"
                  required
                  className="block w-full px-4 py-3 border-2 border-blue-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  whileFocus={{ scale: 1.02 }}
                  placeholder="Your awesome name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="phone_number" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-indigo-500" />
                  Phone Number 📱
                </label>
                <motion.input
                  id="phone_number"
                  type="tel"
                  required
                  className="block w-full px-4 py-3 border-2 border-indigo-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                  value={formData.phone_number}
                  onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                  whileFocus={{ scale: 1.02 }}
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-purple-500" />
                  Password 🔒
                </label>
                <div className="relative">
                  <motion.input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full px-4 py-3 pr-12 border-2 border-purple-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    whileFocus={{ scale: 1.02 }}
                    placeholder="••••••••"
                  />
                  <motion.button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-purple-400 hover:text-purple-600 transition-colors duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </motion.button>
                </div>
              </motion.div>

              {error && (
                <motion.div 
                  className="text-red-600 text-sm bg-red-50 p-3 rounded-2xl border border-red-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ⚠️ {error}
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <motion.button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 hover:from-teal-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    Join the Magic! 🎉
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </form>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 text-gray-600 rounded-full border border-teal-200">
                    Already part of our family? 👋 
                    <Link href="/login" className="font-bold text-teal-600 hover:text-blue-600 transition-colors duration-200 ml-1">
                      Welcome back! ✨
                    </Link>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-8 left-8"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star className="h-6 w-6 text-teal-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-24 right-24"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Zap className="h-8 w-8 text-blue-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-8"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Sparkles className="h-7 w-7 text-purple-400 opacity-40" />
      </motion.div>
    </div>
  );
}
