import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/a-propos', label: 'À propos' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md dark:bg-gray-800/95 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex-shrink-0"
            initial={false}
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              to="/" 
              className="text-xl font-semibold text-gray-100 hover:text-white transition-all duration-300"
            >
              <motion.span
                initial={false}
                animate={{ 
                  fontSize: isScrolled ? '1.25rem' : '1.5rem',
                  opacity: 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {isScrolled ? 'VJ' : 'Victor Jacob'}
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:text-white transition-colors group"
                >
                  {item.label}
                  <motion.div
                    initial={false}
                    animate={{
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0
                    }}
                    className="absolute bottom-0 left-0 h-0.5 bg-indigo-500 rounded-full"
                  />
                  <motion.div
                    initial={false}
                    whileHover={{ width: '100%', opacity: 1 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-indigo-400 rounded-full w-0 opacity-0 transition-all duration-300"
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md dark:bg-gray-800/95"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-100 hover:bg-indigo-600 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;