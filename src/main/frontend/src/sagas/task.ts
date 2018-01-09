import { Action } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import { Task } from '../model';
import ApiTasks from '../api/task';
import { LIST_TASK_SUCCESS } from '../actions/taskActions';

export function* addTask(action: Action<Task>) {
    yield call(ApiTasks.addTask, action.payload);
    yield call(listTasks);
}

export function* listTasks() {
    const tasks = yield call(ApiTasks.listTasks);
    yield put({
        type: LIST_TASK_SUCCESS,
        tasks
    })
}

export function* deleteTask(action: Action<Task>) {
    yield call(ApiTasks.deleteTask, action.payload.id);
    yield call(listTasks);
}
