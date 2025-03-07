import React, { useState, useEffect } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Pricing } from './sections/Pricing';
import { Reviews } from './sections/Reviews';
import { Footer } from './sections/Footer';

export const LandingPage = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    pricing: false,
    reviews: false,
  });
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'features', 'pricing', 'reviews'];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home'; // Default section

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Check if the section is in the viewport
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            currentSection = section;
          }

          // Update visibility for animations
          setIsVisible((prev) => ({
            ...prev,
            [section]: rect.top <= window.innerHeight * 0.75,
          }));
        }
      });

      // Update active section state
      setActiveSection(currentSection);
    };

    // Show hero section immediately
    setIsVisible((prev) => ({ ...prev, hero: true }));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FF9D80] to-[#FFFCF2] dark:from-[#180600] dark:to-[#1E1E1E]"
      >
        <Hero isVisible={isVisible} />
      </section>

      <section
        id="features"
        className="py-20 bg-[#FFFCF2] dark:bg-[#1E1E1E] transition-colors duration-500"
      >
        <Features isVisible={isVisible} />
      </section>

      <section
        id="pricing"
        className="py-20 bg-[FFFCF2] dark:from-gray-900 dark:to-gray-900"
      >
        <Pricing isVisible={isVisible.pricing} />
      </section>

      <section
        id="reviews"
        className="py-20 bg-[#FFFCF2] dark:bg-[#1E1E1E] transition-colors duration-500"
      >
        <Reviews isVisible={isVisible} />
      </section>

      <section id="footer" className="pt-20 bg-[#1E1E1E]">
        <Footer activeSection={activeSection} setActiveSection={setActiveSection} />
      </section>
    </>
  );
};
