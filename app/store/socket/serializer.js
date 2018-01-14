// The serialization code of the connector

// This is called on every mutation on the store
function serialize(mutation, state, store) {
  // The mutation comes in the format of { type, payload }.
  console.log(mutation)
}

export { serialize }