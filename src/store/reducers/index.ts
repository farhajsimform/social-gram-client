import { combineReducers } from 'redux'
import tasks from './task'
import common from './common'
import { TasksState } from '../actionTypes/task'
import { CommonState } from 'store/actionTypes/common'

const appReducer = combineReducers({
  tasks,
  common,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export interface RootState {
  tasks?: TasksState
  common: CommonState
}

export default rootReducer
