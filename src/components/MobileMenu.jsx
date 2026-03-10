// MobileMenu.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'HOME', href: '#home', icon: 'home' },
    { name: 'ABOUT', href: '#about', icon: 'info' },
    { name: 'EVENTS', href: '#events', icon: 'celebration' },
    { name: 'TIMELINE', href: '#timeline', icon: 'schedule' },
    // { name: 'GALLERY', href: '#gallery', icon: 'photo_library' },
    { name: 'TEAM', href: '#team', icon: 'group' },
  ];

  const handleLinkClick = (href) => {
  setIsOpen(false);
  setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 300);
};

  return (
    <>
      {/* Menu Button - Comic Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-blue-500 w-12 h-12 comic-border flex items-center justify-center relative z-100 hover:bg-blue-600 transition-colors"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-5">
          <span
            className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'top-2 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'top-2'
            }`}
          />
          <span
            className={`absolute left-0 block w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? 'top-2 -rotate-45' : 'top-4'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence className="backdrop-blur-2xl">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-90 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel - Comic Style */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-75 bg-background-dark z-95 md:hidden comic-border-l-0 border-l-4 border-black shadow-[8px_0_0_0_#000]"
              style={{
                borderLeft: '4px solid black',
                boxShadow: '-8px 0 0 0 #000',
              }}
            >
              {/* Menu Header */}
              <div className="p-6 border-b-4 border-black bg-blue-500">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 comic-border border-2 border-black">
                    <span className="material-symbols-outlined text-blue-500 text-2xl font-bold">
                      bolt
                    </span>
                  </div>
                  <h2 className="text-2xl font-black italic uppercase text-white">
                    RISE 2026
                  </h2>
                </div>
              </div>

              {/* Menu Items */}
              <nav className="p-6 flex flex-col gap-3">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-4 p-4 bg-slate-900 comic-border hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1"
                  >
                    <span className="material-symbols-outlined text-yellow-400 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                    <span className="font-black text-lg tracking-widest text-white group-hover:text-white italic">
                      {item.name}
                    </span>
                    <span className="ml-auto material-symbols-outlined text-yellow-400 group-hover:text-white transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* Register Button in Menu */}
              {/* <div className="absolute bottom-8 left-6 right-6">
                <button className="w-full bg-yellow-400 text-black font-black py-4 comic-border hover:bg-yellow-300 transition-colors uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">event</span>
                  Register Now
                </button>
              </div> */}

              {/* Decorative Comic Elements */}
              {/* <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-full comic-border opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full comic-border opacity-30"></div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;