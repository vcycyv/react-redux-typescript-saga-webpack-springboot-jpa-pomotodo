import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import { ADD_TASK, LIST_TASK, DELETE_TASK } from '../actions/taskActions';
import { START_POMO, STOP_POMO } from '../actions/pomoActions'
//import { START_POMO } from '../actions/pomoActions';
import { addTask, listTasks, deleteTask, startTask, stopTask } from './task';

// main saga generators
export function* sagas() {
  yield all([
    takeEvery(ADD_TASK, addTask),
    takeLatest(LIST_TASK, listTasks),
    takeEvery(DELETE_TASK, deleteTask),
    takeEvery(START_POMO, startTask),
    takeLatest(STOP_POMO, stopTask)
  ]);
}