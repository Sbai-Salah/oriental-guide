"use client";

import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';

const cities = [
  { id: 1, name: "City 1", description: "Beautiful city 1", image: "/city1.jpg" },
  { id: 2, name: "City 2", description: "Beautiful city 2", image: "/city2.jpg" },
  { id: 3, name: "City 3", description: "Beautiful city 3", image: "/city3.jpg" },
];

export default function HeroSection() {
  const [currentCity, setCurrentCity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCity((prevCity) => (prevCity + 1) % cities.length);
    }, 5000); // Automatically slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentCity((prevCity) => (prevCity + 1) % cities.length);
  };

  const handlePrev = () => {
    setCurrentCity((prevCity) => (prevCity - 1 + cities.length) % cities.length);
  };

  return (
    <div className={styles.hero}>
      <video className={styles.videoBackground} autoPlay loop muted playsInline>
          <source src="/videos/bgHeroSection.mp4" type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <div className={styles.slider}>
          <button className={styles.arrow} onClick={handlePrev}>←</button>
          <div className={styles.cityInfo}>
            <h2>{cities[currentCity].name}</h2>
            <p>{cities[currentCity].description}</p>
          </div>
          <button className={styles.arrow} onClick={handleNext}>→</button>
        </div>
      </div>
    </div>
  );
}
