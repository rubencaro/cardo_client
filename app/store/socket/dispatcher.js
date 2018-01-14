// The dispatching code of the connector

// This is called for every message coming into the socket
function dispatch(e) {
  const txt = document.createTextNode(e.data)
  const div = document.createElement("div")
  div.appendChild(txt)

  const first = document.getElementById("messages").firstChild
  document.getElementById("messages").insertBefore(div, first)
}

export { dispatch }