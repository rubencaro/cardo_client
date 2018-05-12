// The serialization code of the connector

// This is called on every mutation on the store
function serialize(mutation, state, store) {
  // The mutation comes in the format of { type, payload }.
  switch (mutation.type) {
    case 'addLogLine':
      store.channel.push('log', { body: mutation.payload })
      break
    case 'cards_addCard':
      store.channel.push('cards_addCard', { body: mutation.payload })
      break
    default:
      console.log(mutation)
  }
}

export { serialize }