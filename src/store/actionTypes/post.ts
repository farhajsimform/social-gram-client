export interface IPostedBy {
  _id: string
  fullname: string
  email: string
  picture: string
}

export interface IComments {
  comment: string
  commentby: IPostedBy
  _id: string
  createdAt: string
}
export interface IPosts {
  postedby: IPostedBy
  comments: Array<IComments>
  likesCount: number
  coolCount: number
  funnyCount: number
  wowCount: number
  angryCount: number
  tags: any
  content: string
  images: Array<string>
  _id: string
  email: string
  createdAt: string
}
export type Posts = Array<IPosts>

export interface PostState {
  posts?: Posts
  isPostsLoading?: boolean
  isPostLikeLoading: boolean
  isPostCommentLoading: boolean
}

export interface GetPostRequestBody {
  limit: number
}

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILED = 'GET_POST_FAILED'
export const GET_NEW_ADDED_POST = 'GET_NEW_ADDED_POST'

interface GetPostRequestAction {
  type: typeof GET_POST_REQUEST
}

interface GetPostSuccessAction {
  type: typeof GET_POST_SUCCESS
  payload: {
    posts: Posts
  }
}

interface GetNewAddedPost {
  type: typeof GET_NEW_ADDED_POST
  payload: {
    post: IPosts
  }
}

interface GetPostFailedAction {
  type: typeof GET_POST_FAILED
}

export type GetPostsActionTypes =
  | GetPostRequestAction
  | GetPostSuccessAction
  | GetPostFailedAction
  | GetNewAddedPost

export const POST_LIKE_REQUEST = 'POST_LIKE_REQUEST'
export const POST_LIKE_SUCCESS = 'POST_LIKE_SUCCESS'
export const POST_LIKE_FAILURE = 'POST_LIKE_FAILURE'

interface PostLikeRequest {
  type: typeof POST_LIKE_REQUEST
}
interface PostLikeFailure {
  type: typeof POST_LIKE_FAILURE
}
interface PostLikeSuccess {
  type: typeof POST_LIKE_SUCCESS
  payload: {
    id: string
    count: number
  }
}

export interface IPostLikeRequestBody {
  id: string
  reactionType: string
  reactionCountType: string
}
export type PostLikeActionTypes = PostLikeRequest | PostLikeSuccess | PostLikeFailure

export const POST_COMMENT_REQUEST = 'POST_COMMENT_REQUEST'
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS'
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE'
export const NEW_ADDED_POST_COMMENT = 'NEW_ADDED_POST_COMMENT'

interface PostCommentRequest {
  type: typeof POST_COMMENT_REQUEST
}
interface PostCommentFailure {
  type: typeof POST_COMMENT_FAILURE
}
interface PostCommentSuccess {
  type: typeof POST_COMMENT_SUCCESS
}

interface NewAddedPostAction {
  type: typeof NEW_ADDED_POST_COMMENT
  payload: {
    data: IComments
    postid: string
  }
}

export interface IPostCommentRequestBody {
  postid: string
  comment: string
}
export type PostCommentActionTypes =
  | PostCommentRequest
  | PostCommentFailure
  | PostCommentSuccess
  | NewAddedPostAction
