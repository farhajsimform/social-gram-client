import {
  UserState,
  GetSearchedUserActionTypes,
  GET_SEARCHED_USER_REQUEST,
  GET_SEARCHED_USER_SUCCESS,
  GET_SEARCHED_USER_FAILED,
  SEND_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST_SUCCESS,
  SendFriendRequestAction,
  GET_LOGGED_USER_PROFILE_REQUEST,
  GET_LOGGED_USER_PROFILE_SUCCESS,
  GetLoggedUserProfileAction,
  AcceptOrDeclineFriendRequestAction,
  ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST,
  ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS,
  IUserLoggedUserProfile,
  GET_USERS_FOR_CHAT_REQUEST,
  GET_USERS_FOR_CHAT_SUCCESS,
  GetUsersForChatAction,
} from '../actionTypes/user'

const initialState: UserState = {
  serachedUsers: [],
  isSearchedUserLoading: false,
  isSendingFriendRequestLoading: false,
  userProfileData: null,
  isLoggedProfileLoading: false,
  isAcceptOrDeclineFriendRequestLoading: false,
  usersForChat: [],
  isUsersForChatLoading: false,
}

export default function (
  state = initialState,
  action:
    | GetSearchedUserActionTypes
    | SendFriendRequestAction
    | GetLoggedUserProfileAction
    | AcceptOrDeclineFriendRequestAction
    | GetUsersForChatAction,
) {
  switch (action.type) {
    case GET_SEARCHED_USER_REQUEST:
      return { ...state, isSearchedUserLoading: true }
    case GET_SEARCHED_USER_SUCCESS:
      return {
        ...state,
        isSearchedUserLoading: false,
        serachedUsers: action.payload.users,
      }
    case GET_SEARCHED_USER_FAILED:
      return { ...state, isSearchedUserLoading: false }
    case SEND_FRIEND_REQUEST:
      return { ...state, isSendingFriendRequestLoading: !state.isSendingFriendRequestLoading }
    case SEND_FRIEND_REQUEST_SUCCESS: {
      const oldState = [...(state.serachedUsers || [])]
      const userIndex = oldState.findIndex((el) => el._id === action.payload)
      oldState[userIndex].found = true
      oldState[userIndex].requested = true
      return {
        ...state,
        isSendingFriendRequestLoading: !state.isSendingFriendRequestLoading,
        serachedUsers: oldState,
      }
    }
    case GET_LOGGED_USER_PROFILE_REQUEST:
      return { ...state, isLoggedProfileLoading: !state.isLoggedProfileLoading }
    case GET_LOGGED_USER_PROFILE_SUCCESS: {
      return {
        ...state,
        isLoggedProfileLoading: !state.isLoggedProfileLoading,
        userProfileData: action.payload?.data,
      }
    }
    case ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST:
      return {
        ...state,
        isAcceptOrDeclineFriendRequestLoading: !state.isAcceptOrDeclineFriendRequestLoading,
      }
    case ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS: {
      const oldState = [...(state.userProfileData?.receivedRequests || [])]
      const userIndex = oldState.findIndex((el) => el._id === action.payload.id)
      oldState.splice(userIndex, 1)

      return {
        ...state,
        isAcceptOrDeclineFriendRequestLoading: !state.isAcceptOrDeclineFriendRequestLoading,
        userProfileData: {
          ...state.userProfileData,
          receivedRequests: oldState,
        } as IUserLoggedUserProfile,
      }
    }
    case GET_USERS_FOR_CHAT_REQUEST:
      return {
        ...state,
        isUsersForChatLoading: !state.isUsersForChatLoading,
      }
    case GET_USERS_FOR_CHAT_SUCCESS:
      return {
        ...state,
        isUsersForChatLoading: !state.isUsersForChatLoading,
        usersForChat: action.payload.users,
      }
    default:
      return state
  }
}
