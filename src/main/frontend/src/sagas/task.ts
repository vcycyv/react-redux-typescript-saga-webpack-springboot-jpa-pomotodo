import { Action } from 'redux-actions';
import { call, put, select } from 'redux-saga/effects';
import { Task, Pomo } from '../model';
import ApiTasks from '../api/task';
import { LIST_TASK_SUCCESS, STATUS_IN_PROGRESS } from '../actions/taskActions';
import { IState } from '../model';

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

export function* startTask(action: Action<Pomo>) {
    const state: IState = yield select();
    let task = state.tasks.find((task: Task) => task.id === action.payload.taskId);
    task.status = STATUS_IN_PROGRESS;
    yield call(ApiTasks.updateTask, task);
    yield call(listTasks);
}

export function* deleteTask(action: Action<Task>) {
    yield call(ApiTasks.deleteTask, action.payload.id);
    yield call(listTasks);
}
