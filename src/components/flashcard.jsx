import React, { useState } from 'react';
import './flashcards.css';

function Flashcard({ id, front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <h4>{front}</h4>
        </div>
        <div className="flashcard-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;