import { combineReducers } from 'redux'
import tasks from './task'
import { TasksState } from '../actionTypes/task'

const appReducer = combineReducers({
  tasks,
})

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action)
}

export interface RootState {
  tasks?: TasksState
}

export default rootReducer
