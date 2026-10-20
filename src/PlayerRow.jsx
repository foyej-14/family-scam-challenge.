import { useEffect, useState } from 'react'
import { rowColour } from './palette.js'
import {
  answeredCount,
  isFinished,
  messagesLeft,
  rightCount,
} from './players.js'

function PlayerRow({ player, index, onPlay, onRemove }) {
  const [grown, setGrown] = useState(false)
  const answered = answeredCount(player)
  const right = rightCount(player)
  const left = messagesLeft(player)
  const finished = isFinished(player)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setGrown(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <li className={finished ? 'row row-finished' : 'row'}>
      <span
        className="mark"
        style={{ background: rowColour(index) }}
        aria-hidden="true"
      />
      <div className="row-main">
        <div className="row-top">
          <span className="row-name">{player.nickname}</span>
          <span className="row-right">{right} right</span>
        </div>
        <div className="row-bottom">
          <div className="row-bar" aria-hidden="true">
            <span
              className="row-bar-fill"
              style={{
                width: grown ? `${(answered / 10) * 100}%` : '0%',
                background: finished ? '#d7dedd' : rowColour(index),
              }}
            />
          </div>
          <span className="row-progress">{answered} of 10</span>
          <span className="row-left">
            {finished ? 'Finished' : `${left} left`}
          </span>
        </div>
      </div>
      {finished ? null : (
        <button type="button" className="row-play" onClick={onPlay}>
          Play
        </button>
      )}
      <button type="button" className="row-remove" onClick={onRemove}>
        Remove
      </button>
    </li>
  )
}

export default PlayerRow