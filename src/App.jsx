import './App.css';
import cards from './components/cardData';
import { useState } from 'react';
import Flashcard from './components/flashcard';

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Add isFlipped state

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="App">
      <h1>French Cuisine Quiz</h1>
      <h2>How good is your French? Test your vocabulary on food here!</h2>
      <h3>Number of cards: 10</h3>
      <br></br>
      <Flashcard 
        {...cards[currentCardIndex]} 
        isFlipped={isFlipped} 
        setIsFlipped={setIsFlipped} 
      />
      <button onClick={handlePreviousCard} disabled={currentCardIndex === 0}>Back</button>
      <button onClick={handleNextCard}>Next</button>
    </div>
  )
}

export default App;
