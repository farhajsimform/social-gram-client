import {
    TasksState,
    GetTasksActionTypes,
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
    GET_TASKS_FAILED,
  } from '../actionTypes/task';
  
  const initialState: TasksState = {
    tasks: [],
    isTasksLoading: false,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action: GetTasksActionTypes) {
    switch (action.type) {
      case GET_TASKS_REQUEST:
        return { ...state, isTasksLoading: true };
      case GET_TASKS_SUCCESS:
        return {
          ...state,
          isTasksLoading: false,
          tasks: action.payload.tasks,
        };
      case GET_TASKS_FAILED:
        return { ...state, isTasksLoading: false };
      default:
        return state;
    }
  }
  