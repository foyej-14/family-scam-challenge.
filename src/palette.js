export const ROW_COLOURS = [
  '#0f766e',
  '#b45309',
  '#1d4ed8',
  '#7e22ce',
  '#9f1239',
]

export function rowColour(index) {
  return ROW_COLOURS[index % ROW_COLOURS.length]
}