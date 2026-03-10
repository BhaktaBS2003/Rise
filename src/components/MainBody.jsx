import React, { useState, useEffect } from 'react';
import ScrollingTestimonials from "./ScrollingTestimonials";
import { sampleTestimonials } from "./ScrollingTestimonials";
import HorizontalScrollSection from "./HorizontalScrollSection";
import ComicCursor from "./ComicCursor";
import MobileMenu from "./MobileMenu";

const MainBody = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col scribble-bg dark bg-background-dark cursor-none"
      style={{ backgroundColor: "#101622" }}
    >
      <ComicCursor />
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full px-6 lg:px-20 py-4 bg-background-dark/80 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden lg:flex items-center gap-2 group">
            <div className="bg-blue-500 p-2 comic-border border-2">
              <span className="material-symbols-outlined text-white text-2xl font-bold">
                bolt
              </span>
            </div>
            <h2 className="text-2xl font-black tracking-tighter italic uppercase dark:text-white">
              RISE 2026
            </h2>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {["Home", "About", "Events", "Timeline", "Team"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-extrabold hover:text-yellow-400 transition-colors uppercase text-md tracking-widest text-white italic"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          <a className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white font-black px-8 py-3 comic-border uppercase transition-transform hover:-translate-y-1 active:translate-y-0" href="#events">
            Register Now
          </a>
        </div>

        <MobileMenu />
      </header>

      {/* Hero Section */}
      <main className="relative flex-1">
        <section className="relative px-6 lg:px-20 py-15 lg:py-20 overflow-hidden" id="home">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 halftone text-blue-500 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="flex flex-col gap-8">
              <div className="inline-block bg-yellow-400 text-black font-black px-4 py-1 self-start comic-border -rotate-2 animate-bounce">
                THE BIGGEST EVENT IS HERE !!!
              </div>

              <h1
                className="text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase italic"
                style={{ color: "#ffffff" }}
              >
                RISE
                <br />
                <span
                  className="drop-shadow-[4px_4px_0px_#fff] text-blue-500"
                  
                >
                  2026
                </span>
              </h1>

              <p className="text-xl lg:text-2xl font-bold max-w-lg leading-relaxed border-l-8 border-blue-500 pl-6 text-white italic">
                INSPIRE CREATIVITY • SHOWCASE TALENT • UNITE PASSIONATE MINDS
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-blue-500 text-white text-xl font-black px-10 py-5 comic-border hover:bg-blue-700 transition-all duration-300 uppercase hover:-translate-y-2">
                  Claim Your Spot
                </button>
                <a
                  className="bg-white text-black text-xl font-black px-10 py-5 comic-border hover:bg-slate-100 transition-all uppercase duration-300 hover:-translate-y-2"
                  href="#events"
                >
                  Explore Events
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - ANIMATED IMAGE */}
            <div className="relative animate-dramatic">
              <div className="w-full aspect-square bg-blue-500/20 comic-border-white overflow-hidden relative">
                <img
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 animate-zoom"
                  alt="Abstract brain illustration with vibrant pop art neon colors"
                  src="/brain.png"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/40 to-transparent"></div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full comic-border halftone text-black opacity-50 animate-pulse-glow"></div>
                <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 comic-border font-black rotate-3 animate-bounce-rotate">
                  <span className="material-symbols-outlined text-4xl animate-spin-icon">
                    psychology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="bg-blue-500 py-24 px-6 lg:px-20 text-white relative overflow-hidden"
          id="about"
          style={{ backgroundColor: "#3276fc" }}
        >
          <div className="absolute inset-0 halftone opacity-20 text-black"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-5xl lg:text-7xl font-black mb-8 italic uppercase tracking-tighter">
                  About RISE
                </h2>
                <p className="text-xl lg:text-2xl font-bold leading-relaxed opacity-90 uppercase italic">
                  RISE 2026 brings together passionate innovators to spark
                  creativity, showcase talent, and challenge perspectives.
                  Blending technology, creativity, and competition, the event
                  provides a platform for participants to present ideas and
                  demonstrate their skills in an engaging environment.
                  <br />
                  <br />
                  Through research discussions, analytical challenges, and
                  perspective-driven competitions, RISE encourages participants
                  to explore new possibilities, connect with like-minded
                  thinkers, and experience the energy of innovation.
                  <br />
                  <br />
                  RISE 2026 is scheduled to take place on 10th and 11th April
                  2026.
                </p>
              </div>

              <div className="flex flex-col gap-6 justify-center">
                <div className="bg-white text-black p-8 comic-border transform transition-all duration-300 hover:rotate-5">
                  <h3 className="text-3xl font-black mb-2">3 EVENTS</h3>
                  <p className="font-bold opacity-70">
                    From Research to Rivalry
                  </p>
                </div>
                <div className="bg-black text-white p-8 comic-border transform transition-all duration-300 hover:-rotate-6">
                  <h3 className="text-3xl font-black mb-2">30K PRIZE POOL</h3>
                  <p className="font-bold opacity-70">
                    Compete. Innovate. Win big.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        {/* <section
          className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark"
          id="events"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                  Major Stages
                </h2>
                <p className="text-xl font-bold text-slate-500">
                  Pick your arena and show the world what you're made of.
                </p>
              </div>
              <span className="material-symbols-outlined text-8xl text-blue-500 opacity-20">
                widgets
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {events.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section> */}

        <HorizontalScrollSection />

        {/* Timeline Section */}
        <section
          className="py-24 px-6 lg:px-20 bg-black text-white relative overflow-hidden"
          id="timeline"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 halftone text-blue-500 opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl"></div>

          <div className="max-w-9xl mx-auto grid lg:grid-cols-4 gap-6 relative z-10">
            <div className="lg:col-span-1">
              <div className="inline-block bg-yellow-400 text-black font-black px-4 py-1 comic-border -rotate-2 mb-4">
                COUNTDOWN
              </div>
              <h2 className="text-5xl font-black uppercase italic tracking-tighter sticky top-32">
                The
                <br />
                Countdown Begins
              </h2>
            </div>

            <div className="lg:col-span-3">
              {/* Countdown Timer Card */}
              <div className="bg-slate-900/80 p-8 comic-border border-blue-500/50 backdrop-blur-sm mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="material-symbols-outlined text-4xl text-yellow-400">
                    event_upcoming
                  </span>
                  <h3 className="text-3xl font-black uppercase italic">
                    Event Starts In
                  </h3>
                </div>

                <CountdownTimer targetDate="2026-04-10T00:00:00" />

                {/* <div className="mt-6 flex justify-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    April 10, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    00:00 GMT
                  </span>
                </div> */}
              </div>

              {/* Timeline Items */}
              {/* <div className="flex flex-col gap-4 mt-8">
                {timeline.map((item, index) => (
                  <TimelineItem key={index} {...item} />
                ))}
              </div> */}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section className="py-24 px-6 lg:px-20" id="gallery">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter mb-16 text-center">
              Past Memories
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {gallery.map((image, index) => (
                <GalleryItem key={index} {...image} index={index} />
              ))}
            </div>
          </div>
        </section> */}

        <ScrollingTestimonials data={sampleTestimonials} />

        {/* Sponsors */}
        <section className="py-24 px-6 lg:px-20 bg-blue-500/10">
          <div className="max-w-7xl mx-auto">
            <p className="text-center font-black uppercase tracking-widest text-blue-500 mb-12">
              Empowered by
            </p>

            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              {sponsors.map((sponsor, index) => (
                <span
                  key={index}
                  className="text-4xl font-black italic tracking-tighter uppercase dark:text-white"
                >
                  {sponsor}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Secretary Message Section */}
        <section
          className="py-24 px-6 lg:px-20 bg-background-dark relative overflow-hidden"
          id="secretary-message"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 halftone text-blue-500 opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block bg-yellow-400 text-black font-black px-6 py-2 comic-border -rotate-2 mb-6">
                FROM THE DESK OF
              </div>
              <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                Secretary's <span className="text-blue-500">Message</span>
              </h2>
            </div>

            {/* Message Card */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left side - Secretary Photo Card */}
                <div className="relative group">
                  {/* Photo Card with comic styling */}
                  <div className="relative bg-slate-900 comic-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:translate-x-2 hover:shadow-[12px_12px_0px_#0d59f2]">
                    {/* Image Container */}
                    <div className="relative h-100 overflow-hidden border-b-4 border-black">
                      <img
                        src="/secretary-photo.webp"
                        alt="Secretary"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />

                      {/* Role Badge */}
                      <div className="absolute top-4 left-4 bg-blue-500 text-white font-black px-4 py-2 comic-border text-sm uppercase tracking-wider">
                        Secretary Achievers' Club
                      </div>

                      {/* Year Badge */}
                      <div className="absolute bottom-4 right-4 bg-yellow-400 text-black font-black px-4 py-2 comic-border text-sm">
                        2025-2026
                      </div>

                      {/* Decorative halftone overlay */}
                      <div className="absolute inset-0 halftone text-white opacity-20 pointer-events-none"></div>
                    </div>

                    {/* Name and Title */}
                    <div className="p-6 bg-slate-900">
                      <h3 className="text-3xl font-black text-white mb-1 uppercase italic">
                        vaishnavi singh
                      </h3>
                      <p className="text-blue-400 font-bold text-lg">
                        • RISE 2026
                      </p>
                    </div>
                  </div>

                  {/* Decorative comic dots */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-400 rounded-full comic-border border-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-blue-500 rounded-full comic-border border-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
                </div>

                {/* Right side - Message */}
                <div className="relative">
                  {/* Opening quote mark */}
                  <div className="absolute -top-8 -left-4 text-9xl font-black text-blue-500/20 italic">
                    "
                  </div>

                  {/* Message content */}
                  <div className="relative z-10 space-y-6">
                    <div className="bg-slate-900/50 p-8 comic-border border-blue-500/30 backdrop-blur-sm">
                      <p className="text-xl lg:text-lg text-white/90 font-bold leading-relaxed italic">
                        "It is a pleasure to welcome you to RISE (Research,
                        Innovation, Science & Excellence), an inter-college
                        initiative organized by the Silicon Achievers' Club,
                        Silicon University, Odisha. This event aims to bring
                        together enthusiastic students from diverse institutions
                        to share ideas, showcase their talents, and celebrate
                        innovation and learning."
                      </p>
                    </div>

                    <div className="bg-slate-900 p-6 comic-border border-yellow-400/30">
                      <p className="text-xl lg:text-lg text-white/90 font-bold leading-relaxed italic">
                        "I sincerely appreciate the efforts of the organizing
                        team and the support of our faculty members in making
                        this event possible. I warmly invite students from
                        different institutions to participate and make RISE a
                        truly engaging and memorable experience."
                      </p>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-1 h-16 bg-blue-500"></div>
                      <p className="text-yellow-400 font-black text-xl uppercase italic tracking-tight">
                        Together, we don't just witness the future - we create
                        it.
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-8 pt-4 border-t-4 border-dashed border-blue-500/30">
                      <p
                        className="font-mono text-4xl text-white italic"
                        style={{ fontFamily: "Sacramento" }}
                      >
                        Vaishnavi Singh
                      </p>
                      {/* <p className="text-blue-400 font-bold mt-2">
                        General Secretary • RISE 2026
                      </p> */}
                    </div>
                  </div>

                  {/* Closing quote mark */}
                  <div className="absolute -bottom-16 -right-4 text-9xl font-black text-blue-500/20 italic rotate-180">
                    "
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-3 mt-16">
                <div className="w-20 h-2 bg-blue-500 comic-border"></div>
                <div className="w-10 h-2 bg-yellow-400 comic-border"></div>
                <div className="w-20 h-2 bg-blue-500 comic-border"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}

        <section
          className="py-24 px-6 lg:px-20 bg-background-dark relative overflow-hidden"
          id="team"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 halftone text-blue-500 opacity-5"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block bg-yellow-400 text-black font-black px-6 py-2 comic-border -rotate-2 mb-6">
                MEET THE MASTERMINDS
              </div>
              <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter mb-4">
                Our <span className="text-blue-500">Team</span>
              </h2>
              <p className="text-xl font-bold text-slate-400 max-w-2xl mx-auto">
                The creative minds behind RISE 2026
              </p>
            </div>

            {/* Teams Grid */}
            <div className="space-y-20">
              {/* Content Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    description
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    Content <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                {/* Mobile: Horizontal scroll, Desktop: Grid */}
                <div className="relative">
                  {/* Gradient fade indicators for mobile */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  {/* Scrollable container */}
                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.content.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  {/* Scroll hint for mobile */}
                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Design Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    code
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    Web Design <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                {/* Mobile: Horizontal scroll, Desktop: Grid */}
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.webDesign.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphics Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    brush
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    Graphics <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.graphics.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logistics Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    local_shipping
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    Logistics <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.logistics.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Production Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    photo_camera
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    Media Production <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.media_production.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PR Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    people
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    PR <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.pr.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sponsorship Team */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-5xl text-yellow-400">
                    money
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter">
                    Sponsorship <span className="text-blue-500">Team</span>
                  </h3>
                  <div className="flex-1 h-1 bg-linear-to-r from-blue-500 to-transparent"></div>
                </div>

                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-background-dark to-transparent pointer-events-none md:hidden z-10"></div>

                  <div className="overflow-x-auto pb-6 hide-scrollbar md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
                      {teamMembers.sponsership.map((member, index) => (
                        <TeamCard key={index} member={member} />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:hidden">
                    <div className="flex items-center gap-1 text-blue-500 animate-pulse">
                      <span className="material-symbols-outlined text-sm">
                        swipe
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Swipe to see more
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Team Card Component
const TeamCard = ({ member }) => {
  const { name, role, year, image, social } = member;

  return (
    <div className="group relative">
      {/* Card with comic border */}
      <div className="relative bg-slate-900 comic-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:translate-x-1 hover:shadow-[8px_8px_0px_#0d59f2]">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden border-b-4 border-black">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
          />
          {/* Overlay with year */}
          <div className="absolute top-2 right-2 bg-yellow-400 text-black font-black px-3 py-1 comic-border text-sm">
            {year}
          </div>
          {/* Role badge */}
          <div className="absolute bottom-2 left-2 bg-blue-500 text-white font-black px-3 py-1 comic-border text-xs uppercase">
            {role}
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 bg-slate-900">
          <h4 className="text-xl font-black text-white mb-2 uppercase italic">
            {name}
          </h4>
        </div>
      </div>

      {/* Decorative element - comic dot */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full comic-border border-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, description, tag, image, buttonText }) => (
  <div className="group flex flex-col bg-white dark:bg-slate-900 comic-border transition-transform hover:-translate-y-2">
    <div className="h-64 overflow-hidden relative border-b-4 border-black">
      <img
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
        alt={title}
        src={image}
      />
      <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-transparent transition-all"></div>
      <div className="absolute top-4 left-4 bg-blue-500 text-white font-bold px-3 py-1 comic-border text-xs uppercase">
        {tag}
      </div>
    </div>

    <div className="p-8">
      <h3 className="text-3xl font-black text-white mb-3 uppercase italic">
        {title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 font-bold mb-6">
        {description}
      </p>
      <button className="w-full py-3 bg-black text-white font-black comic-border hover:bg-blue-500 transition-colors uppercase italic">
        {buttonText}
      </button>
    </div>
  </div>
);

// Timeline Item Component
const TimelineItem = ({ day, title }) => (
  <div className="group bg-slate-900 p-8 comic-border-white flex items-center justify-between hover:bg-blue-500 transition-colors cursor-default">
    <div>
      <span className="text-blue-500 group-hover:text-white font-black text-sm uppercase mb-2 block">
        {day}
      </span>
      <h4 className="text-3xl font-black uppercase italic">{title}</h4>
    </div>
    {/* <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">
      arrow_forward
    </span> */}
  </div>
);

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Event has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Format numbers with leading zeros
  const formatNumber = (num) => String(num).padStart(2, "0");

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days, color: "from-blue-500 to-blue-600" },
    {
      label: "HRS",
      value: formatNumber(timeLeft.hours),
      color: "from-yellow-400 to-yellow-500",
    },
    {
      label: "MINS",
      value: formatNumber(timeLeft.minutes),
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "SECS",
      value: formatNumber(timeLeft.seconds),
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="relative group">
          {/* Comic-style timer card */}
          <div
            className={`bg-linear-to-br ${unit.color} p-4 comic-border text-center transform transition-all duration-300 hover:-translate-y-1 hover:scale-105`}
          >
            <div className="text-4xl md:text-6xl font-black text-white mb-1 font-mono italic">
              {unit.value}
            </div>
            <div className="text-lg font-bold text-white/80 tracking-widest">
              {unit.label}
            </div>
          </div>

          {/* Decorative dot */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full comic-border border-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  );
};

// Gallery Item Component
// const GalleryItem = ({ image, alt, index }) => (
//   <div
//     className={`aspect-square bg-slate-200 comic-border overflow-hidden relative group ${index % 2 === 1 ? "translate-y-8" : ""}`}
//   >
//     <img
//       className="w-full h-full object-cover grayscale transition-transform group-hover:scale-110"
//       alt={alt}
//       src={image}
//     />
//     <div className="absolute inset-0 halftone opacity-40 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
//   </div>
// );

// Footer Component
const Footer = () => (
  <footer className="bg-black text-white py-20 px-6 lg:px-20 border-t-8 border-blue-500">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-blue-500 p-2 border-2 border-white">
              <span className="material-symbols-outlined text-white text-xl">
                bolt
              </span>
            </div>
            <h2 className="text-3xl font-black italic uppercase ">RISE 2026</h2>
          </div>
          <p className="text-slate-400 font-bold text-lg max-w-sm">
            The definitive student experience for those who dare to dream,
            build, and lead.
          </p>
        </div>

        <div>
          <h4 className="font-black uppercase mb-6 text-blue-500 tracking-widest">
            Navigation
          </h4>
          <ul className="flex flex-col gap-4 font-bold text-slate-300">
            {[
              "Campus Map",
              "Volunteering",
              "Privacy Policy",
              "Contact Support",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase mb-6 text-blue-500 tracking-widest">
            Connect
          </h4>
          <div className="flex gap-4">
            {["share", "chat", "campaign"].map((icon) => (
              <div
                key={icon}
                className="w-12 h-12 bg-white text-black flex items-center justify-center comic-border cursor-pointer hover:bg-blue-500 hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-bold">
        <p>© 2026 RISE SILICON UNIVERSITY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          {/* <span>EST. 2012</span> */}
          <span>#RISE2026</span>
        </div>
      </div>
    </div>
  </footer>
);

// Data Arrays
// const events = [
//   {
//     title: "Tech Hack",
//     description:
//       "48 hours of non-stop building, breaking, and innovating the future of web3 and AI.",
//     tag: "Hackathon",
//     buttonText: "Enter the Grid",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuC8RSOUYjKagG3mq66OFzlqN5M-TsEZkFrSDuEoaHKDif6wkCzvQtHbL__hYM8N-jwDCKeyMHl0wOGqHCEqxW4jtSFxTmNoioO05M3QX-c0f3xEbw2NjyhLP3yONIN1ExWFxQjkS3-BkT3gECh7cSkEq9_gjAZLCW4vxcimY5nOV7J_OhrV0Mu8_gtCfkCX7jJojZV_gvy7yRYNxzfCKoEDaF1Qrl0_7_tQd9rx6nkWjo8vF5kS-3h66XlolcNHgN4nxgPh6KdEu_Y",
//   },
//   {
//     title: "Sonic Boom",
//     description:
//       "Experience the pulse. A multi-genre battle of bands and electronic soundscapes.",
//     tag: "Music",
//     buttonText: "Join the Vibe",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCntnavJzM3jueZm8Tabbn-GJ1NxssTNkLDF_Ef1zm0LO0Z98KLe5tMcxXRPH1YFxwqQ4HVaSDktsg-1KU-5WpwxD9RaZlqSH2_GMiW1QB3to0PPajgkpDA9HmsyTlldyMIjphuiEa-r1Cz8W9J9dCR1Lez1Wjlknb6JL-ZYKcwgmHVT2RE7IErol-nupUzmr7Sxxv7CTO9JEV-SAFKE7WJIiufri4-8yuJz7CrOEgBAEbZN4sBSRxKN7JDiOgx6xWDWP69RLq5jaw",
//   },
//   {
//     title: "Frag Fest",
//     description:
//       "Dominate the arena in Valorant, FIFA, and CS2. High stakes gaming for the elite.",
//     tag: "E-Sports",
//     buttonText: "Start Match",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBOW7PCe-Pssakf627HBGi0HNPY0c6SfjqNZq-_33Gqav8HQAD9HxA9ImnkxDQez0kmM6S54zT1l6vBRZGFykntgq6WoZdV9wCPk5b6fjV_qckRKf6PLDc-vmQHlcN0zAIsDD8QMjoxXtzssRuINlMmGTKo9YLM7FudgbXEVHW0OPKSGussqPcpe8JyBhjwHExapL79l2ZmdW9RWtTV5IntobVpsUPoDs-z6S1sEmQ_WDMltZOUcomDCN4-33tovaEm4U2KVKvxKuM",
//   },
// ];

const timeline = [
  { day: "Day 01 | April 10", title: "Inauguration & Tech Keynotes" },
  { day: "Day 02 | April 11", title: "Hackathon Finals & Cultural Night" },
];

const gallery = [
  {
    alt: "Action shot of a performance on stage",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDm4WQOAXu6wG56pL8BAeXUdZt2lsPPOknrwrY4HtjUVFJkecaLqSIyS00EokfXSWBndoOx7fMz-ke3gxPbzUl77Okg9YPuH-a0azTaar464CtMLOqoplch87svHd3fNl0SlsUUNdHJ7HZp1LNy1sYGUOkjAdBIUrIyUovYnyDUylYOVSViHrSjAVFnGD0ZrCeppCwtgMMlKEOsENpqKg1y-OyJCSd-pu26JnSrbht9dcJeTuZ92-H-qLP1uN135mTrJcHt6ViK5pY",
  },
  {
    alt: "Microphone on stage with bright lighting",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqyj8-e1s_aoMtFlaSYSWjcYKC9LhHbBUkg-37HwFaQ6bIS4lIzqNmaMRXQnRnfQBOyQio7711L9JpVIDkTy_3yXXkSZ026kS_YtN1RT6iGPBmTXXkGhh_ZJ8I8IPsIKMX3fkG56JnIe9Z-2Xql4n9hxfA4BmlKZaTqR5B1ZPrfH9h3Mm5VHWT4NN6HQceqqKdr8fWJJkck_NhKo1oPP-XujL_bHlrV2_d5YE_Kl2LxMkm8cgeik_Uq3IGpHVLwsLf-PZClBVylAo",
  },
  {
    alt: "People collaborating on laptop in a workspace",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiYQNBIcnBXftXgj6RHBPplBrc1v4tU0emRdNHrQ9Lt0Hk1KIMZR6aAgufroa5GwuBc6A7Y7oJU1tpabCfLjs7E8JW9X8IUxFDxotv7J7Q1MpLGnzNMLGoeSA8BPagCYIgEHois8ZjuoAeBGd_M675Zjw5y3_einMdoiVIu7qghEkafYahgNMWdlJjFoB0yAgRpR-ztuS3Do_6kEdxDLvvfanNpVjT11cNXhRkoj1TsZbCz7vAqLJIrV_okBwyM3gxk-Z95zRqnVU",
  },
  {
    alt: "Audience cheering at an outdoor festival",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAUR-VpIqxsOd9gJoGxwYtIvQK2BLTIj4Wc-pBFga1nZisC0rful5N5jbzqVGv8hVxDZ6M0dvUVgQ4d6sgOnHawSJsBODuGgDBTjgVdsuCiIqlsGgV21o6DjMQsx_4MQNP4vdhIGUuZWCeXqUsLmx_6sLyK8E0CIaRg6bS34K4qe_shGKhT-A4CV0-HynPDkd00XVBCsR2rD3VTWu5XdLnT7en5ixqEAQrmiqS7DUMFX5RWqtprtMtEC1TD88mLFJYy8YLket4VYk",
  },
];

// Team Data
const teamMembers = {
  content: [
    {
      name: "Danish Khan",
      role: "Content Lead",
      year: "MCA 2nd Year",
      image: "/DK.webp",
    },
    {
      name: "Ankit Kumar Singh",
      role: "Member",
      year: "1st year",
      image: "/AKS.webp",
    },
    {
      name: "MD Rihan Alam Khan",
      role: "Member",
      year: "2nd Year",
      image: "/MD.webp",
    },
    {
      name: "Shreyasee Panda",
      role: "Member",
      year: "2nd Year",
      image: "/SP.webp",
    },
  ],

  webDesign: [
    {
      name: "Bhakta Baschhal Sahoo",
      role: "Website Lead",
      year: "4th Year",
      image: "/BBS.webp",
    },
    {
      name: "Abhijit Maity",
      role: "Frontend Lead",
      year: "4th Year",
      image: "/AM.webp",
    },
    {
      name: "P Satya Prakash",
      role: "UI/UX Lead",
      year: "4th Year",
      image:
        "/PSP.webp",
    },
  ],

  graphics: [
    {
      name: "Anudeep Bayard",
      role: "Graphics Lead",
      year: "4th Year",
      image: "/AB.webp",
    },
    {
      name: "Aditya Das",
      role: "Graphics Co-Lead",
      year: "3rd Year",
      image: "/AD.webp",
      //   social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sanchita Routray",
      role: "Graphics Co-Lead",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      //   social: { linkedin: "#" },
    },
  ],

  logistics: [
    {
      name: "Satyam Swarup Rout",
      role: "Logistics Lead",
      year: "4th Year",
      image: "/SSR.webp",
      //   social: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Prakhar Mishra",
      role: "Logistics Lead",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      //   social: { linkedin: "#" },
    },
    {
      name: "Priyanshu Sekhar Badhei",
      role: "Member",
      year: "2nd Year",
      image: "/PSB.webp",
      //   social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Ashish Kumar Panigrahi",
      role: "Member",
      year: "2nd Year",
      image: "/AKP.webp",
      //   social: { linkedin: "#", instagram: "#" },
    },
  ],

  media_production: [
    {
      name: "Kaushik Bihari",
      role: "Media Prod Lead",
      year: "3rd Year",
      image: "/KB.webp",
      //   social: { instagram: "#", twitter: "#" },
    },
    {
      name: "Bhargav Kumar Patra",
      role: "Media Prod Lead",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
      //   social: { instagram: "#", linkedin: "#" },
    },
  ],

  pr: [
    {
      name: "Ashish Samal",
      role: "PR Lead",
      year: "3rd Year",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      //   social: { instagram: "#", twitter: "#" },
    },
    {
      name: "Udit Pattnaik",
      role: "PR Lead",
      year: "3rd Year",
      image: "/UP.webp",
      //   social: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Shafaq Jamal",
      role: "Member",
      year: "2nd Year",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      //   social: { instagram: "#" },
    },
  ],

  sponsership: [
    {
      name: "Subham Kumar Das",
      role: "Sponsorship Lead",
      year: "3rd year",
      image: "/SKD.webp",
      //   social: { instagram: "#", twitter: "#" },
    },
    {
      name: "Mannat Mishra",
      role: "Member",
      year: "3rd year",
      image: "/MM.webp",
      //   social: { instagram: "#", linkedin: "#" },
    },
    {
      name: "Swastik Suvam Behera",
      role: "Member",
      year: "3rd Year",
      image: "/SSB.webp",
      //   social: { instagram: "#" },
    },
  ],
};

const sponsors = ["TechGiant", "FutureFlow", "NovaSoft", "PixelCore"];

export default MainBody;
