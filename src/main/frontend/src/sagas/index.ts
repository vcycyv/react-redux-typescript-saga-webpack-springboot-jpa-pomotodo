import { takeLatest, all, takeEvery } from 'redux-saga/effects';
import { ADD_TASK, LIST_TASK, DELETE_TASK } from '../actions/taskActions';
import { addTask, listTasks, deleteTask } from './task';

// main saga generators
export function* sagas() {
  yield all([
    takeEvery(ADD_TASK, addTask),
    takeLatest(LIST_TASK, listTasks),
    takeEvery(DELETE_TASK, deleteTask)
  ]);
}