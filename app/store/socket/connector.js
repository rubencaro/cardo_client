
import {dispatch} from './dispatcher'
import {serialize} from './serializer'

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

  // bind the dispatcher to incoming messages
  store.socket.onmessage = (e) => {
    dispatch(e)
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

  // bind the serializer to mutations
  store.subscribe((mutation, state) => {
    serialize(mutation, state, store)
  })
}