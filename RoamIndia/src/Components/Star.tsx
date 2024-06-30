import React, { useState } from 'react';

const StarRating:React.FC = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating: number) => {
    setRating(newRating === rating ? 0 : newRating); // Toggle rating if clicked again
  };

  const handleStarHover = (newRating: number) => {
    setRating(newRating);
  };

  const getRatingLabel = () => {
    if (rating === 1) return "Terrible";
    if (rating === 2) return "Poor";
    if (rating === 3) return "Average";
    if (rating === 4) return "Very Good";
    if (rating === 5) return "Excellent";
    return "";
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          className={` text-5xl transition-colors duration-200 ${
            index < rating ? 'text-yellow-400' : 'text-gray-400'
          } hover:text-yellow-400 focus:outline-none`}
          onMouseEnter={() => handleStarHover(index + 1)}
          onMouseLeave={() => handleStarHover(rating)}
          onClick={() => handleStarClick(index + 1)}
        >
          &#9733; {/* Unicode character for star */}
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-2 text-sm">
          {getRatingLabel()}
        </span>
      )}
    </div>
  );
};

export default StarRating;
