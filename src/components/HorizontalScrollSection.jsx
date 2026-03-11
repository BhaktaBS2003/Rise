// HorizontalScrollSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["20% start", "end end"],
  });

  // Transform scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const cards = [
    {
      id: 1,
      title: "Student Research Symposium (SRS)",
      description: "Present innovative research across emerging technology domains.",
      image:
        "/flyer2.webp",
      color: "bg-primary",
      icon: "note",
      link:"https://share.google/fl3vIgl6CUSazbj1K"
    },
    {
      id: 2,
      title: "Clash of Perspectives",
      description: "Express ideas through creative interpretation and perspective.",
      image:
        "/flyer1.webp",
      color: "",
      icon: "light",
      link:"https://share.google/BZ3RkV2fyTDghfTW8"
    },
    {
      id: 3,
      title: "Reverse Engineering",
      description: "Analyze systems and decode technical problem logic.",
      image:
        "/flyer3.webp",
      color: "",
      icon: "palette",
      link:"https://forms.gle/XDffN8Q8UTrr9FtQ6"
    },
    // {
    //   id: 4,
    //   title: "Art Gallery",
    //   description: "Digital art showcase",
    //   image:
    //     "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    //   color: "bg-purple-500",
    //   icon: "code",
    //   link:""
    // },
  ];

  // Mobile version - simple horizontal scroll without sticky effect
  if (isMobile) {
    return (
      <section className="py-16 px-4 bg-background-light dark:bg-background-dark" id="events">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="max-w-2xl">
                <div className="inline-block bg-yellow-400 text-black font-black px-4 py-1 comic-border -rotate-2 mb-4">
                  EXPLORE THE EXPERIENCE
                </div>
                <h2 className="text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
                  Featured <span className="text-blue-500">Events</span>
                </h2>
              </div>
              <div className="hidden md:block relative">
                <span className="material-symbols-outlined text-8xl text-blue-500 opacity-20">
                  horizontal_distribute
                </span>
                {/* Animated arrow hint */}
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-8 -right-8 text-yellow-400"
                >
                  <span className="material-symbols-outlined text-4xl">
                    arrow_forward
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Mobile hint */}
            <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
              <span className="material-symbols-outlined text-blue-500 animate-pulse">
                swipe
              </span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Swipe to explore moments
              </span>
            </div>
          </div>

          <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-thin scrollbar-thumb-primary">
            <div className="flex gap-4 w-max">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-72 shrink-0 relative"
                >
                  {/* Claim Your Spot Button - Mobile */}
                  <button className="absolute top-4 left-4 z-20 bg-blue-500 text-white text-xs font-black px-3 py-1 comic-border hover:bg-blue-700 transition-all duration-300 uppercase hover:-translate-y-1 animate-bounce" onClick={() => window.open(card.link, '_blank')}>
                    Register Now
                  </button>
                  
                  <div className={`comic-border overflow-hidden ${card.color} relative`}>
                    <div className="h-96 overflow-hidden border-b-4 border-black">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 bg-white dark:bg-slate-900">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-white">
                          {card.icon}
                        </span>
                        <h3 className="text-xl font-black uppercase text-white">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                        {card.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs font-bold text-blue-500">
                          RISE 2026
                        </span>
                        <span className="text-xs font-black bg-primary text-white px-2 py-1">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 gap-1 md:hidden">
            <span className="material-symbols-outlined text-primary animate-pulse text-white font-extrabold italic">
              swipe
            </span>
            <span className="text-xs uppercase tracking-widest text-primary text-white font-extrabold italic">
              Swipe to explore
            </span>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version - original sticky horizontal scroll
  return (
    <section
      ref={containerRef}
      className="relative bg-background-light dark:bg-background-dark pt-24" id="events"
    >
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-0">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-yellow-400 text-black font-black px-4 py-1 comic-border -rotate-2 mb-4">
              EXPLORE THE EXPERIENCE
            </div>
            <h2 className="text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
              Featured <span className="text-blue-500">Events</span>
            </h2>
            
          </div>
          <div className="hidden md:block relative">
            <span className="material-symbols-outlined text-8xl text-blue-500 opacity-20">
              horizontal_distribute
            </span>
            {/* Animated arrow hint */}
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 text-yellow-400"
            >
              <span className="material-symbols-outlined text-4xl">
                arrow_forward
              </span>
            </motion.div>
          </div>
        </div>

        {/* Mobile hint */}
        <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
          <span className="material-symbols-outlined text-blue-500 animate-pulse">
            swipe
          </span>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Swipe to explore moments
          </span>
        </div>
      </div>

      {/* Scrollable Section */}
      <div className="relative h-[300vh]">
        {/* Sticky container */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background decorative element */}
          <div className="absolute inset-0 halftone text-blue-500 opacity-5 pointer-events-none"></div>

          {/* Content that moves horizontally */}
          <motion.div
            style={{ x }}
            className="flex h-full items-center gap-8 px-8 lg:px-20"
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[70vh] w-[90vw] lg:w-[40vw] xl:w-[30vw] shrink-0"
              >
                <div
                  className={`relative h-full w-full comic-border overflow-hidden ${card.color}`}
                >
                  {/* Claim Your Spot Button - Desktop */}
                  <button onClick={() => window.open(card.link, '_blank')} className="absolute top-6 left-6 z-20 bg-blue-500 text-white text-md font-black px-4 py-2 comic-border hover:bg-blue-700 transition-all duration-300 uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] animate-bounce">
                    Register Now
                  </button>
                  
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-max w-full object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="material-symbols-outlined text-3xl">
                        {card.icon}
                      </span>
                      <h3 className="text-4xl font-black uppercase italic">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-lg font-bold opacity-90 max-w-xs">
                      {card.description}
                    </p>
                  </div>

                  {/* <span className="absolute -top-10 -right-10 text-[200px] font-black text-white/50 pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span> */}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-sm font-extrabold uppercase tracking-widest hidden md:block text-white italic">
              Scroll to explore
            </span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="material-symbols-outlined text-2xl hidden md:block text-white font-extrabold"
            >
              arrow_forward
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;