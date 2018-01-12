import { createAction } from 'redux-actions';
import { Pomo } from '../model';

export const START_POMO = 'START_POMO';
export const STOP_POMO = 'STOP_POMO';

const startPomo = createAction<Pomo, string>(
    START_POMO,
    (taskId: string) => ({taskId, timer: true})
);

const stopPomo = createAction<string, string>(
    STOP_POMO,
    (taskId: string) => (taskId)
);

export { startPomo, stopPomo };