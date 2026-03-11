import React from 'react';
import './ScrollingTestimonials.css'; 

const TestimonialCard = ({ testimonial }) => {
  const { name, role, image, description } = testimonial;
  
  return (
    <div className="flex h-44 w-96 shrink-0 overflow-hidden rounded-xl border-2 border-black bg-white dark:border-zinc-700 dark:bg-blue-600 comic-border">
      {/* <div className="relative h-full w-32 shrink-0 overflow-hidden bg-primary/10"> */}
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform hover:scale-110"
        />
      {/* </div> */}
      {/* <div className="flex flex-1 flex-col px-4 py-3">
        <span className="text-lg font-black text-slate-900 dark:text-white">
          {name}
        </span>
        <span className="-mt-1 mb-2 text-sm font-bold text-primary">
          {role}
        </span>
        <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          "{description}"
        </p>
      </div> */}
    </div>
  );
};

const MarqueeRow = ({ items, reverse = false, duration = 25 }) => {
  return (
    <div className={`marquee-row ${reverse ? 'marquee-reverse' : ''}`}>
      <div 
        className="marquee-content"
        style={{ '--duration': `${duration}s` }}
      >
        {/* First set */}
        {items.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} testimonial={item} />
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <TestimonialCard key={`${item.name}-duplicate-${index}`} testimonial={item} />
        ))}
      </div>
    </div>
  );
};

const ScrollingTestimonials = ({ data }) => {
  return (
    <div className="flex w-full flex-col gap-6 overflow-hidden py-8">
      <MarqueeRow items={data} duration={25} />
      <MarqueeRow items={data} reverse={true} duration={30} />
      <MarqueeRow items={data} duration={28} />
    </div>
  );
};

// Sample data - you can replace this with your own
export const sampleTestimonials = [
  {
    name: "Alex Chen",
    role: "Founder of TechFlow",
    image: "/tst1.webp",
    description: "RISE 2026 was absolutely incredible! The energy, the people, and the innovation - everything was perfect."
  },
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image: "/tst2.webp",
    description: "Best tech festival I've ever attended. Met amazing people and learned so much from the workshops."
  },
  {
    name: "Mike Rivera",
    role: "Creative Director",
    image: "/tst3.webp",
    description: "The combination of tech and art was mind-blowing. Can't wait for next year!"
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    image: "/tst4.webp",
    description: "Networking opportunities were incredible. Made connections that will last a lifetime."
  },
  {
    name: "James Wilson",
    role: "Music Producer",
    image: "/tst5.webp",
    description: "Sonic Boom stage was legendary! The production quality was world-class."
  },
  // {
  //   name: "Elena Rodriguez",
  //   role: "Game Developer",
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  //   description: "Frag Fest was intense! Competed against the best players in the region."
  // }
];

export default ScrollingTestimonials;