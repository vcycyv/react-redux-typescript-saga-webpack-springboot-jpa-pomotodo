import { Action } from 'redux-actions';
import { call, put, select } from 'redux-saga/effects';
import { Task } from '../model';
import ApiTasks from '../api/task';
import { LIST_TASK_SUCCESS, ADD_TASK_SUCCESS, UPDATE_TASK_SUCESS, DELETE_TASK_SUCESS, STATUS_IN_PROGRESS, STATUS_STOPPED, STATUS_FINISHED } from '../actions/taskActions';
//import { START_POMO } from '../actions/pomoActions'
import { IState } from '../model';

export function* addTask(action: Action<Task>) {
    const task: Task = yield call(ApiTasks.addTask, action.payload);
    yield put({
        type: ADD_TASK_SUCCESS,
        task
    })
}

export function* listTasks() {
    const tasks: Task[] = yield call(ApiTasks.listTasks);
    yield put({
        type: LIST_TASK_SUCCESS,
        tasks: tasks.map((task:Task) => {if(task.startTime) task.startTime = new Date(Number(task.startTime)); return task})
    })
    // if(tasks.some((task: Task) => task.status === STATUS_IN_PROGRESS))
    //     yield put({
    //         type: START_POMO,
    //         payload: tasks.filter((task: Task) => task.status === STATUS_IN_PROGRESS)[0].id
    //     })
}

export function* startTask(action: Action<string>) {
    const state: IState = yield select();
    let task = state.tasks.find((task: Task) => task.id === action.payload);
    task.status = STATUS_IN_PROGRESS;
    const updatedTask: Task = yield call(ApiTasks.updateTask, task);
    yield put({
        type: UPDATE_TASK_SUCESS,
        task: updatedTask
    })
}

export function* stopTask(action: Action<string>) {
    const state: IState = yield select();
    let task = state.tasks.find((task: Task) => task.id === action.payload);
    task.status = STATUS_STOPPED;
    task.startTime = new Date(Number(task.startTime));
    task.cost = Math.round((new Date().getTime() - task.startTime.getTime())/1000) + task.cost;
    const updatedTask: Task = yield call(ApiTasks.updateTask, task);
    yield put({
        type: UPDATE_TASK_SUCESS,
        task: updatedTask
    })
}

export function* finishTask(action: Action<string>) {
    const state: IState = yield select();
    let task = state.tasks.find((task: Task) => task.id === action.payload);
    task.status = STATUS_FINISHED;
    task.startTime = new Date(Number(task.startTime));
    if(task.startTime.getTime() !== 0)
        task.cost = Math.round((new Date().getTime() - task.startTime.getTime())/1000) + task.cost;
    task.finishTime = new Date();
    const updatedTask: Task = yield call(ApiTasks.updateTask, task);
    yield put({
        type: UPDATE_TASK_SUCESS,
        task: updatedTask
    })
}

export function* deleteTask(action: Action<string>) {
    yield call(ApiTasks.deleteTask, action.payload);
    yield put({
        type: DELETE_TASK_SUCESS,
        taskId: action.payload
    })
}
