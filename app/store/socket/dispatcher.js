// The dispatching code of the connector
const routes = buildRoutes()

// This is called for every message coming into the socket
function dispatch(store, e) {
  let [prefix, payload] = splitMsg(e.data)

  let action = routes.get(prefix)
  if (action === undefined) {
    console.log("Unrecognized msg: " + e.data)
    return
  }
  store.dispatch(action, payload)
}

function buildRoutes() {
  let kvs = [
    // here add [route, action] pairs
    ['log', 'addLogLine'],
    ['cards_upsertCard', 'cards_upsertCard'],
  ];
  return new Map(kvs)
}

function splitMsg(msg) {
  return msg.split(": ", 2)
}

export { dispatch }