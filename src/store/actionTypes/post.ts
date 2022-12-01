export interface IPostedBy {
  _id: string
  fullname: string
  email: string
  picture: string
}
export interface IPosts {
  postedby: IPostedBy
  comments: any
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
}

export interface GetPostRequestBody {
  limit: number
}

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILED = 'GET_POST_FAILED'

interface GetPostRequestAction {
  type: typeof GET_POST_REQUEST
}

interface GetPostSuccessAction {
  type: typeof GET_POST_SUCCESS
  payload: {
    posts: Posts
  }
}

interface GetPostFailedAction {
  type: typeof GET_POST_FAILED
}

export type GetPostsActionTypes = GetPostRequestAction | GetPostSuccessAction | GetPostFailedAction
