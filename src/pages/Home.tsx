import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedHeader from '../components/AnimatedHeader';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedHeader />
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Spécialiste en animation 3D et création audiovisuelle
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionné par l'audiovisuel et les nouvelles technologies, je crée des expériences visuelles uniques 
              en combinant animation 3D et production vidéo traditionnelle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Découvrir mes projets
              </Link>
              <Link
                to="/a-propos"
                className="inline-flex items-center px-8 py-3 border-2 border-indigo-600 text-base font-medium rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;