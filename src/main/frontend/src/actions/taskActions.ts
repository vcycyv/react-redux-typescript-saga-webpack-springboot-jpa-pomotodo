import { createAction } from 'redux-actions';
import { Task } from '../model';

export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const LIST_TASK = 'LIST_TASK';
export const LIST_TASK_SUCCESS = 'LIST_TASK_SUCCESS';

const addTask = createAction<Task, string>(
    ADD_TASK,
    (name: string) => ({name})
);

const addTaskSucess = createAction<Task, Task>(
    ADD_TASK_SUCCESS,
    (task: Task) => (task)
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
    listTask,
    listTaskSuccess
};