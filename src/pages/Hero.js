import React, { useState, useEffect } from 'react';
import './hero.css'; // Import your CSS file for styling
import img1 from '../images/cauli.jpg';
import img2 from '../images/tomato.jpg';
import img3 from '../images/apples.jpg'

const Hero= () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:img1, // Replace with your image URLs
      text: 'Fresh Picks for a Healthy Life!',
    },
    {
      image: img3,
      text: 'Crunch into Goodness: Our Gardens Finest ',
    },
    {
      image: img2,
      text: 'Harvest Happiness with Every Bite',
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="text-box">
            <h1>{slide.text}</h1>
            <button>Learn More</button>
          </div>
        </div>
      ))}


    </div>
   
     
  );
};

export default Hero;