import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import ProjectCard from '../components/ProjectCard';
import CGIHeader from '../components/CGIHeader';
import ToolIcon from '../components/ToolIcon';

function CGI() {
  const allTools = [
    "Blender",
    "Unity",
    "Unreal Engine 5",
    "Adobe Premiere",
    "Adobe After Effects",
    "Adobe Photoshop",
    "Adobe Animate",
    "Autodesk Maya",
    "Substance Painter"
  ];

  const projects = [
    {
      title: "Naturewave",
      shortDescription: "Fond d'écran animé en cell-shading",
      fullDescription: "J'ai créé ce projet dans le but d'obtenir un fond d'écran animé pour mon double écran. Pour atteindre ce style d'aplats de couleurs dans un moteur 3D, j'ai opté pour un rendu en cell-shading, ce qui m'a permis de maîtriser pleinement la palette de couleurs, aussi bien pour l'ambiance de jour que pour celle de nuit.",
      image: "https://i.imgur.com/pq17cvI.jpg",
      video: "https://drive.google.com/file/d/1Z-szd00Icw4cDRkyRD186_a7Eb2U1DXD/preview",
      year: "2024",
      role: "Intégrale",
      tools: [
        { name: "Blender", icon: "" },
        { name: "Adobe Premiere", icon: "" }
      ]
    },
    {
      title: "CV Vidéo",
      shortDescription: "Présentation professionnelle animée avec MetaHuman",
      fullDescription: "Ce CV vidéo a été conçu pour mettre en lumière mes compétences, aussi bien en montage vidéo qu'en 3D. Pour donner vie à l'animation du personnage, j'ai mobilisé l'une des technologies que j'ai affinées : la création d'un MetaHuman à mon effigie, animé avec précision grâce à la facial capture de l'Arkit.",
      image: "https://i.imgur.com/Y4OX4J9.jpg",
      video: "https://drive.google.com/file/d/1-NJrI_yPyH44ljYPdIo3_RKP-JLgx8hK/preview",
      year: "2024",
      role: "Intégrale",
      tools: [
        { name: "Blender", icon: "" },
        { name: "Unreal Engine 5", icon: "" },
        { name: "Adobe Premiere", icon: "" },
        { name: "Adobe After Effects", icon: "" }
      ]
    },
    {
      title: "Pletory",
      shortDescription: "Création de métavers pour des clients prestigieux",
      fullDescription: "Après ma formation à Ynov Campus, j'ai été recruté par une start-up spécialisée dans la création d'univers virtuels, avec un focus particulier sur les métavers. Cette mission m'a conduit à concevoir et développer des métavers pour des clients prestigieux tels qu'Arkea et Swisslife. Ces univers étaient accessibles directement depuis un navigateur web, grâce à des environnements en WebGL développés avec Unity, intégrant des interfaces intuitives et des personnages interactifs pour une expérience immersive.",
      image: "https://i.imgur.com/qS47mep.jpg",
      video: "https://drive.google.com/file/d/1-OViIUZ3UuTrnDrutSJ7eoHEnNd8X0L1/preview",
      year: "2023",
      role: "Concepteur 3D, Modeleur, Animateur",
      tools: [
        { name: "Unity", icon: "" },
        { name: "Blender", icon: "" },
        { name: "Adobe Premiere", icon: "" },
        { name: "Substance Painter", icon: "" }
      ]
    },
    {
      title: "Projets Scolaires",
      shortDescription: "Projets réalisés pendant ma formation",
      fullDescription: "Durant ma formation à Ynov, j'ai eu l'opportunité de travailler sur divers projets, notamment un temple aztèque et un parcours inspiré de Spider-Man. Ces projets m'ont permis d'explorer différentes techniques de modélisation, de texturing et d'animation, tout en développant mes compétences avec des outils professionnels comme Unreal Engine 5, Maya, Blender et Substance Painter.",
      image: "https://i.imgur.com/BygzETy.jpg",
      videos: [
        {
          title: "Temple Aztèque",
          url: "https://drive.google.com/file/d/1-sLAOBCl7BiosXr7oQ3e0SUYUe7NoPui/preview"
        },
        {
          title: "Miles's Parcour",
          url: "https://drive.google.com/file/d/1hixeHFrBo70C3Fs3EcJ6gfj1k0-5Bk--/preview"
        },
        {
          title: "Demo Reel 2021",
          url: "https://drive.google.com/file/d/17G_hj7ass2VF0uLskZAUViy1vg9Mj3Te/preview"
        }
      ],
      year: "2020-2023",
      role: "Intégrale",
      tools: [
        { name: "Unreal Engine 5", icon: "" },
        { name: "Autodesk Maya", icon: "" },
        { name: "Blender", icon: "" },
        { name: "Substance Painter", icon: "" }
      ]
    },
    {
      title: "My Little Gravity Falls",
      shortDescription: "Animation parodique de Gravity Falls",
      fullDescription: "Ce projet YouTube a marqué ma toute première expérience dans le domaine de l'animation. Il s'agit d'une parodie du générique de Gravity Falls, une série animée de Disney, fusionnée avec l'univers du cartoon My Little Pony : Friendship is Magic d'Hasbro. Ce projet a été une étape clé dans l'éveil de ma passion pour l'animation. Bien que je disposais de peu de connaissances sur les techniques d'animation et les logiciels associés, j'ai progressivement trouvé mes marques et appris à maîtriser ce médium créatif.",
      image: "https://i.imgur.com/Cp2td6z.jpg",
      video: "https://www.youtube.com/embed/zg4LBVX0Ohg",
      year: "2015",
      role: "Intégrale",
      tools: [
        { name: "Adobe Animate", icon: "" },
        { name: "Adobe After Effects", icon: "" },
        { name: "Adobe Photoshop", icon: "" },
        { name: "Adobe Premiere", icon: "" }
      ]
    }
  ].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CGIHeader />
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
              Logiciels Maîtrisés
            </h2>
            <div className={clsx(
              "grid gap-2 md:gap-4 justify-items-center",
              "grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9",
              "p-3 md:p-6",
              "bg-white/50 dark:bg-gray-800/50 rounded-xl"
            )}>
              {allTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    duration: 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                >
                  <ToolIcon 
                    name={tool} 
                    size={24}
                    showLabel={true}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <ProjectCard 
                  {...project}
                  index={index}
                  totalProjects={projects.length}
                  allProjects={projects}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default CGI;