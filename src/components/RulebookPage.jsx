// RulebookPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ComicCursor from './ComicCursor';

const RulebookPage = () => {
  const events = [
    {
      id: 1,
      title: "SRS",
      subtitle: "Hackathon Rules",
      icon: "code",
      color: "bg-blue-500",
      link: "https://drive.google.com/file/d/1FaXPG6hikTMu3_Vydhlf20tV768KU1iQ/view?usp=drivesdk", // Replace with your actual Drive link
      pages: 12 // Just for display
    },
    {
      id: 2,
      title: "CLASH OF PERSPECTIVES",
      subtitle: "Music Festival Rules",
      icon: "light",
      color: "bg-yellow-400",
      link: "https://drive.google.com/file/d/1xrOoMvrh0fHwCAuQ_Gbq_6NInr1HWsz6/view?usp=drivesdk", // Replace with your actual Drive link
      pages: 8
    },
    {
      id: 3,
      title: "REVERSE ENGINEERING",
      subtitle: "E-Sports Rules",
      icon: "sports_esports",
      color: "bg-green-500",
      link: "https://drive.google.com/file/d/1dpbwYAU38ho2Km1VgjP44xPE-W3-rNvm/view?usp=drivesdk", // Replace with your actual Drive link
      pages: 10
    }
  ];

  const handleBookClick = (link) => {
    window.open(link, '_blank'); // Opens in new tab
  };

  return (
    <div className="min-h-screen bg-background-dark scribble-bg cursor-none" style={{ backgroundColor: "#101622" }}>
      <ComicCursor />
      
      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-6 lg:px-20 py-4 bg-background-dark/80 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <div className="flex items-center gap-2 group" >
            <div className="bg-blue-500 p-2 comic-border border-2">
              <span className="material-symbols-outlined text-white text-2xl font-bold">bolt</span>
            </div>
            <h2 className="text-2xl font-black tracking-tighter italic uppercase text-white">
              RISE 2026
            </h2>
          </div> */}
          
          
          <Link 
            to="/" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-black px-6 py-2 comic-border uppercase transition-transform hover:-translate-y-1"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="py-16 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-black font-black px-6 py-2 comic-border -rotate-2 mb-6">
              RULEBOOKS
            </div>
            <h1 className="text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
              Event <span className="text-blue-500">Rules</span>
            </h1>
            <p className="text-xl font-bold text-slate-400 max-w-2xl mx-auto">
              Click on any book to view the complete rulebook for your chosen event
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer group perspective"
                onClick={() => handleBookClick(event.link)}
              >
                {/* 3D Book Effect */}
                <div className="relative preserve-3d transition-all duration-500 group-hover:rotate-y-12 group-hover:shadow-2xl">
                  {/* Book Cover */}
                  <div className={`relative ${event.color} comic-border p-8 aspect-3/4 shadow-2xl transform-gpu overflow-hidden`}>
                    {/* Spine effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/30"></div>
                    
                    {/* Book texture */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                    }}></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                      <span className="material-symbols-outlined text-8xl text-white mb-4 animate-bounce-slow">
                        {event.icon}
                      </span>
                      <h3 className="text-3xl font-black text-white uppercase italic mb-2">
                        {event.title}
                      </h3>
                      {/* <p className="text-white/80 font-bold mb-4">
                        {event.subtitle}
                      </p> */}
                      
                      {/* Drive indicator */}
                      <div className="flex items-center gap-2 text-white/90 text-sm font-bold bg-black/30 px-4 py-2 comic-border border-2 mt-2">
                        <span className="material-symbols-outlined text-base">folder</span>
                        <span>Google Drive</span>
                      </div>
                      
                      {/* Page count indicator */}
                      {/* <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white font-black">{event.pages}p</span>
                      </div> */}
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Pages (for 3D effect) */}
                  <div className="absolute inset-0 bg-white/10 comic-border translate-x-2 translate-y-2 -z-10"></div>
                </div>
                
                {/* Click instruction */}
                <div className="text-center mt-6">
                  <p className="text-blue-400 font-bold group-hover:text-yellow-400 transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">open_in_new</span>
                    Click to Open Rulebook
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-slate-900 comic-border p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="material-symbols-outlined text-yellow-400">info</span>
                <h3 className="text-xl font-black text-white uppercase">Important Note</h3>
              </div>
              <p className="text-slate-300 font-bold">
                All rulebooks are hosted on Google Drive. Clicking a book will open the folder in a new tab. 
                Make sure you're signed into your Google account to access the files.
              </p>
              <div className="mt-4 flex justify-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-blue-400">
                  <span className="material-symbols-outlined text-base">description</span>
                  PDF Format
                </span>
                <span className="flex items-center gap-1 text-yellow-400">
                  <span className="material-symbols-outlined text-base">update</span>
                  Updated 2026
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-20 border-t-8 border-blue-500 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 font-bold">
            © 2026 RISE FESTIVAL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            For any queries regarding rules, please contact the event coordinators.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RulebookPage;