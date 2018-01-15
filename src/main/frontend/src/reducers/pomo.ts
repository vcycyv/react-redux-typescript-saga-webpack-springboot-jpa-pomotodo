import { handleActions, Action } from 'redux-actions';
import { Pomo } from '../model';
import { START_POMO, STOP_POMO, FINISH_POMO } from '../actions/pomoActions'; 

const initialState: Pomo = {taskId: "", timer: false};

export default handleActions<any>(
    {
        [START_POMO]: (state: Pomo, action: Action<string>): Pomo => {
            return Object.assign({}, state, {taskId: action.payload, timer: true});
        },
        [STOP_POMO]: (state: Pomo, action: Action<string>): Pomo => {
            return Object.assign({}, state, {taskId: action.payload, timer: false});
        },
        [FINISH_POMO]: (state: Pomo, action: Action<string>): Pomo => {
            return Object.assign({}, state, {taskId: action.payload, timer: false});
        }
    }, 
    initialState);