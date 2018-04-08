// The serialization code of the connector

// This is called on every mutation on the store
function serialize(mutation, state, store) {
  // The mutation comes in the format of { type, payload }.
  switch (mutation.type) {
    case 'addLogLine':
      store.socket.send('log: ' + mutation.payload)
      break
    case 'cards_addCard':
      store.socket.send('cards_addCard: ' + mutation.payload)
      break
    default:
      console.log(mutation)
  }
}

export { serialize }