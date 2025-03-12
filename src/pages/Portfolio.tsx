import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { stiffness: 150, damping: 15 };
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (event.clientY - rect.top) / rect.height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const categories = [
    {
      title: "CGI",
      description: "Découvrez mes projets en 3D et animation",
      link: "/cgi"
    },
    {
      title: "RÉEL",
      description: "Explorez mes réalisations audiovisuelles",
      link: "/prise-de-vue-reel"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
            Portfolio
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => {
                    x.set(0);
                    y.set(0);
                    setMousePosition({ x: 0, y: 0 });
                  }}
                  className="relative h-[28rem] rounded-xl overflow-hidden shadow-xl cursor-pointer bg-black perspective-1000"
                >
                  {/* Fond style Outliner pour CGI */}
                  {category.title === "CGI" && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-[#232323]">
                        {/* Lignes de grille */}
                        <div className="absolute inset-0" 
                             style={{
                               backgroundImage: `
                                 linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                               `,
                               backgroundSize: '20px 20px'
                             }}
                        />
                        {/* Points d'intersection */}
                        <div className="absolute inset-0" 
                             style={{
                               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                               backgroundSize: '20px 20px'
                             }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Effet de lentille pour RÉEL */}
                  {category.title === "RÉEL" && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Projecteurs */}
                      <div className="absolute inset-0" 
                           style={{
                             background: `
                               radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 30%),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 30%)
                             `
                           }}
                      />
                      {/* Lentille */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[200%] aspect-square rounded-full"
                             style={{
                               background: 'radial-gradient(circle, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 70%)',
                               border: '100px solid rgba(255,255,255,0.1)',
                               backdropFilter: 'blur(8px)'
                             }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Conteneur 3D */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      rotateX: category.title === "CGI" ? rotateX : 0,
                      rotateY: category.title === "CGI" ? rotateY : 0,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Texte principal */}
                    <motion.div
                      className="relative"
                      style={{
                        transform: category.title === "CGI" ? "translateZ(50px)" : "none"
                      }}
                    >
                      <motion.h2 
                        className={`text-[8rem] font-black ${
                          category.title === "CGI" 
                            ? "text-[#94c8ff] mix-blend-screen" 
                            : "text-white mix-blend-difference"
                        }`}
                        variants={{
                          initial: { scale: 1, filter: "brightness(0.8)" },
                          hover: { 
                            scale: 1.05,
                            filter: "brightness(1.2)",
                            textShadow: category.title === "CGI" 
                              ? "0 0 20px rgba(148,200,255,0.5)" 
                              : "0 0 20px rgba(255,255,255,0.5)"
                          }
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        {category.title}
                      </motion.h2>
                    </motion.div>
                  </motion.div>

                  {/* Description au survol */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-8 flex justify-center"
                    style={{
                      transform: category.title === "CGI" ? "translateZ(50px)" : "none"
                    }}
                    variants={{
                      initial: { y: 20, opacity: 0 },
                      hover: { y: 0, opacity: 1 }
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="text-white text-lg font-medium bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
                      {category.description}
                    </span>
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;