import { useState } from 'react'
import './App.css'
import FlashCard from './components/FlashCard'

// Travel Places Flashcard Data
const cardData = [
  {
    id: 1,
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    category: "Capital Cities",
    difficulty: "easy",
    image: "🏯"
  },
  {
    id: 2,
    question: "Which country is home to Machu Picchu?",
    answer: "Peru",
    category: "Landmarks",
    difficulty: "medium",
    image: "🏔️"
  },
  {
    id: 3,
    question: "What is the largest country in the world by land area?",
    answer: "Russia",
    category: "Geography",
    difficulty: "easy",
    image: "🌍"
  },
  {
    id: 4,
    question: "Which city is known as the 'City of Love'?",
    answer: "Paris",
    category: "Cities",
    difficulty: "easy",
    image: "🗼"
  },
  {
    id: 5,
    question: "What is the longest river in the world?",
    answer: "The Nile River",
    category: "Geography",
    difficulty: "medium",
    image: "🏞️"
  },
  {
    id: 6,
    question: "Which country has the most time zones?",
    answer: "France",
    category: "Geography",
    difficulty: "hard",
    image: "🕐"
  },
  {
    id: 7,
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
    category: "Geography",
    difficulty: "medium",
    image: "⛪"
  },
  {
    id: 8,
    question: "Which African country is famous for its pyramids?",
    answer: "Egypt",
    category: "Landmarks",
    difficulty: "easy",
    image: "🔺"
  },
  {
    id: 9,
    question: "What is the capital of Australia?",
    answer: "Canberra",
    category: "Capital Cities",
    difficulty: "hard",
    image: "🦘"
  },
  {
    id: 10,
    question: "Which country is shaped like a boot?",
    answer: "Italy",
    category: "Geography",
    difficulty: "easy",
    image: "🥾"
  },
  {
    id: 11,
    question: "What is the highest mountain in the world?",
    answer: "Mount Everest",
    category: "Geography",
    difficulty: "easy",
    image: "🏔️"
  },
  {
    id: 12,
    question: "Which country is home to the Great Barrier Reef?",
    answer: "Australia",
    category: "Landmarks",
    difficulty: "medium",
    image: "🐠"
  }
]

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [userGuess, setUserGuess] = useState('')
  const [hasGuessed, setHasGuessed] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [showAnswer, setShowAnswer] = useState(false)
  const [gameMode, setGameMode] = useState('study') // 'study' or 'quiz'

  // Fuzzy matching function for answer checking
  const checkAnswer = (userAnswer, correctAnswer) => {
    const normalize = (str) => str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, '')
    const userNormalized = normalize(userAnswer)
    const correctNormalized = normalize(correctAnswer)
    
    // Exact match
    if (userNormalized === correctNormalized) return true
    
    // Check if user answer contains the correct answer or vice versa
    if (userNormalized.includes(correctNormalized) || correctNormalized.includes(userNormalized)) {
      return true
    }
    
    // Handle common variations
    const variations = {
      'the nile river': ['nile', 'nile river'],
      'mount everest': ['everest', 'mt everest'],
      'vatican city': ['vatican'],
      'france': ['france 12 time zones'],
    }
    
    for (const [key, alts] of Object.entries(variations)) {
      if (correctNormalized.includes(key) && alts.some(alt => userNormalized.includes(alt))) {
        return true
      }
    }
    
    return false
  }

  const handleGuessSubmit = () => {
    if (userGuess.trim() === '') return
    
    const correct = checkAnswer(userGuess, cardData[currentCardIndex].answer)
    setIsCorrect(correct)
    setHasGuessed(true)
    setShowAnswer(true)
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }))
  }

  const getRandomCard = () => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * cardData.length)
    } while (newIndex === currentCardIndex && cardData.length > 1)
    
    setCurrentCardIndex(newIndex)
    setIsFlipped(false)
    setUserGuess('')
    setHasGuessed(false)
    setIsCorrect(null)
    setShowAnswer(false)
  }

  const handleCardClick = () => {
    if (gameMode === 'study') {
      setIsFlipped(!isFlipped)
    }
  }

  const resetGame = () => {
    setScore({ correct: 0, total: 0 })
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setUserGuess('')
    setHasGuessed(false)
    setIsCorrect(null)
    setShowAnswer(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !hasGuessed) {
      handleGuessSubmit()
    }
  }

  const currentCard = cardData[currentCardIndex]
  const scorePercentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0

  return (
    <div className="app">
      <div className="app-header">
        <h1>🌍 Travel Trivia</h1>
        <p>Test your knowledge of world geography, landmarks, and travel destinations!</p>
        
        <div className="game-mode-toggle">
          <button 
            className={`mode-button ${gameMode === 'study' ? 'active' : ''}`}
            onClick={() => setGameMode('study')}
          >
            📚 Study Mode
          </button>
          <button 
            className={`mode-button ${gameMode === 'quiz' ? 'active' : ''}`}
            onClick={() => setGameMode('quiz')}
          >
            🎯 Quiz Mode
          </button>
        </div>

        <div className="card-info">
          <span className="card-count">Total Cards: {cardData.length}</span>
          <span className="current-card">Card {currentCardIndex + 1} of {cardData.length}</span>
          {gameMode === 'quiz' && score.total > 0 && (
            <span className="score">Score: {score.correct}/{score.total} ({scorePercentage}%)</span>
          )}
        </div>
      </div>

      <div className="flashcard-container">
        <FlashCard 
          card={currentCard}
          isFlipped={gameMode === 'study' ? isFlipped : showAnswer}
          onCardClick={handleCardClick}
          gameMode={gameMode}
          hasGuessed={hasGuessed}
          isCorrect={isCorrect}
        />
        
        {gameMode === 'quiz' && (
          <div className="quiz-section">
            <div className="guess-input-container">
              <input
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your answer..."
                className={`guess-input ${hasGuessed ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                disabled={hasGuessed}
              />
              <button 
                className="submit-button"
                onClick={handleGuessSubmit}
                disabled={hasGuessed || userGuess.trim() === ''}
              >
                {hasGuessed ? '✓' : 'Submit'}
              </button>
            </div>
            
            {hasGuessed && (
              <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                {isCorrect ? (
                  <div className="feedback-content">
                    <span className="feedback-icon">🎉</span>
                    <span>Correct! Great job!</span>
                  </div>
                ) : (
                  <div className="feedback-content">
                    <span className="feedback-icon">❌</span>
                    <span>Incorrect. The answer is: <strong>{currentCard.answer}</strong></span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
        <div className="controls">
          <button 
            className="next-button"
            onClick={getRandomCard}
          >
            🎲 Next Random Card
          </button>
          
          {gameMode === 'study' && (
            <div className="flip-hint">
              💡 Click the card to flip it!
            </div>
          )}
          
          {gameMode === 'quiz' && score.total > 0 && (
            <button 
              className="reset-button"
              onClick={resetGame}
            >
              🔄 Reset Score
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
