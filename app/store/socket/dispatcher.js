// The dispatching code of the connector

// This is called for every message coming into the socket
function dispatch(store, e) {
  store.dispatch("addLogLine", e.data)
}

export { dispatch }