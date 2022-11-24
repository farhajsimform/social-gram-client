import {
    GetTasksActionTypes,
    GET_TASKS_FAILED,
    GET_TASKS_REQUEST,
    GET_TASKS_SUCCESS,
    Tasks,
  } from '../actionTypes/task';
  
  export function getTasksRequest(): GetTasksActionTypes {
    return {
      type: GET_TASKS_REQUEST,
    };
  }
  
  export function getTasksSuccess(tasks: Tasks): GetTasksActionTypes {
    return {
      type: GET_TASKS_SUCCESS,
      payload: {
        tasks,
      },
    };
  }
  
  export function getTasksFailed(): GetTasksActionTypes {
    return {
      type: GET_TASKS_FAILED,
    };
  }
  