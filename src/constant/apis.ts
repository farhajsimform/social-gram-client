export const APIEndpoints = {
  authentication: {
    login: '/auth/login',
    register: '/auth/register',
  },
  post: {
    post: '/user-post/post',
    reaction: '/user-post/reaction',
    addComment: '/user-post/add-comment'
  },
  user: {
    searchUserProfile: '/user/search-profiles',
    sendFriendRequest: '/user/send-friend-request',
    getLoggedInUserProfile: '/user/user-profile',
    acceptFriendRequest: '/user/accept-friend-request',
    declineFriendRequest:'/user/decline-friend-request',
    getUsersForChat: '/user/users-for-chat',
    getRoomChatData: '/user/room-chat-data'
  },
}
