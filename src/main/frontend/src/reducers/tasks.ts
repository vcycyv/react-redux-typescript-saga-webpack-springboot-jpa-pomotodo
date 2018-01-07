import { handleActions } from 'redux-actions';
import { LIST_TASK_SUCCESS } from '../actions/taskActions'; 
import { Task } from '../model';

const initialState = [];

export default handleActions<Task[]>(
    {
        [LIST_TASK_SUCCESS]: (state: Task[], action: any): Task[] => {
            return action.tasks;
        },
        
    }, 
    initialState);