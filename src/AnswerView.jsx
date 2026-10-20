import { useState } from 'react'
import { nextMessage } from './players.js'

function AnswerView({ player, onAnswer, onClose }) {
  const [feedback, setFeedback] = useState(null)
  const message = feedback ? feedback.message : nextMessage(player)

  if (!message) {
    return (
      <section className="answer-view" aria-label="Answer a message">
        <p className="answer-done">
          {player.nickname} has answered all ten messages.
        </p>
        <button type="button" className="answer-close" onClick={onClose}>
          Close
        </button>
      </section>
    )
  }

  function choose(answer) {
    const correct = answer === message.correct
    onAnswer(player.id, message.id, answer)
    setFeedback({ message, answer, correct })
  }

  function goNext() {
    const upcoming = nextMessage(player)
    if (!upcoming) {
      onClose()
      return
    }
    setFeedback(null)
  }

  return (
    <section className="answer-view" aria-label="Answer a message">
      <p className="answer-who">
        {player.nickname} · message {message.id} of 10
      </p>
      <p className="answer-sender">{message.sender}</p>
      <p className="answer-text">{message.text}</p>

      {feedback ? (
        <div className="answer-feedback">
          <p
            className={
              feedback.correct ? 'verdict verdict-right' : 'verdict verdict-wrong'
            }
          >
            {feedback.correct ? 'Right' : 'Wrong'}
          </p>
          <p className="answer-correct">
            The correct answer is{' '}
            <strong>{message.correct === 'scam' ? 'Scam' : 'Legit'}</strong>.
          </p>
          <ul className="answer-reasons">
            {message.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
          <button type="button" className="answer-next" onClick={goNext}>
            Next message
          </button>
        </div>
      ) : (
        <div className="answer-choices">
          <button
            type="button"
            className="answer-scam"
            onClick={() => choose('scam')}
          >
            Scam
          </button>
          <button
            type="button"
            className="answer-legit"
            onClick={() => choose('legit')}
          >
            Legit
          </button>
        </div>
      )}
    </section>
  )
}

export default AnswerView