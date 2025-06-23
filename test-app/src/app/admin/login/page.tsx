'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Lock, Sparkles, Crown, Shield, Eye, EyeOff, Star } from 'lucide-react';
import { api } from '@/lib/api';

export default function AdminLogin() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await api.adminLogin(credentials);
      localStorage.setItem('adminToken', response.access_token);
      localStorage.setItem('isAdmin', 'true');
      router.push('/admin/dashboard');
    } catch (err: any) {
      setError(err.message || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-32 right-12 w-24 h-24 bg-gradient-to-br from-gold-400 to-amber-500 rounded-full opacity-15"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full opacity-8"
          animate={{
            y: [0, -30, 0],
            scale: [1, 0.8, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div
          className="absolute top-1/2 right-8 w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-12"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="bg-black/40 backdrop-blur-md shadow-2xl border-b border-amber-500/20"
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
                <Crown className="h-8 w-8 text-amber-400" />
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Admin Portal 👑
                </Link>
              </motion.div>
            </motion.div>
            <div className="flex items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login" className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold hover:from-amber-600 hover:to-yellow-600 shadow-lg transition-all duration-200">
                  User Login 🚀
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
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-6xl">👑</div>
          </motion.div>
          
          <h2 className="text-center text-4xl font-extrabold bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
            Admin Access 
          </h2>
          <p className="text-center text-gray-300 text-lg">
            Secure portal for system administrators 🛡️
          </p>
        </motion.div>

        <motion.div 
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="bg-black/40 backdrop-blur-sm py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 border border-amber-500/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label htmlFor="username" className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2 text-amber-400" />
                  Admin Username 👤
                </label>
                <motion.input
                  id="username"
                  type="text"
                  required
                  className="block w-full px-4 py-3 border-2 border-amber-500/30 rounded-2xl shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-all duration-200 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  whileFocus={{ scale: 1.02 }}
                  placeholder="admin"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label htmlFor="password" className="block text-sm font-bold text-gray-200 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-yellow-400" />
                  Admin Password 🔐
                </label>
                <div className="relative">
                  <motion.input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full px-4 py-3 pr-12 border-2 border-yellow-500/30 rounded-2xl shadow-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200 bg-black/30 backdrop-blur-sm text-white placeholder-gray-400"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    whileFocus={{ scale: 1.02 }}
                    placeholder="••••••••"
                  />
                  <motion.button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
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
                  className="text-red-400 text-sm bg-red-900/30 p-3 rounded-2xl border border-red-500/30 backdrop-blur-sm"
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
                  disabled={loading}
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 hover:from-amber-500 hover:via-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                >
                  <span className="flex items-center">
                    {loading ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Authenticating...
                      </>
                    ) : (
                      <>
                        Access Admin Portal! 👑
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </>
                    )}
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
                  <span className="px-4 py-2 bg-gradient-to-r from-slate-800/50 to-purple-900/50 text-gray-300 rounded-full border border-amber-500/20 backdrop-blur-sm">
                    Need user access? 👋 
                    <Link href="/login" className="font-bold text-amber-400 hover:text-yellow-400 transition-colors duration-200 ml-1">
                      User Login ✨
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
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Star className="h-6 w-6 text-amber-400 opacity-60" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Shield className="h-8 w-8 text-yellow-400 opacity-50" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-8"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Sparkles className="h-7 w-7 text-orange-400 opacity-40" />
      </motion.div>
    </div>
  );
}