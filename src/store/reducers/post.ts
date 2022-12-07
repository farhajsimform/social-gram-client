import {
  PostState,
  GetPostsActionTypes,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  GET_NEW_ADDED_POST,
  POST_LIKE_FAILURE,
  POST_LIKE_REQUEST,
  POST_LIKE_SUCCESS,
  PostLikeActionTypes,
  PostCommentActionTypes,
  POST_COMMENT_FAILURE,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  NEW_ADDED_POST_COMMENT,
} from '../actionTypes/post'

const initialState: PostState = {
  posts: [],
  isPostsLoading: false,
  isPostLikeLoading: false,
  isPostCommentLoading: false,
}

export default function (
  state = initialState,
  action: GetPostsActionTypes | PostLikeActionTypes | PostCommentActionTypes,
) {
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
    case POST_LIKE_REQUEST:
      return { ...state, isPostLikeLoading: true }
    case POST_LIKE_FAILURE:
      return { ...state, isPostLikeLoading: false }
    case POST_LIKE_SUCCESS: {
      const oldState = [...(state.posts || [])]
      const postIndex = oldState.findIndex((el) => el._id === action.payload.id)
      oldState[postIndex].likesCount = (oldState[postIndex].likesCount || 0) + action.payload.count
      return { ...state, posts: oldState, isPostLikeLoading: false }
    }
    case POST_COMMENT_REQUEST || POST_COMMENT_FAILURE || POST_COMMENT_SUCCESS:
      return { ...state, isPostCommentLoading: !state.isPostCommentLoading }
    case NEW_ADDED_POST_COMMENT: {
      const oldState = [...(state.posts || [])]
      const postIndex = oldState.findIndex((el) => el._id === action?.payload?.postid)
      oldState[postIndex]?.comments?.unshift(action.payload?.data)
      return { ...state, posts: oldState }
    }
    default:
      return state
  }
}
