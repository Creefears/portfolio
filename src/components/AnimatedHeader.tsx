import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://i.imgur.com/pq17cvI.jpg",
  "https://i.imgur.com/Y4OX4J9.jpg",
  "https://i.imgur.com/7upuHV4.jpg",
  "https://i.imgur.com/LTPbXZQ.jpg",
  "https://i.imgur.com/0RunzIX.jpg",
  "https://i.imgur.com/qS47mep.jpg",
  "https://i.imgur.com/isL0Oc3.jpg",
  "https://i.imgur.com/nvlr9T3.jpg"
];

function AnimatedHeader() {
  return (
    <div className="relative h-[70vh] overflow-hidden bg-gray-900">
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-4 gap-1 transform -rotate-12 scale-[1.4] translate-y-[-5%]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative h-full overflow-hidden cursor-pointer"
            initial={{ opacity: 0.8 }}
            whileHover={{ 
              scale: 1.1, 
              zIndex: 10,
              opacity: 1,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="absolute inset-0 transition-all duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <motion.img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                whileHover={{
                  filter: "blur(3px)"
                }}
              />
            </motion.div>
            
            {/* Overlay de base */}
            <motion.div 
              className="absolute inset-0 bg-black/30"
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Effet de brillance au survol */}
            <motion.div
              className="absolute inset-0 opacity-0"
              style={{
                background: 'linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
              }}
              whileHover={{
                opacity: 1,
                x: ['0%', '200%'],
                transition: {
                  x: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear"
                  }
                }
              }}
            />

            {/* Bordure lumineuse au survol */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent"
              whileHover={{
                borderColor: "rgba(255,255,255,0.3)",
                boxShadow: "inset 0 0 30px rgba(255,255,255,0.2)"
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay principal avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none">
        <motion.div 
          className="h-full flex items-center justify-start px-8 md:px-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Victor Jacob
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Spécialiste en animation 3D et création audiovisuelle
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AnimatedHeader;