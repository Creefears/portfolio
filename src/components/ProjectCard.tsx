import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import ToolIcon from './ToolIcon';

const sarenzaImages = [
  "https://i.imgur.com/skbjcbK.jpg",
  "https://i.imgur.com/NqqAgMH.jpg",
  "https://i.imgur.com/uNjQEb8.jpg",
  "https://i.imgur.com/1Jgi1I6.jpg",
  "https://i.imgur.com/FRZjdp0.jpg",
  "https://i.imgur.com/s8EANqu.jpg",
  "https://i.imgur.com/584Lry9.jpg",
  "https://i.imgur.com/jL8jqgs.jpg"
];

const roleColors: Record<string, { bg: string, text: string }> = {
  'Réalisateur': { bg: 'bg-red-500', text: 'text-white' },
  'Assistant Réalisateur': { bg: 'bg-pink-500', text: 'text-white' },
  '1er Assistant Réalisateur': { bg: 'bg-pink-500', text: 'text-white' },
  '2ème Assistant Réalisateur': { bg: 'bg-pink-400', text: 'text-white' },
  'Monteur Vidéo': { bg: 'bg-purple-500', text: 'text-white' },
  '1er Monteur Vidéo': { bg: 'bg-purple-500', text: 'text-white' },
  'Chargé de Production': { bg: 'bg-blue-500', text: 'text-white' },
  'Concepteur 3D': { bg: 'bg-green-500', text: 'text-white' },
  'Modeleur': { bg: 'bg-emerald-500', text: 'text-white' },
  'Animateur': { bg: 'bg-teal-500', text: 'text-white' },
  'Intégrale': { bg: 'bg-amber-500', text: 'text-white' },
};

const formatRoles = (role: string) => {
  return role.split(', ').map(r => {
    const color = Object.entries(roleColors).find(([key]) => r.includes(key));
    return {
      role: r,
      colors: color ? color[1] : { bg: 'bg-gray-500', text: 'text-white' }
    };
  });
};

interface Tool {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  video?: string;
  videos?: Array<{ title: string; url: string; }>;
  year: string;
  role: string;
  tools: Tool[];
  index: number;
  totalProjects: number;
  allProjects: Array<{
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    video?: string;
    videos?: Array<{ title: string; url: string; }>;
    year: string;
    role: string;
    tools: Tool[];
  }>;
}

function ProjectCard({
  title,
  shortDescription,
  fullDescription,
  image,
  video,
  videos,
  year,
  role,
  tools,
  index,
  totalProjects,
  allProjects
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const currentProject = allProjects[currentIndex];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node) && isExpanded) {
        handleClose(event as unknown as React.MouseEvent);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  const handleNext = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < totalProjects - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setIsVideoPlaying(false);
      setCurrentImageIndex(0);
      setCurrentVideoIndex(0);
      await new Promise(resolve => setTimeout(resolve, 300));
      setCurrentIndex(currentIndex + 1);
      setIsTransitioning(false);
    }
  };

  const handlePrevious = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setIsVideoPlaying(false);
      setCurrentImageIndex(0);
      setCurrentVideoIndex(0);
      await new Promise(resolve => setTimeout(resolve, 300));
      setCurrentIndex(currentIndex - 1);
      setIsTransitioning(false);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoPlaying(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
    setIsVideoPlaying(false);
    setCurrentImageIndex(0);
    setCurrentVideoIndex(0);
    setCurrentIndex(index);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % sarenzaImages.length);
  };

  const handlePreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + sarenzaImages.length) % sarenzaImages.length);
  };

  const RoleBadges = ({ role }: { role: string }) => {
    const roles = formatRoles(role);
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {roles.map((r, idx) => (
          <span
            key={idx}
            className={`px-2 py-1 rounded-full text-xs font-medium ${r.colors.bg} ${r.colors.text}`}
          >
            {r.role}
          </span>
        ))}
      </div>
    );
  };

  const SarenzaCarousel = () => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Galerie Photos
      </h3>
      <div className="relative">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="aspect-video relative overflow-hidden rounded-lg"
        >
          <img
            src={sarenzaImages[currentImageIndex]}
            alt={`Sarenza image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePreviousImage}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextImage}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
        <div className="flex justify-center mt-4 gap-2">
          {sarenzaImages.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(idx);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentImageIndex
                  ? 'bg-indigo-600 dark:bg-indigo-400 w-4'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const VideoSelector = () => (
    <div className="flex flex-col gap-2 mb-6">
      {currentProject.videos?.map((video, idx) => (
        <motion.button
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            setCurrentVideoIndex(idx);
          }}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
            idx === currentVideoIndex
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play className={`w-5 h-5 ${
            idx === currentVideoIndex ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'
          }`} />
          <span className="text-sm font-medium">{video.title}</span>
        </motion.button>
      ))}
    </div>
  );

  return (
    <div className="relative h-full">
      <motion.div
        layout
        onClick={handleCardClick}
        className={`cursor-pointer h-full ${isExpanded ? 'z-[100]' : ''}`}
        style={{ position: isExpanded ? 'relative' : 'static' }}
      >
        <motion.div
          ref={cardRef}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col ${
            isExpanded ? 'fixed top-4 left-4 right-4 bottom-4 md:top-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-4xl md:h-[85vh]' : 'h-full'
          }`}
        >
          {!isExpanded ? (
            <div className="h-full flex flex-col">
              <div className="w-full h-48 flex-shrink-0 relative group">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
                {(video || videos) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {shortDescription}
                </p>
                <div className="mt-auto">
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <RoleBadges role={role} />
                    <div className="flex justify-center space-x-2">
                      {tools.map((tool, idx) => (
                        <ToolIcon key={idx} name={tool.name} size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 text-center">
                    Cliquer pour plus de détails →
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: isTransitioning ? 100 : 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col overflow-y-auto"
                >
                  <div className="relative">
                    {currentProject.videos ? (
                      <div className="w-full aspect-video">
                        <iframe
                          src={currentProject.videos[currentVideoIndex].url}
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : currentProject.video && !isVideoPlaying ? (
                      <motion.div 
                        className="relative w-full aspect-video cursor-pointer overflow-hidden"
                        onClick={handleVideoClick}
                        whileHover="hover"
                      >
                        <motion.img 
                          src={currentProject.image} 
                          alt={currentProject.title} 
                          className="w-full h-full object-cover"
                          variants={{
                            hover: { scale: 1.05 }
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center bg-black/40"
                          variants={{
                            hover: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }
                          }}
                        >
                          <motion.div
                            className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Play className="w-14 h-14 text-white" />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    ) : currentProject.video ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full aspect-video"
                      >
                        <iframe
                          src={currentProject.video}
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </motion.div>
                    ) : (
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.title} 
                        className="w-full aspect-video object-cover"
                      />
                    )}
                  </div>

                  <div className="p-6 flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      {currentProject.title}
                    </h2>
                    
                    {currentProject.videos && <VideoSelector />}

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Année</h3>
                        <p className="text-gray-600 dark:text-gray-400">{currentProject.year}</p>
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Rôle</h3>
                        <div className="flex justify-center">
                          <RoleBadges role={currentProject.role} />
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Outils</h3>
                        <div className="flex flex-wrap justify-center gap-2">
                          {currentProject.tools.map((tool, idx) => (
                            <ToolIcon key={idx} name={tool.name} size={20} />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {currentProject.fullDescription}
                    </p>

                    {currentProject.title === "Sarenza.com" && <SarenzaCarousel />}
                  </div>
                </motion.div>
              </AnimatePresence>

              {currentIndex > 0 && (
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrevious}
                  className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-[102] group"
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="absolute left-full ml-2 whitespace-nowrap bg-black/50 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Projet précédent
                  </span>
                </motion.button>
              )}

              {currentIndex < totalProjects - 1 && (
                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  className="fixed top-1/2 right-4 md:right-8 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-[102] group"
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="absolute right-full mr-2 whitespace-nowrap bg-black/50 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Projet suivant
                  </span>
                </motion.button>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>

      {isExpanded && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleClose}
          className="fixed top-6 right-6 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-[101] group"
        >
          <X className="h-6 w-6" />
          <span className="absolute right-full mr-2 whitespace-nowrap bg-black/50 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Fermer
          </span>
        </motion.button>
      )}

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={handleClose}
        />
      )}
    </div>
  );
}

export default ProjectCard;