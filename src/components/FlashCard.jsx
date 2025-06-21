import './FlashCard.css'

const FlashCard = ({ card, isFlipped, onCardClick, gameMode, hasGuessed, isCorrect }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'difficulty-easy'
      case 'medium':
        return 'difficulty-medium'
      case 'hard':
        return 'difficulty-hard'
      default:
        return 'difficulty-easy'
    }
  }

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Capital Cities':
        return 'category-capitals'
      case 'Landmarks':
        return 'category-landmarks'
      case 'Geography':
        return 'category-geography'
      case 'Cities':
        return 'category-cities'
      default:
        return 'category-default'
    }
  }

  const getGameModeClass = () => {
    if (gameMode === 'quiz' && hasGuessed) {
      return isCorrect ? 'quiz-correct' : 'quiz-incorrect'
    }
    return ''
  }

  return (
    <div 
      className={`flashcard ${getDifficultyClass(card.difficulty)} ${getCategoryClass(card.category)} ${isFlipped ? 'flipped' : ''} ${getGameModeClass()}`}
      onClick={onCardClick}
      style={{ cursor: gameMode === 'study' ? 'pointer' : 'default' }}
    >
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <div className="card-image">
            {card.image}
          </div>
          <div className="card-content">
            <h2>{card.question}</h2>
          </div>
          <div className="card-labels">
            <span className={`difficulty-label ${getDifficultyClass(card.difficulty)}`}>
              {card.difficulty.toUpperCase()}
            </span>
            <span className="category-label">
              {card.category}
            </span>
          </div>
          {gameMode === 'quiz' && hasGuessed && (
            <div className="result-overlay">
              <div className="result-icon">
                {isCorrect ? '✅' : '❌'}
              </div>
            </div>
          )}
        </div>
        
        <div className="flashcard-back">
          <div className="card-image">
            {card.image}
          </div>
          <div className="card-content">
            <h2>{card.answer}</h2>
          </div>
          <div className="card-labels">
            <span className={`difficulty-label ${getDifficultyClass(card.difficulty)}`}>
              {card.difficulty.toUpperCase()}
            </span>
            <span className="category-label">
              {card.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCard 