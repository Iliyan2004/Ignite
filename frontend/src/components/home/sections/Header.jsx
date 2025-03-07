import React, { useEffect, useState } from 'react';
import { ThemeToggle } from '../../components/elements/Elements';
import { Button } from '../../components/elements/Elements';
import { LoginModal, SignupModal } from '../../auth/Auth';

export const Header = ({sections, activeSection, setActiveSection}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      setActiveSection(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    // Modal management functions
    const handleOpenLogin = () => {
      setShowSignup(false);
      setShowLogin(true);
    };

    const handleOpenSignup = () => {
      setShowLogin(false);
      setShowSignup(true);
    };

    const handleCloseLogin = () => {
      setShowLogin(false);
    };

    const handleCloseSignup = () => {
      setShowSignup(false);
    };

    const handleSwitchToSignup = () => {
      setShowLogin(false);
      setTimeout(() => setShowSignup(true), 300); // Delay to allow animation to complete
    };

    const handleSwitchToLogin = () => {
      setShowSignup(false);
      setTimeout(() => setShowLogin(true), 300); // Delay to allow animation to complete
    };
  
    return (
      <>
        <header className={`
          fixed w-full z-40 transition-all duration-300
          ${isScrolled ? 'bg-white dark:bg-gray-900/75 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/75' : 'bg-transparent'}
        `}>
          <div className="w-[90%] max-w-10xl mx-auto py-6">
            <div className="flex items-center justify-between">
            <button class="text-4xl font-bold text-black dark:text-white hover:scale-110 transition-all duration-300 group relative" onClick={() => scrollToSection('home')}>
            <span className='text-red-500'>I</span>
            GNITE
            </button>
              
  
              <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-8">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`
                      capitalize transition-all duration-300 hover:scale-125 font-semibold text-md
                      ${activeSection === section 
                        ? 'text-red-500' 
                        : 'text-black dark:text-gray-300'
                      }
                    `}
                  >
                    {section}
                  </button>
                ))}
              </nav>
                <ThemeToggle />
                <Button 
                  variant="secondary"
                  onClick={handleOpenLogin}
                  className="bg-neutral-900 px-10 rounded-[0.8rem] dark:bg-red-500 dark:text-white"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
  
        <LoginModal 
          isOpen={showLogin} 
          onClose={handleCloseLogin}
          onSwitchToSignup={handleSwitchToSignup}
        />
        <SignupModal 
          isOpen={showSignup} 
          onClose={handleCloseSignup}
          onSwitchToLogin={handleSwitchToLogin}
        />
      </>
    );
  };