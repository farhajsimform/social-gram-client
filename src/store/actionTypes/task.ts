export interface Task {
    id: number;
    title: string;
    description?: string;
    is_active: boolean;
    created_at: string;
  }
  export type Tasks = Array<Task>;
  
  export interface TasksState {
    tasks?: Tasks;
    isTasksLoading?: boolean;
  }
  
  export interface GetTasksRequestBody {
    page: number;
    pageSize: number;
  }
  
  export const GET_TASKS_REQUEST = 'GET_TASKS_REQUEST';
  export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
  export const GET_TASKS_FAILED = 'GET_TASKS_FAILED';
  
  interface GetTasksRequestAction {
    type: typeof GET_TASKS_REQUEST;
  }
  
  interface GetTasksSuccessAction {
    type: typeof GET_TASKS_SUCCESS;
    payload: {
      tasks: Tasks;
    };
  }
  
  interface GetTasksFailedAction {
    type: typeof GET_TASKS_FAILED;
  }
  
  export type GetTasksActionTypes = GetTasksRequestAction | GetTasksSuccessAction | GetTasksFailedAction;
  