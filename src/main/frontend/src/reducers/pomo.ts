import { handleActions, Action } from 'redux-actions';
import { Pomo } from '../model';
import { START_POMO } from '../actions/pomoActions'; 

const initialState = {taskId: "", startTime: new Date()};

export default handleActions<Pomo>(
    {
        [START_POMO]: (state: Pomo, action: Action<Pomo>): Pomo => {
            return Object.assign({}, state, {taskId: action.payload.taskId, startTime: new Date()});
        },
    }, 
    initialState);