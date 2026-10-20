import { useEffect, useState } from 'react'
import { rowColour } from './palette.js'
import {
  familyAnsweredTotal,
  familyPossibleTotal,
  familyRightTotal,
  rightCount,
} from './players.js'

function Hero({ players }) {
  const [grown, setGrown] = useState(false)
  const total = familyRightTotal(players)
  const answered = familyAnsweredTotal(players)
  const possible = familyPossibleTotal(players)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setGrown(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="hero" aria-label="Family total">
      <p className="hero-label">Right answers, all players</p>
      <p className="hero-figure">{total}</p>
      <p className="hero-line">
        {players.length} players, {answered} of {possible} answered
      </p>
      <div className="hero-bar" aria-hidden="true">
        {players.map((player, index) =>
          rightCount(player) > 0 ? (
            <span
              key={player.id}
              className="hero-slice"
              style={{
                width: grown
                  ? `${total === 0 ? 0 : (rightCount(player) / total) * 100}%`
                  : '0%',
                background: rowColour(index),
              }}
            />
          ) : null,
        )}
      </div>
      <ul className="hero-legend">
        {players.map((player, index) => (
          <li key={player.id}>
            <span
              className="mark"
              style={{ background: rowColour(index) }}
              aria-hidden="true"
            />
            {player.nickname}
            <span className="hero-legend-amount">{rightCount(player)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hero