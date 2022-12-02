import {
  PostState,
  GetPostsActionTypes,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  GET_NEW_ADDED_POST,
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
    case GET_NEW_ADDED_POST:
      return { ...state, posts: [action.payload.post].concat([...(state.posts || [])]) }
    default:
      return state
  }
}
