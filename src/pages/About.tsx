import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Mail, Phone, MapPin, Briefcase, GraduationCap, Star, Award, Trophy, Code, Film, Sparkles } from 'lucide-react';

const profileImage = "https://i.imgur.com/f9X3Y7v.jpg";

const stats = [
  { icon: Calendar, label: "Années d'expérience", value: "7+" },
  { icon: Briefcase, label: "Projets réalisés", value: "20+" },
  { icon: GraduationCap, label: "Diplômes", value: "2" },
];

const keywords = [
  // Qualités professionnelles
  "Innovant",
  "Adaptabilité",
  "Flexible",
  "Polyvalent",
  "Appliqué",
  "Créatif",
  "Passionné",
  "Rigoureux",
  // Soft skills
  "Leadership",
  "Communication",
  "Organisation",
  "Autonomie",
  "Esprit d'équipe",
  "Problem Solver",
  // Traits de caractère
  "Curieux",
  "Dynamique",
  "Persévérant",
  "Méthodique",
  "Proactif",
  "\"Couteau suisse\""
];

const FloatingKeyword = ({ text, position }: { text: string; position: { x: number; y: number } }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{
      opacity: [0, 0.65, 0.65, 0],
      scale: [0.5, 1, 1, 0.8],
      y: [position.y, position.y - 100]
    }}
    transition={{
      duration: 4,
      times: [0, 0.1, 0.9, 1],
      ease: "easeInOut"
    }}
    className="absolute text-2xl md:text-4xl font-bold pointer-events-none select-none"
    style={{
      left: position.x,
      background: 'linear-gradient(to right, #6366f1, #a855f7)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.3))',
    }}
  >
    {text}
  </motion.div>
);

const FloatingKeywords = () => {
  const [keywords2, setKeywords2] = useState<Array<{ id: number; text: string; position: { x: number; y: number } }>>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timelineSection = document.querySelector('section.py-20.relative');
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const x = Math.random() * (rect.width - 200);
        const y = Math.random() * (rect.height - 100);
        
        setKeywords2(prev => [...prev, {
          id: count,
          text: keywords[Math.floor(Math.random() * keywords.length)],
          position: { x, y }
        }]);
        setCount(c => c + 1);

        setTimeout(() => {
          setKeywords2(prev => prev.filter(k => k.id !== count));
        }, 4000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {keywords2.map(({ id, text, position }) => (
          <FloatingKeyword key={id} text={text} position={position} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const timeline = [
  {
    year: "Futur",
    title: "Votre Entreprise ?",
    description: "Ensemble, créons des expériences visuelles exceptionnelles et donnons vie à vos projets les plus ambitieux.",
    icon: Sparkles,
    color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
    special: true
  },
  {
    year: "2023",
    role: "Lead 3D Artist",
    company: "PLETORY",
    description: "Modélisation d'univers 3D, modélisation et animation de personnages 3D, intégration des éléments et mise en production dans Unity.",
    icon: Star,
    color: "bg-purple-500",
    link: "/cgi"
  },
  {
    year: "2022-2023",
    role: "Lead Artist 3D",
    company: "DIMOBA",
    description: "Création de personnages réalistes et cartoons, configuration pour utilisation en motion et facial capture, développement sous Unreal Engine 5.",
    icon: Star,
    color: "bg-indigo-500"
  },
  {
    year: "2020-2023",
    role: "Licence Animation & Game Design",
    company: "YNOV",
    description: "Animation et Conception 3D, Réalisation Court Métrage et Jeu Vidéo.",
    icon: GraduationCap,
    color: "bg-red-500"
  },
  {
    year: "2018-2019",
    role: "Chargé de Production",
    company: "Sarenza",
    description: "Production image et audiovisuelle, organisation des shootings photos et tournages vidéos, gestion de projet.",
    icon: Briefcase,
    color: "bg-blue-500"
  },
  {
    year: "2018",
    role: "Assistant Montage",
    company: "TF1 Production - 50 Minutes Inside",
    description: "Dérushage des documentaires et reportages, liaison entre le service montage et archive, montage vidéo.",
    icon: Film,
    color: "bg-pink-500"
  },
  {
    year: "2016-2017",
    role: "Monteur & Chargé de Production",
    company: "Timelapse Go & Pratiks",
    description: "Production et montage de vidéos timelapse d'entreprise, création de tutoriels, captation et installation des matériels vidéos.",
    icon: Award,
    color: "bg-green-500"
  },
  {
    year: "2015-2018",
    role: "Licence Réalisation Cinéma & Télévision",
    company: "EICAR",
    description: "Formation approfondie en réalisation audiovisuelle, techniques de production et direction artistique.",
    icon: GraduationCap,
    color: "bg-purple-500"
  },
  {
    year: "2012-2015",
    role: "Bac STMG Option SIG",
    company: "Montalembert",
    description: "Spécialisation en Systèmes d'Information de Gestion (SIG), formation en informatique et gestion.",
    icon: Code,
    color: "bg-cyan-500"
  }
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 dark:bg-gray-900"
    >
      {/* Hero Section with Profile */}
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Victor Jacob
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Lead Artist 3D & Spécialiste en Animation
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Passionné par l'audiovisuel et les nouvelles technologies, je crée des expériences visuelles 
                uniques en combinant animation 3D et production vidéo traditionnelle.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="mailto:vics.jacob@gmail.com"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors"
                >
                  Me contacter
                </a>
                <Link
                  to="/portfolio"
                  className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-full transition-colors"
                >
                  Voir mon portfolio
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse" 
                     style={{ filter: 'blur(40px)' }} />
                <img
                  src={profileImage}
                  alt="Victor Jacob"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                  style={{ objectPosition: "center 15%" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                    <stat.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline Header with Gradient Border */}
          <div className="relative mb-16">
            {/* Vertical line extension to connect with the timeline */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"
              style={{
                height: '3rem',
                bottom: '-3rem'
              }}
            />
            
            {/* Header Container */}
            <div className="relative inline-block left-1/2 transform -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" 
                   style={{ padding: '2px' }}>
                <div className="h-full w-full bg-gray-50 dark:bg-gray-900 rounded-lg" />
              </div>
              <h2 className="relative text-3xl font-bold text-center text-gray-900 dark:text-gray-100 px-8 py-4">
                Mon Parcours
              </h2>
            </div>
          </div>

          {/* Floating Keywords Background */}
          <FloatingKeywords />

          <div className="relative">
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"
                style={{
                  height: 'calc(100% - 2rem)',
                  top: '1rem'
                }}
              />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center justify-between mb-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {item.link ? (
                      <Link to={item.link}>
                        <motion.div 
                          className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                            index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                          } ${item.special ? 'border-2 border-indigo-500 dark:border-indigo-400' : ''}`}
                          whileHover={item.special ? { y: -5, scale: 1.05 } : {}}
                        >
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                            item.special ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                          } text-white mb-2`}>
                            {item.year}
                          </span>
                          <div className="mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                              {item.role || item.title}
                            </h3>
                            {item.company && (
                              <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                                {item.company}
                              </p>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                          {item.special && (
                            <motion.div 
                              className="mt-4"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                            >
                              <a
                                href="mailto:vics.jacob@gmail.com"
                                className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                              >
                                Me Contacter
                              </a>
                            </motion.div>
                          )}
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.div 
                        className={`p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                          index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                        } ${item.special ? 'border-2 border-indigo-500 dark:border-indigo-400' : ''}`}
                        whileHover={item.special ? { y: -5, scale: 1.05 } : {}}
                      >
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          item.special ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                        } text-white mb-2`}>
                          {item.year}
                        </span>
                        <div className="mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {item.role || item.title}
                          </h3>
                          {item.company && (
                            <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                              {item.company}
                            </p>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                        {item.special && (
                          <motion.div 
                            className="mt-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                          >
                            <a
                              href="mailto:vics.jacob@gmail.com"
                              className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                            >
                              Me Contacter
                            </a>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg ${
                      item.special ? 'animate-pulse' : ''
                    }`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="w-5/12" />
                </motion.div>
              ))}

              {/* Timeline End Point */}
              <div className="relative flex justify-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;