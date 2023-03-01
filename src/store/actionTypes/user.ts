export interface IUser {
  _id: string
  fullname: string
  picture?: string
  email: string
  found?: boolean
  requested?: boolean
  friends?: boolean
  username?: string
}
export type SearchedUser = Array<IUser>

export interface IUserLoggedUserProfile extends Omit<IUser, 'friends'> {
  createdAt: string
  updatedAt: string
  sentRequests: Array<IUser>
  receivedRequests: Array<IUser>
  friends: Array<{
    _id: string
    bothfriends: [IUser]
  }>
}
export interface IChats {
  message: string
  createdAt: string
  sendby: IUser
  _id: string
}
export interface IUsersForChat {
  _id: string
  createdAt: string
  updatedAt: string
  bothfriends: [IUser] // Here using Tuple because will recive data on 0th intex
  chats: [{ message: string; createdAt: string }]
}
export interface UserState {
  serachedUsers: SearchedUser
  isSearchedUserLoading: boolean
  isSendingFriendRequestLoading: boolean
  userProfileData: IUserLoggedUserProfile | null
  isLoggedProfileLoading: boolean
  isAcceptOrDeclineFriendRequestLoading: boolean
  usersForChat: Array<IUsersForChat>
  isUsersForChatLoading: boolean
}

export interface GetSeachedUserRequestBody {
  limit: number
  username: string
}

export const GET_SEARCHED_USER_REQUEST = 'GET_SEARCHED_USER_REQUEST'
export const GET_SEARCHED_USER_SUCCESS = 'GET_SEARCHED_USER_SUCCESS'
export const GET_SEARCHED_USER_FAILED = 'GET_SEARCHED_USER_FAILED'

interface GetSearchedUserRequestAction {
  type: typeof GET_SEARCHED_USER_REQUEST
}

interface GetSearchedUserSuccessAction {
  type: typeof GET_SEARCHED_USER_SUCCESS
  payload: {
    users: SearchedUser
  }
}

interface GetSearchedUserFailedAction {
  type: typeof GET_SEARCHED_USER_FAILED
}

export type GetSearchedUserActionTypes =
  | GetSearchedUserRequestAction
  | GetSearchedUserSuccessAction
  | GetSearchedUserFailedAction

export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST'
export const SEND_FRIEND_REQUEST_SUCCESS = 'SEND_FRIEND_REQUEST_SUCCESS'

interface SendFriendRequest {
  type: typeof SEND_FRIEND_REQUEST
}

interface SendFriendRequestSuccess {
  type: typeof SEND_FRIEND_REQUEST_SUCCESS
  payload?: string
}

export type SendFriendRequestAction = SendFriendRequest | SendFriendRequestSuccess

export const GET_LOGGED_USER_PROFILE_REQUEST = 'GET_LOGGED_USER_PROFILE_REQUEST'
export const GET_LOGGED_USER_PROFILE_SUCCESS = 'GET_LOGGED_USER_PROFILE_SUCCESS'

interface GetLoggedUserProfileRequest {
  type: typeof GET_LOGGED_USER_PROFILE_REQUEST
}

interface GetLoggedUserProfileSuccess {
  type: typeof GET_LOGGED_USER_PROFILE_SUCCESS
  payload: {
    data: IUserLoggedUserProfile | null
  }
}

export type GetLoggedUserProfileAction = GetLoggedUserProfileRequest | GetLoggedUserProfileSuccess

export const ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST = 'ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST'
export const ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS = 'ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS'

interface AcceptOrDeclineFriendRequest {
  type: typeof ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST
}

interface AcceptOrDeclineFriendRequestSuccess {
  type: typeof ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS
  payload: {
    id: string
  }
}

export type AcceptOrDeclineFriendRequestAction =
  | AcceptOrDeclineFriendRequest
  | AcceptOrDeclineFriendRequestSuccess

export const GET_USERS_FOR_CHAT_REQUEST = 'GET_USERS_FOR_CHAT_REQUEST'
export const GET_USERS_FOR_CHAT_SUCCESS = 'GET_USERS_FOR_CHAT_SUCCESS'

interface GetUsersForChatRequest {
  type: typeof GET_USERS_FOR_CHAT_REQUEST
}

interface GetUsersForChatSuccess {
  type: typeof GET_USERS_FOR_CHAT_SUCCESS
  payload: {
    users: Array<IUsersForChat>
  }
}

export type GetUsersForChatAction = GetUsersForChatRequest | GetUsersForChatSuccess
