import { handleActions } from 'redux-actions';
import { LIST_TASK_SUCCESS } from '../actions/taskActions'; 
//import { START_POMO } from '../actions/pomoActions';
import { Task} from '../model';

const initialState = [];

export default handleActions<Task[], any>(
    {
        [LIST_TASK_SUCCESS]: (state: Task[], action: any): Task[] => {
            return action.tasks;
        }
        // [ START_POMO ]: (state: Task[], action: Action<Pomo>): Task[] => {
        //     return state.map( task => 
        //         (task.id === action.payload.taskId)
        //             ? Object.assign({}, task, {status: STATUS_IN_PROGRESS}) : task);
        // }
        
    }, 
    initialState);