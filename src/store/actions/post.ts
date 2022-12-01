import { APIEndpoints, HttpStatusCode } from 'constant'
import { GET } from 'services/HttpsService'
import { AppThunk } from 'store'
import {
  GetPostsActionTypes,
  GetPostRequestBody,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  Posts,
} from '../actionTypes/post'

export function getPostsRequest(): GetPostsActionTypes {
  return {
    type: GET_POST_REQUEST,
  }
}

export function getTasksSuccess(posts: Posts): GetPostsActionTypes {
  return {
    type: GET_POST_SUCCESS,
    payload: {
      posts,
    },
  }
}

export function getTasksFailed(): GetPostsActionTypes {
  return {
    type: GET_POST_FAILED,
  }
}

export const GetAllPosts =
  (request: GetPostRequestBody): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getPostsRequest())
      const response = await GET({
        subUrl: APIEndpoints.post.post,
        params: { limit: request.limit },
      })
      if (response.status === HttpStatusCode.Ok) {
        console.log(response?.data)
        dispatch(getTasksSuccess(response?.data))
      }
    } catch (error) {
      dispatch(getTasksFailed())
    }
  }
