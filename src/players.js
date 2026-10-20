import { MESSAGES, MESSAGE_COUNT } from './messages.js'

const CORRECT_BY_ID = Object.fromEntries(
  MESSAGES.map((message) => [message.id, message.correct]),
)

export const SEED_PLAYERS = [
  {
    id: 'seed-mak-cik-ros',
    nickname: 'Mak Cik Ros',
    answers: {
      1: 'scam',
      2: 'legit',
      3: 'legit',
      4: 'legit',
      5: 'legit',
      6: 'scam',
      7: 'legit',
      8: 'legit',
      9: 'legit',
      10: 'legit',
    },
    createdAt: 1,
  },
  {
    id: 'seed-adik',
    nickname: 'Adik',
    answers: { 1: 'scam', 2: 'scam', 3: 'scam', 4: 'scam', 5: 'scam', 6: 'scam' },
    createdAt: 2,
  },
  {
    id: 'seed-pak-long',
    nickname: 'Pak Long',
    answers: { 1: 'legit', 2: 'legit', 3: 'scam' },
    createdAt: 3,
  },
]

export function answeredCount(player) {
  return Object.keys(player.answers).length
}

export function rightCount(player) {
  return Object.entries(player.answers).filter(
    ([id, answer]) => CORRECT_BY_ID[id] === answer,
  ).length
}

export function messagesLeft(player) {
  return MESSAGE_COUNT - answeredCount(player)
}

export function isFinished(player) {
  return answeredCount(player) >= MESSAGE_COUNT
}

export function nextMessage(player) {
  for (let id = 1; id <= MESSAGE_COUNT; id += 1) {
    if (!(id in player.answers)) {
      return MESSAGES.find((message) => message.id === id)
    }
  }
  return null
}

export function familyRightTotal(players) {
  return players.reduce((total, player) => total + rightCount(player), 0)
}

export function familyAnsweredTotal(players) {
  return players.reduce((total, player) => total + answeredCount(player), 0)
}

export function familyPossibleTotal(players) {
  return players.length * MESSAGE_COUNT
}

export const STORAGE_KEY = 'family-scam-challenge.players.v1'

export function isValidPlayer(player) {
  return (
    player &&
    typeof player.id === 'string' &&
    typeof player.nickname === 'string' &&
    player.answers &&
    typeof player.answers === 'object' &&
    !Array.isArray(player.answers)
  )
}

export function loadPlayers() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return SEED_PLAYERS
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return SEED_PLAYERS
    return parsed.filter(isValidPlayer)
  } catch {
    return SEED_PLAYERS
  }
}

export function savePlayers(players) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(players))
  } catch {
    // Storage can be full or blocked; the app still works in memory.
  }
}