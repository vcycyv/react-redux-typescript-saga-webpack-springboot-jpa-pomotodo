import { createAction } from 'redux-actions';
import { Task } from '../model';

export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const UPDATE_TASK_SUCESS = 'UPDATE_TASK_SUCESS';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCESS = 'DELETE_TASK_SUCESS';
export const LIST_TASK = 'LIST_TASK';
export const LIST_TASK_SUCCESS = 'LIST_TASK_SUCCESS';

export const STATUS_STOPPED = 'STOPPED';
export const STATUS_IN_PROGRESS = 'IN_PROGRESS';
export const STATUS_FINISHED = 'FINISHED';


const addTask = createAction<Task, string>(
    ADD_TASK,
    (name: string) => ({name, status: STATUS_STOPPED, cost: 0})
);

const addTaskSucess = createAction<Task, Task>(
    ADD_TASK_SUCCESS,
    (task: Task) => (task)
);

const deleteTask = createAction<string, string>(
    DELETE_TASK,
    (id: string) => (id)
);

const listTask = createAction<void>(
    LIST_TASK,
    () => { }
);

const listTaskSuccess = createAction<void>(
    LIST_TASK_SUCCESS,
    () => { }
);

export {
    addTask,
    addTaskSucess,
    deleteTask,
    listTask,
    listTaskSuccess
};