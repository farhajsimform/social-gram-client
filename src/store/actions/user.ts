import { APIEndpoints, HttpStatusCode } from 'constant'
import { GET, PATCH } from 'services/HttpsService'
import { AppThunk } from 'store'
import {
  GetSearchedUserActionTypes,
  GET_SEARCHED_USER_REQUEST,
  GET_SEARCHED_USER_FAILED,
  GET_SEARCHED_USER_SUCCESS,
  SearchedUser,
  GetSeachedUserRequestBody,
  SEND_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST_SUCCESS,
  GET_LOGGED_USER_PROFILE_REQUEST,
  GET_LOGGED_USER_PROFILE_SUCCESS,
  ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST,
  ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS,
} from '../actionTypes/user'

export function getSearchedUserRequest(): GetSearchedUserActionTypes {
  return {
    type: GET_SEARCHED_USER_REQUEST,
  }
}

export function getSearchedSuccess(users: SearchedUser): GetSearchedUserActionTypes {
  return {
    type: GET_SEARCHED_USER_SUCCESS,
    payload: {
      users,
    },
  }
}

export function getSearchedFailed(): GetSearchedUserActionTypes {
  return {
    type: GET_SEARCHED_USER_FAILED,
  }
}

export const searchUser =
  (request: GetSeachedUserRequestBody): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getSearchedUserRequest())
      const response = await GET({
        subUrl: APIEndpoints.user.searchUserProfile,
        params: { limit: request.limit, username: request.username },
      })
      if (response.status === HttpStatusCode.Ok) {
        dispatch(getSearchedSuccess(response?.data))
      }
    } catch (error) {
      dispatch(getSearchedFailed())
    }
  }
export const sendFriendRequest =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: SEND_FRIEND_REQUEST,
      })
      const response = await PATCH({
        subUrl: `${APIEndpoints.user.sendFriendRequest}/${id}`,
      })
      if (response.status === HttpStatusCode.Ok) {
        dispatch({
          type: SEND_FRIEND_REQUEST_SUCCESS,
          payload: id,
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: SEND_FRIEND_REQUEST,
      })
    }
  }

export const getLoggedInUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch({
      type: GET_LOGGED_USER_PROFILE_REQUEST,
    })
    const response = await GET({
      subUrl: APIEndpoints.user.getLoggedInUserProfile,
    })
    if (response.status === HttpStatusCode.Ok) {
      dispatch({
        type: GET_LOGGED_USER_PROFILE_SUCCESS,
        payload: {
          data: response?.data,
        },
      })
    }
  } catch (error) {
    console.log(error)
    dispatch({
      type: GET_LOGGED_USER_PROFILE_REQUEST,
    })
  }
}

export const acceptOrDeclineFriendRequest =
  (id: string, url: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST,
      })
      const response = await PATCH({
        subUrl: `${url}/${id}`,
      })
      if (response.status === HttpStatusCode.Ok) {
        dispatch({
          type: ACCEPT_OR_DECLINE_FRIEND_REQUEST_SUCCESS,
          payload: {
            id,
          },
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: ACCEPT_OR_DECLINE_FRIEND_REQUEST_REQUEST,
      })
    }
  }
