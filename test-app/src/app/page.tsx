'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star, Zap, Droplets, Wind, Sun, Moon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-25"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-300 to-teal-400 rounded-full opacity-15"
          animate={{
            y: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <motion.div 
              className="flex"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex-shrink-0 flex items-center">
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="h-8 w-8 text-purple-600" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                    Laundry Express 
                  </h1>
                </motion.div>
              </div>
            </motion.div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Login 
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/admin/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Admin 
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="/register" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all duration-200">
                  Register 
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-6xl"> </div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Fresh & Clean
            </span>
            <motion.span 
              className="block bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Laundry Magic! 
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
             Transform your dirty clothes into fresh, clean treasures! We're not just a laundry service - 
            we're your clothing's best friend! 
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:from-pink-500 hover:to-purple-600"
              >
                <span className="flex items-center">
                  Get Started Now! 🚀
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                href="/login" 
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                I'm Already a Member! 💎
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why People Love Us! 
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "",
                title: "Super Easy Scheduling",
                description: "Pick your perfect time slot in just 3 clicks! We work around YOUR schedule, not the other way around!",
                color: "from-pink-400 to-rose-500",
                delay: 0.2
              },
              {
                icon: "",
                title: "Amazing Services",
                description: "From everyday clothes to fancy dress shirts - we treat everything like it's our own precious wardrobe!",
                color: "from-purple-400 to-indigo-500",
                delay: 0.4
              },
              {
                icon: "",
                title: "Lightning Fast",
                description: "We're so fast, your clothes will think they went on a spa vacation and came back refreshed!",
                color: "from-green-400 to-teal-500",
                delay: 0.6
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`relative p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.8, delay: feature.delay }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-5xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative corner elements */}
                <div className={`absolute top-2 right-2 w-4 h-4 bg-gradient-to-br ${feature.color} rounded-full opacity-60`}></div>
                <div className={`absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-br ${feature.color} rounded-full opacity-40`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Magical Services 
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Each service comes with a sprinkle of love and a dash of perfection! 
          </motion.p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "",
                title: "Regular Laundry",
                description: "Your everyday heroes get the royal treatment they deserve!",
                color: "from-blue-400 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                icon: "",
                title: "Dry Cleaning",
                description: "For those special pieces that make you feel like royalty!",
                color: "from-purple-400 to-pink-500",
                bgColor: "from-purple-50 to-pink-50"
              },
              {
                icon: "",
                title: "Shoe Cleaning",
                description: "Step out in style with shoes that sparkle and shine!",
                color: "from-green-400 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50"
              },
              {
                icon: "",
                title: "Blanket Cleaning",
                description: "Cozy up with blankets so fresh, you'll sleep like a baby!",
                color: "from-orange-400 to-red-500",
                bgColor: "from-orange-50 to-red-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${service.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/50`}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-4xl mb-3"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Fun decorative elements */}
                <motion.div 
                  className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${service.color} rounded-full opacity-70`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <motion.div 
                  className={`absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br ${service.color} rounded-full opacity-50`}
                  animate={{ scale: [1, 0.8, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        className="py-16 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-1 rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-12">
              <motion.div
                className="text-6xl mb-6"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                
              </motion.div>
              
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ready to Experience the Magic?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of happy customers who've discovered the joy of hassle-free laundry! 
                Your clothes are waiting for their spa day! 
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/register" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                  Start Your Laundry Journey! 
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
