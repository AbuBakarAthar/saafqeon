import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Card = ({ title, description, icon, time }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTime, setShowTime] = useState(false); // State for time visibility
  
  // Use the Intersection Observer to trigger animation when the card is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger once when it comes into view
    threshold: 0.5, // Trigger when 50% of the element is in the viewport
  });

  // Update visibility based on whether the card is in view
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      
      // Delay the appearance of the time text by 500ms after the card becomes visible
      setTimeout(() => {
        setShowTime(true);
      }, 500); // Adjust delay as needed
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transform transition-transform duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:scale-105 hover:translate-y-[-8px] 
        hover:border-white border-1 rounded-lg border-transparent 
        hover:shadow-lg 
        transition-all duration-500`} // Apply smooth transition to all properties
    >
      <div className="bg-[#0C1113] max-w-full rounded-lg shadow-md overflow-hidden p-5">
        <div className="flex justify-center mb-4"> {/* Center the icon */} 
          <div className="text-white text-4xl">
            {icon} {/* Render the passed icon */}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl text-white font-semibold">{title}</h2>
          <p className="text-sm text-white">{description}</p>
          
          {/* Add a delayed slide-up for the time */}
          <p
            className={`text-xs text-white mt-2 transform transition-all duration-500 ${
              showTime ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} // Slide-up animation for time
          >
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
