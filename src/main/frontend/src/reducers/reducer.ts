import { combineReducers } from 'redux';

import tasks from './tasks';
import pomo from './pomo'

const rootReducer = combineReducers({
    tasks,
    pomo
});

export default rootReducer;