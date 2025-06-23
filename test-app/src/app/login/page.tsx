'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, Sparkles, Heart, Star, Eye, EyeOff } from 'lucide-react';
import { api } from '@/lib/api';

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.login(credentials);
      localStorage.setItem('token', response.access_token);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-50 via-yellow-50 to-red-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-16 w-28 h-28 bg-gradient-to-br from-orange-300 to-red-400 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-12 w-20 h-20 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-25"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -120, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-36 h-36 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-15"
          animate={{
            y: [0, -20, 0],
            scale: [1, 0.9, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-8 w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-orange-100"
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
                <Sparkles className="h-8 w-8 text-orange-600" />
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                  Laundry Express ✨
                </Link>
              </motion.div>
            </motion.div>
            <div className="flex items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/register" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-orange-600 hover:to-pink-600 shadow-lg transition-all duration-200">
                  Register 🚀
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-6xl">🔑</div>
          </motion.div>
          
          <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
            Welcome Back! 
          </h2>
          <p className="text-center text-gray-600 text-lg">
            Ready to make your clothes sparkle again? ✨
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="bg-white/80 backdrop-blur-sm py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 border border-white/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-orange-500" />
                  Email Address 📧
                </label>
                <motion.input
                  id="email"
                  type="email"
                  required
                  className="block w-full px-4 py-3 border-2 border-orange-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  whileFocus={{ scale: 1.02 }}
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-pink-500" />
                  Password 🔒
                </label>
                <div className="relative">
                  <motion.input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full px-4 py-3 pr-12 border-2 border-pink-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 bg-white/70 backdrop-blur-sm"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    whileFocus={{ scale: 1.02 }}
                    placeholder="••••••••"
                  />
                  <motion.button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-pink-400 hover:text-pink-600 transition-colors duration-200"
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
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.button
                  type="submit"
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 hover:from-orange-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    Sign In! 🚀
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
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="relative">
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-50 to-pink-50 text-gray-600 rounded-full border border-orange-200">
                    New to our laundry family? 👋 
                    <Link href="/register" className="font-bold text-orange-600 hover:text-pink-600 transition-colors duration-200 ml-1">
                      Join us now! ✨
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
        className="absolute bottom-10 left-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Star className="h-6 w-6 text-orange-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Heart className="h-8 w-8 text-pink-400 opacity-50" />
      </motion.div>
    </div>
  );
}
