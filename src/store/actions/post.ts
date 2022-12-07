import { APIEndpoints, HttpStatusCode } from 'constant'
import { GET, PUT } from 'services/HttpsService'
import { AppThunk } from 'store'
import {
  GetPostsActionTypes,
  GetPostRequestBody,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  Posts,
  IPosts,
  GET_NEW_ADDED_POST,
  POST_LIKE_FAILURE,
  POST_LIKE_SUCCESS,
  POST_LIKE_REQUEST,
  IPostLikeRequestBody,
  IPostCommentRequestBody,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
  IComments,
  PostCommentActionTypes,
  NEW_ADDED_POST_COMMENT,
} from '../actionTypes/post'

export function getPostsRequest(): GetPostsActionTypes {
  return {
    type: GET_POST_REQUEST,
  }
}

export function getPostSuccess(posts: Posts): GetPostsActionTypes {
  return {
    type: GET_POST_SUCCESS,
    payload: {
      posts,
    },
  }
}

export function getPostFailed(): GetPostsActionTypes {
  return {
    type: GET_POST_FAILED,
  }
}

export function AddNewAddedPost(post: IPosts): GetPostsActionTypes {
  return {
    type: GET_NEW_ADDED_POST,
    payload: {
      post,
    },
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
        dispatch(getPostSuccess(response?.data))
      }
    } catch (error) {
      dispatch(getPostFailed())
    }
  }

export const HandleLike =
  (request: IPostLikeRequestBody): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: POST_LIKE_REQUEST,
      })
      const response = await PUT({
        subUrl: `${APIEndpoints.post.reaction}/${request.id}`,
        data: {
          reactionType: request.reactionType,
          reactionCountType: request.reactionCountType,
        },
      })
      if (response.status === HttpStatusCode.Ok) {
        dispatch({
          type: POST_LIKE_SUCCESS,
          payload: {
            id: request.id,
            count: Number(response.data?.count),
          },
        })
      }
    } catch (error) {
      dispatch({
        type: POST_LIKE_FAILURE,
      })
    }
  }

export const HandleComment =
  (request: IPostCommentRequestBody): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({
        type: POST_COMMENT_REQUEST,
      })
      const response = await PUT({
        subUrl: `${APIEndpoints.post.addComment}/${request.postid}`,
        data: {
          comment: request.comment,
        },
      })
      if (response.status === HttpStatusCode.Created) {
        dispatch({
          type: POST_COMMENT_SUCCESS,
        })
      }
    } catch (error) {
      dispatch({
        type: POST_COMMENT_FAILURE,
      })
    }
  }

export const HandleNewComment = (comments: IComments, postid: string): PostCommentActionTypes => {
  return {
    type: NEW_ADDED_POST_COMMENT,
    payload: {
      data: comments,
      postid,
    },
  }
}
