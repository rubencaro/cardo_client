
import { dispatch } from './dispatcher'
import { serialize } from './serializer'
import { config } from '../../config'
import { Socket } from 'phoenix'

function setupNewSocket(store) {
  let socket = new Socket(config.socketUrl, {})
  socket.connect()
  store.channel = socket.channel("main:123", {})

  // bind the dispatcher to incoming messages
  store.channel.on("new_msg", msg => dispatch(store, msg))

  store.channel.join()
    .receive("ok", resp => { console.log("Joined successfully", resp) })
    .receive("error", resp => { console.log("Unable to join", resp) })
}

export default store => {
  // called when the store is initialized

  // try to connect rightaway, but independently
  window.setTimeout(() => { setupNewSocket(store) }, 100)

  // bind the serializer to mutations
  store.subscribe((mutation, state) => {
    serialize(mutation, state, store)
  })
}