import {
  PostState,
  GetPostsActionTypes,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
} from '../actionTypes/post'

const initialState: PostState = {
  posts: [],
  isPostsLoading: false,
}

export default function (state = initialState, action: GetPostsActionTypes) {
  switch (action.type) {
    case GET_POST_REQUEST:
      return { ...state, isPostsLoading: true }
    case GET_POST_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        posts: action.payload.posts,
      }
    case GET_POST_FAILED:
      return { ...state, isPostsLoading: false }
    default:
      return state
  }
}
