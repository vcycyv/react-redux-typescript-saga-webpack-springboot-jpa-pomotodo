import { takeLatest, all } from 'redux-saga/effects';
import { ADD_TASK, LIST_TASK } from '../actions/taskActions';
import { addTask, listTasks } from './task';

// main saga generators
export function* sagas() {
  yield all([
    takeLatest(ADD_TASK, addTask),
    takeLatest(LIST_TASK, listTasks)
  ]);
}