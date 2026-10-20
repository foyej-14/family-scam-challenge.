import { useEffect, useState } from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import PlayerRow from './PlayerRow.jsx'
import AnswerView from './AnswerView.jsx'
import RightChart from './RightChart.jsx'
import { loadPlayers, savePlayers } from './players.js'
import './App.css'

let nextId = 1

function createPlayer(nickname) {
  return {
    id: `player-${Date.now()}-${nextId++}`,
    nickname: nickname.trim(),
    answers: {},
    createdAt: Date.now(),
  }
}

function App() {
  const [players, setPlayers] = useState(loadPlayers)
  const [nickname, setNickname] = useState('')
  const [playingId, setPlayingId] = useState(null)

  const playing = players.find((player) => player.id === playingId) || null

  useEffect(() => {
    savePlayers(players)
  }, [players])

  function addPlayer(event) {
    event.preventDefault()
    const name = nickname.trim()
    if (!name) return
    setPlayers((current) => [...current, createPlayer(name)])
    setNickname('')
  }

  function answerMessage(playerId, messageId, answer) {
    setPlayers((current) =>
      current.map((player) =>
        player.id === playerId
          ? {
              ...player,
              answers: { ...player.answers, [messageId]: answer },
            }
          : player,
      ),
    )
  }

  function removePlayer(playerId) {
    setPlayers((current) => current.filter((player) => player.id !== playerId))
    setPlayingId((current) => (current === playerId ? null : current))
  }

  return (
    <div className="page">
      <Header />

      <div className="layout">
        <Hero players={players} />

        <section className="players" aria-label="Players">
          <form className="add-form" onSubmit={addPlayer}>
            <label className="add-label" htmlFor="nickname">
              Add a player
            </label>
            <div className="add-controls">
              <input
                id="nickname"
                type="text"
                className="add-input"
                placeholder="Nickname"
                value={nickname}
                onChange={(event) => setNickname(event.target.value)}
              />
              <button type="submit" className="add-button">
                Add player
              </button>
            </div>
          </form>

          {playing ? (
            <AnswerView
              player={playing}
              onAnswer={answerMessage}
              onClose={() => setPlayingId(null)}
            />
          ) : null}

          {players.length === 0 ? (
            <p className="empty-state">
              No players yet. Add someone to start the challenge.
            </p>
          ) : (
            <ul className="player-list">
              {players.map((player, index) => (
                <PlayerRow
                  key={player.id}
                  player={player}
                  index={index}
                  onPlay={() => setPlayingId(player.id)}
                  onRemove={() => removePlayer(player.id)}
                />
              ))}
            </ul>
          )}
        </section>
      </div>

      <RightChart players={players} />

      <footer className="site-footer">
        <p>
          Lost money to a scam? Call the National Scam Response Centre at 997.
        </p>
      </footer>
    </div>
  )
}

export default App