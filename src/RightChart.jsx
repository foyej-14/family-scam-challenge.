import { rowColour } from './palette.js'
import { rightCount } from './players.js'

function RightChart({ players }) {
  if (players.length === 0) return null

  const maxRight = Math.max(1, ...players.map((player) => rightCount(player)))

  return (
    <section className="chart" aria-label="Right answers per player">
      <h2 className="chart-title">Right answers per player</h2>
      <ul className="chart-list">
        {players.map((player, index) => {
          const right = rightCount(player)
          const height = (right / maxRight) * 100
          return (
            <li key={player.id} className="chart-item">
              <span className="chart-value">{right}</span>
              <div className="chart-column">
                <span
                  className="chart-bar"
                  style={{ height: `${height}%`, background: rowColour(index) }}
                />
              </div>
              <span className="chart-name">{player.nickname}</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default RightChart