import openSocket from 'socket.io-client'

const socket = openSocket(String(process.env.REACT_APP_API_URL), {
  transports: ['websocket'],
  rejectUnauthorized: false,
})
socket.on('connect', () => {
  console.log(socket.connected, 'connected') // true
})

socket.on('disconnect', () => {
  console.log(socket.connected, 'disconnected') // false
})
export { socket }
