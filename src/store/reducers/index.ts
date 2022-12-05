import { combineReducers } from 'redux'
import tasks from './task'
import common from './common'
import post from './post'
import user from './user'
import { TasksState } from '../actionTypes/task'
import { CommonState } from 'store/actionTypes/common'
import { PostState } from 'store/actionTypes/post'
import { UserState } from 'store/actionTypes/user'

const appReducer = combineReducers({
  tasks,
  common,
  post,
  user,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export interface RootState {
  tasks?: TasksState
  common: CommonState
  posts: PostState
  user: UserState
}

export default rootReducer
