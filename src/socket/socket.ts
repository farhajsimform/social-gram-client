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

const GetNewPosts = (cb: (data: any) => void) => {
  socket.on('GetNewPosts', (data) => {
    cb(data)
  })
}

const GetNewMessagesForRoom = (cb: (data: any) => void) => {
  socket.on('reciveMessage', (data) => {
    cb(data)
  })
}

const GetNewAddedCommentForPost = (cb: (data: any) => void) => {
  socket.on('GetNewComments', (data) => {
    cb(data)
  })
}
export { socket, GetNewPosts, GetNewMessagesForRoom, GetNewAddedCommentForPost }
