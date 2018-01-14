// main configuration file

let config = {
  socketUrl: 'ws://localhost:8888/ws'
}

if (process.env.production) {
  config.socketUrl = "ws://cardoserver/ws"
}

export { config }
