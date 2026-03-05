import React from "react";
import "./index.css";

const App = () => {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col scribble-bg dark bg-background-dark"
      style={{ backgroundColor: "#101622" }}
    >
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full px-6 lg:px-20 py-4 bg-background-dark/80 backdrop-blur-md border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group">
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
            {["Home", "About", "Events", "Timeline", "Gallery"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-bold hover:text-blue-500 transition-colors uppercase text-sm tracking-widest text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-black px-8 py-3 comic-border uppercase transition-transform hover:-translate-y-1 active:translate-y-0">
            Register Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex-1">
        <section className="relative px-6 lg:px-20 py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 halftone text-blue-500 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="flex flex-col gap-8">
              <div className="inline-block bg-yellow-400 text-black font-black px-4 py-1 self-start comic-border -rotate-2">
                THE BIGGEST TECH-FEST IS BACK
              </div>

              <h1
                className="text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter uppercase italic"
                style={{ color: "#ffffff" }}
              >
                RISE
                <br />
                <span
                  className="drop-shadow-[4px_4px_0px_#fff]"
                  style={{ color: "#0d59f2" }}
                >
                  2026
                </span>
              </h1>

              <p className="text-xl lg:text-2xl font-medium max-w-lg leading-relaxed border-l-8 border-blue-500 pl-6 text-white">
                Ignite Your Ideas. Celebrate Creativity. A digital collage of
                innovation and art.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-blue-500 text-white text-xl font-black px-10 py-5 comic-border hover:bg-blue-700 transition-colors uppercase">
                  Claim Your Spot
                </button>
                <button className="bg-white text-black text-xl font-black px-10 py-5 comic-border hover:bg-slate-100 transition-colors uppercase">
                  Explore Events
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-square bg-blue-500/20 comic-border-white overflow-hidden relative">
                <img
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  alt="Abstract brain illustration with vibrant pop art neon colors"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY4m25fkGe4Fje7Xtb_fQTOA6FkhT-HXV3u1tiG2mjQuvwElL7rwVc3m2qc2Q0KvMa_3jJJwYbhSyJ_ykCjK9d_NfhjmbG7xbi92pb0HKn3Uz-1T6aT5BEVsk8JpOx0d36xoYjbt0_G-rQ1C5PfnWXBWj6qXuJtKtHsOQ1JqsL50z3HXUynrqIKOIWxmQRunRPACPE0JH0732r7InczgDm7nykFEPSYGtR9w_a43lf9vOLWppIVV8FPeH6mk-d0F3vQeFYSdLF5_s"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/40 to-transparent"></div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full comic-border halftone text-black opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 comic-border font-black rotate-3">
                  <span className="material-symbols-outlined text-4xl">
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
          style={{ backgroundColor: "#0c59f2" }}
        >
          <div className="absolute inset-0 halftone opacity-20 text-black"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-5xl lg:text-7xl font-black mb-8 italic uppercase tracking-tighter">
                  About the Movement
                </h2>
                <p className="text-xl lg:text-2xl font-medium leading-relaxed opacity-90">
                  RISE is not just a festival; it's a high-contrast collision of
                  technology, music, and pop culture. We bring together the
                  brightest minds to challenge the status quo through energetic
                  celebrations and bold innovation.
                </p>
              </div>

              <div className="flex flex-col gap-6 justify-center">
                <div className="bg-white text-black p-8 comic-border transform rotate-2">
                  <h3 className="text-3xl font-black mb-2">50+ EVENTS</h3>
                  <p className="font-bold opacity-70">
                    From coding to concerts
                  </p>
                </div>
                <div className="bg-black text-white p-8 comic-border transform -rotate-1">
                  <h3 className="text-3xl font-black mb-2">10K+ ATTENDEES</h3>
                  <p className="font-bold opacity-70">
                    Nationwide participation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section
          className="py-24 px-6 lg:px-20 bg-background-light dark:bg-background-dark"
          id="events"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-4">
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
        </section>

        {/* Timeline Section */}
        <section
          className="py-24 px-6 lg:px-20 bg-black text-white relative"
          id="timeline"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-4">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black uppercase italic tracking-tighter sticky top-32">
                The
                <br />
                Schedule
              </h2>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              {timeline.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-6 lg:px-20" id="gallery">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-16 text-center">
              Past Memories
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {gallery.map((image, index) => (
                <GalleryItem key={index} {...image} index={index} />
              ))}
            </div>
          </div>
        </section>

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
      </main>

      {/* Footer */}
      <Footer />
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
      <h3 className="text-3xl font-black mb-3 uppercase italic">{title}</h3>
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
    <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">
      arrow_forward
    </span>
  </div>
);

// Gallery Item Component
const GalleryItem = ({ image, alt, index }) => (
  <div
    className={`aspect-square bg-slate-200 comic-border overflow-hidden relative group ${index % 2 === 1 ? "translate-y-8" : ""}`}
  >
    <img
      className="w-full h-full object-cover grayscale transition-transform group-hover:scale-110"
      alt={alt}
      src={image}
    />
    <div className="absolute inset-0 halftone opacity-40 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
  </div>
);

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
        <p>© 2026 RISE FESTIVAL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <span>EST. 2012</span>
          <span>#RISE2026</span>
        </div>
      </div>
    </div>
  </footer>
);

// Data Arrays
const events = [
  {
    title: "Tech Hack",
    description:
      "48 hours of non-stop building, breaking, and innovating the future of web3 and AI.",
    tag: "Hackathon",
    buttonText: "Enter the Grid",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8RSOUYjKagG3mq66OFzlqN5M-TsEZkFrSDuEoaHKDif6wkCzvQtHbL__hYM8N-jwDCKeyMHl0wOGqHCEqxW4jtSFxTmNoioO05M3QX-c0f3xEbw2NjyhLP3yONIN1ExWFxQjkS3-BkT3gECh7cSkEq9_gjAZLCW4vxcimY5nOV7J_OhrV0Mu8_gtCfkCX7jJojZV_gvy7yRYNxzfCKoEDaF1Qrl0_7_tQd9rx6nkWjo8vF5kS-3h66XlolcNHgN4nxgPh6KdEu_Y",
  },
  {
    title: "Sonic Boom",
    description:
      "Experience the pulse. A multi-genre battle of bands and electronic soundscapes.",
    tag: "Music",
    buttonText: "Join the Vibe",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCntnavJzM3jueZm8Tabbn-GJ1NxssTNkLDF_Ef1zm0LO0Z98KLe5tMcxXRPH1YFxwqQ4HVaSDktsg-1KU-5WpwxD9RaZlqSH2_GMiW1QB3to0PPajgkpDA9HmsyTlldyMIjphuiEa-r1Cz8W9J9dCR1Lez1Wjlknb6JL-ZYKcwgmHVT2RE7IErol-nupUzmr7Sxxv7CTO9JEV-SAFKE7WJIiufri4-8yuJz7CrOEgBAEbZN4sBSRxKN7JDiOgx6xWDWP69RLq5jaw",
  },
  {
    title: "Frag Fest",
    description:
      "Dominate the arena in Valorant, FIFA, and CS2. High stakes gaming for the elite.",
    tag: "E-Sports",
    buttonText: "Start Match",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOW7PCe-Pssakf627HBGi0HNPY0c6SfjqNZq-_33Gqav8HQAD9HxA9ImnkxDQez0kmM6S54zT1l6vBRZGFykntgq6WoZdV9wCPk5b6fjV_qckRKf6PLDc-vmQHlcN0zAIsDD8QMjoxXtzssRuINlMmGTKo9YLM7FudgbXEVHW0OPKSGussqPcpe8JyBhjwHExapL79l2ZmdW9RWtTV5IntobVpsUPoDs-z6S1sEmQ_WDMltZOUcomDCN4-33tovaEm4U2KVKvxKuM",
  },
];

const timeline = [
  { day: "Day 01 | March 15", title: "Inauguration & Tech Keynotes" },
  { day: "Day 02 | March 16", title: "Hackathon Finals & Cultural Night" },
  { day: "Day 03 | March 17", title: "Grand Concert & Award Ceremony" },
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

const sponsors = ["TechGiant", "FutureFlow", "NovaSoft", "PixelCore"];

export default App;
