import React, { useState } from 'react';
import './grad-slide.css';

function GraduationSlider() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  // Calcule la position en pourcentage pour aligner les chiffres
  const getLabelPosition = (value) => {
    const offset = 10; // Ajustez cet offset selon votre mise en page
    return `calc(${(value / 10) * 100}% - ${offset}px)`;
  };

  return (
    <div className="graduation-slider">
      <div className="graduation-text">
        {sliderValue === '0' && "Je peux le faire tout seul"}
        {sliderValue === '10' && "J'ai besoin d'aide pour y arriver"}
      </div>
      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <div className="graduation-scale">
        {[...Array(11)].map((_, index) => (
          <span
            key={index}
            style={{
              left: getLabelPosition(index),
            }}
          >
            {index}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GraduationSlider;
