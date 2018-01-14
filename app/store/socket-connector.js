
function getSocketURL() {
  let prot = 'ws://'
  if (document.location.protocol === 'https:') prot = 'wss://'

  let host = document.location.host
  if(host == '') host = 'localhost'

  return prot + host + '/ws'
}

function setupNewSocket(store) {
  closeSocket(store.socket)

  store.socket = new WebSocket(getSocketURL())

  store.socket.onmessage = (e) => {
    const txt = document.createTextNode(e.data)
    const div = document.createElement("div")
    div.appendChild(txt)

    const first = document.getElementById("messages").firstChild
    document.getElementById("messages").insertBefore(div, first)
  }
}

function getSocketState(socket) {
  if (socket) {
    return socket.readyState
  } else {
    return WebSocket.CLOSED
  }
}

function closeSocket(socket) {
  if (socket) {
    socket.close()
  }
}

function startSocketReconnector(store) {
  // handle reconnection on our own
  window.clearInterval(store.socketReconnector)

  let lastState = WebSocket.CONNECTING
  store.socketReconnector = window.setInterval(() => {
    let state = getSocketState(store.socket)
    if (state == WebSocket.CLOSED && lastState == WebSocket.CLOSED) {
      setupNewSocket(store)
    }
    else {
      lastState = state
    }
  }, 5000)
}

export default store => {
  // called when the store is initialized

  // try to connect rightaway, and start the reconnector process
  window.setTimeout(() => { setupNewSocket(store) }, 100)
  startSocketReconnector(store)

  store.subscribe((mutation, state) => {
    // The mutation comes in the format of { type, payload }.
    // console.log(mutation)
  })
}