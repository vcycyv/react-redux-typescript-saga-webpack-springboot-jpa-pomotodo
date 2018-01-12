import { handleActions, Action } from 'redux-actions';
import { LIST_TASK_SUCCESS } from '../actions/taskActions'; 
import { START_POMO } from '../actions/pomoActions';
import { Task, Pomo} from '../model';

const initialState = [];

export default handleActions<Task[], any>(
    {
        [LIST_TASK_SUCCESS]: (state: Task[], action: any): Task[] => {
            let tasks = action.tasks as Task[];
            tasks.forEach(task => 
                { 
                    let existingTask = state.find( (item: Task) => item.id === task.id );
                    if(existingTask && existingTask.startTime) {
                        task.startTime = existingTask.startTime;
                    }
                })
            return tasks;
        },
        [ START_POMO ]: (state: Task[], action: Action<Pomo>): Task[] => {
             return state.map( task => 
                 (task.id === action.payload.taskId)
                    ? Object.assign({}, task, {startTime: new Date()}) : task);
        }
        
    }, 
    initialState);