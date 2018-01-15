import { handleActions, Action } from 'redux-actions';
import { LIST_TASK_SUCCESS, STATUS_IN_PROGRESS, ADD_TASK_SUCCESS, UPDATE_TASK_SUCESS, DELETE_TASK_SUCESS } from '../actions/taskActions'; 
import { START_POMO } from '../actions/pomoActions';
import { Task } from '../model';

const initialState = [];

export default handleActions<Task[], any>(
    {
        [LIST_TASK_SUCCESS]: (state: Task[], action: any): Task[] => {
            let tasks = action.tasks as Task[];
            tasks.forEach(task => 
                { 
                    let existingTask = state.find( (item: Task) => item.id === task.id );
                    if(existingTask && task.status === STATUS_IN_PROGRESS) {
                        task.startTime = existingTask.startTime ? existingTask.startTime : new Date();
                    }
                })
            return tasks;
        },

        [ADD_TASK_SUCCESS]: (state: Task[], action: any): Task[] => {
            return [...state, action.task as Task];
        },

        [UPDATE_TASK_SUCESS]: (state: Task[], action: any): Task[] => {
            const updatedTask: Task = action.task;
            return state.map((task: Task) => (task.id === updatedTask.id)? updatedTask : task); 
        },

        [DELETE_TASK_SUCESS]: (state: Task[], action: any): Task[] => {
            const newState = Object.assign([], state);
            const indexOfCatToDelete = state.findIndex((task: Task) => {
                return task.id == action.taskId
            })
            newState.splice(indexOfCatToDelete, 1);
            return newState; 
        },

        [ START_POMO ]: (state: Task[], action: Action<string>): Task[] => {
             return state.map( task => 
                 (task.id === action.payload)
                    ? Object.assign({}, task, {startTime: new Date()}) : task);
        }
        
    }, 
    initialState);