import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import ProjectCard from '../components/ProjectCard';
import RealFootageHeader from '../components/RealFootageHeader';
import ToolIcon from '../components/ToolIcon';

function RealFootage() {
  const allTools = [
    "Adobe Premiere",
    "Adobe After Effects",
    "Adobe Photoshop",
    "Microsoft Office",
    "Movie Magic Scheduling",
    "Sony Vegas",
    "DaVinci Resolve"
  ];

  const projects = [
    {
      title: "Sarenza.com",
      shortDescription: "Production visuelle pour une plateforme e-commerce",
      fullDescription: "Pendant mon stage de fin d'études à l'EICAR, j'ai rejoint l'équipe de production visuelle de Sarenza.com, la célèbre plateforme de vente en ligne spécialisée dans les chaussures. Une expérience super enrichissante où j'ai eu la chance de m'impliquer à fond dans l'organisation et la réalisation de tournages et shootings photo pour mettre en valeur les produits et événements de la marque.",
      image: "https://i.imgur.com/nvlr9T3.jpg",
      video: "https://drive.google.com/file/d/1s2YxnP0QuJdvVcHs8UpKjGxoVFHxU9F_/preview",
      year: "2018",
      role: "Chargé de Production",
      tools: [
        { name: "Microsoft Office", icon: "" }
      ]
    },
    {
      title: "Nobodies",
      shortDescription: "Clip musical horrifique en extérieur",
      fullDescription: "Ce clip musical horrifique, réalisé par Antoine Beaudet, a été une expérience aussi captivante qu'enrichissante. Tourner exclusivement en extérieur, souvent dans des conditions exigeantes et imprévisibles, et principalement de nuit, a apporté une dimension unique au projet.",
      image: "https://i.imgur.com/0RunzIX.jpg",
      video: "https://drive.google.com/file/d/1IpnljpGJfGQ5BzejAFmk-D2Qit_dw9LJ/preview",
      year: "2017",
      role: "1er Assistant Réalisateur",
      tools: [
        { name: "Movie Magic Scheduling", icon: "" },
        { name: "Microsoft Office", icon: "" }
      ]
    },
    {
      title: "It's Jack",
      shortDescription: "Spot publicitaire années 50",
      fullDescription: "Ce spot publicitaire, réalisé par François Gastinel, m'a permis de mettre en pratique mes compétences en montage vidéo tout en assistant le réalisateur dans la production. Lors de la phase de montage, j'ai suivi les directives et respecté la vision artistique du réalisateur, qui souhaitait donner au projet une esthétique noir des années 50.",
      image: "https://i.imgur.com/7upuHV4.jpg",
      video: "https://drive.google.com/file/d/1xonu8bs0YZc8lhDQFVmPPFLURrT0aYtD/preview",
      year: "2017",
      role: "2ème Assistant Réalisateur, 1er Monteur Vidéo",
      tools: [
        { name: "Adobe Premiere", icon: "" },
        { name: "Movie Magic Scheduling", icon: "" },
        { name: "Microsoft Office", icon: "" }
      ]
    },
    {
      title: "Timelapse Go",
      shortDescription: "Production de timelapses de construction",
      fullDescription: "Ma première expérience professionnelle en tant qu'intermittent du spectacle s'est déroulée au sein de la société multimédia polyvalente Timelapse Go. Cette entreprise était spécialisée dans la création de vidéos timelapse documentant la construction de bâtiments. Mon rôle était très diversifié, incluant le montage des vidéos timelapse.",
      image: "https://i.imgur.com/ohaBOrG.jpg",
      video: "https://www.youtube.com/embed/5AOWbQHeoHI",
      year: "2016",
      role: "Monteur Vidéo, Chargé de Production",
      tools: [
        { name: "Adobe Premiere", icon: "" },
        { name: "Adobe After Effects", icon: "" },
        { name: "Adobe Photoshop", icon: "" }
      ]
    },
    {
      title: "Pratiks",
      shortDescription: "Production de tutoriels YouTube",
      fullDescription: "En parallèle de Timelapse Go, j'ai participé à la production de tutoriels variés pour la chaîne YouTube Pratiks. Mon rôle incluait l'écriture, la captation d'images et la réalisation des vidéos tutoriels.",
      image: "https://i.imgur.com/isL0Oc3.jpg",
      video: "https://www.youtube.com/embed/KYRVvtuq3zY",
      year: "2016",
      role: "Réalisateur, Monteur Vidéo",
      tools: [
        { name: "Adobe Premiere", icon: "" },
        { name: "Adobe After Effects", icon: "" },
        { name: "Adobe Photoshop", icon: "" }
      ]
    },
    {
      title: "Madness",
      shortDescription: "Court-métrage psychologique et horrifique",
      fullDescription: "Ce court-métrage psychologique et horrifique, réalisé par François Gastinel, a marqué ma toute première expérience en tant qu'Assistant Réalisateur sur un tournage. Pour ce projet, j'ai pris en charge l'organisation des journées de tournage, l'élaboration du plan de travail, ainsi que la coordination des décors et des lieux de tournage.",
      image: "https://i.imgur.com/LTPbXZQ.jpg",
      video: "https://drive.google.com/file/d/1DjEq9iovIQBFCK4MotEOeOJzOYxLpolb/preview",
      year: "2016",
      role: "1er Assistant Réalisateur",
      tools: [
        { name: "Movie Magic Scheduling", icon: "" },
        { name: "Microsoft Office", icon: "" }
      ]
    },
    {
      title: "Creefears",
      shortDescription: "Chaîne YouTube Gaming Horror",
      fullDescription: "Cette playlist représente mes premiers pas dans la production vidéo, un domaine qui me passionnait déjà et qui a solidifié mon intérêt pour les années à venir. À travers cette chaîne YouTube dédiée au Gaming Horror, j'ai eu l'opportunité de développer et perfectionner mes compétences en montage vidéo, captation, storytelling, et même en réalisation de courts-métrages, notamment pour les introductions de certaines vidéos nécessitant une attention particulière aux détails.",
      image: "https://i.imgur.com/V00RlDs.jpg",
      video: "https://www.youtube.com/embed/videoseries?si=cLL57PWpQmja-TdV&list=PL26TfmA2gBYFBng9aldgU-PfCh1sZZN_p",
      year: "2014",
      role: "Intégrale",
      tools: [
        { name: "Sony Vegas", icon: "" },
        { name: "Adobe After Effects", icon: "" },
        { name: "Adobe Photoshop", icon: "" },
        { name: "Microsoft Office", icon: "" }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <RealFootageHeader />
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-8 md:mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-4">
              Logiciels Maîtrisés
            </h2>
            <div className={clsx(
              "grid gap-2 md:gap-4 justify-items-center",
              "grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7",
              "p-3 md:p-6",
              "bg-white/50 dark:bg-gray-800/50 rounded-xl"
            )}>
              {allTools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.2,
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
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

export default RealFootage;