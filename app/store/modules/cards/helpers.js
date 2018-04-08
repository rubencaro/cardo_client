// Returns true if given card has an 'id' not present
// on given cards object.
// If given cad has no 'id', then a valid one is created.
function ensureValidNewID(card, cards) {
  if (card['id'] === undefined) {
    card['id'] = createUniqueID(cards)
  }
  return cards[card['id']] === undefined
}

var uniqueIdCounter = 0
function createUniqueID(cards) {
  const maybeUnique = "" + uniqueIdCounter
  if (cards[maybeUnique] === undefined) {
    return maybeUnique
  } else {
    uniqueIdCounter++
    return createUniqueID(cards)
  }
}

export { ensureValidNewID }