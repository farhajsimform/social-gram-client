import { combineReducers } from 'redux'
import tasks from './task'
import common from './common'
import post from './post'
import { TasksState } from '../actionTypes/task'
import { CommonState } from 'store/actionTypes/common'
import { PostState } from 'store/actionTypes/post'

const appReducer = combineReducers({
  tasks,
  common,
  post,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export interface RootState {
  tasks?: TasksState
  common: CommonState
  posts: PostState
}

export default rootReducer
