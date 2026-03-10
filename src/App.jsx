import React, { useState } from "react";
import "./index.css";
import MainBody from "./components/MainBody";
import ScrollingTestimonials from "./components/ScrollingTestimonials";
import { sampleTestimonials } from "./components/ScrollingTestimonials";
import HorizontalScrollSection from "./components/HorizontalScrollSection";
import ComicCursor from "./components/ComicCursor";
import IntroVideo from "./components/IntroVideo";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowWebsite(true);
  };

  // Optional: Check if user has already seen intro (using localStorage)
  const [hasSeenIntro, setHasSeenIntro] = useState(() => {
    return localStorage.getItem("hasSeenIntro") === "true";
  });

  const handleIntroCompleteWithMemory = () => {
    localStorage.setItem("hasSeenIntro", "true");
    setShowIntro(false);
    setShowWebsite(true);
  };

  // If user has seen intro before, skip it
  if (hasSeenIntro) {
    return (
      <MainBody />
    );
  }

  return (
    <>
      {showIntro && <IntroVideo onComplete={handleIntroCompleteWithMemory} />}

      {showWebsite && (
        <MainBody/>
      )}
    </>
  );
};


export default App;
