import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/victor-jacob", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/victorjacob", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/victor.jacob", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: Mail, content: "vics.jacob@gmail.com", href: "mailto:vics.jacob@gmail.com" },
    { icon: Phone, content: "+33 6 52 43 41 66", href: "tel:+33652434166" },
    { icon: MapPin, content: "Clichy-La-Garenne, France", href: null }
  ];

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.content}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-gray-400">
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.content}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-3 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-1 md:mb-0">
            © {new Date().getFullYear()} Victor Jacob • Tous droits réservés
          </p>
          <div className="flex gap-3">
            <Link to="/mentions-legales" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Mentions légales
            </Link>
            <Link to="/politique-confidentialite" className="text-xs text-gray-500 hover:text-gray-400 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;