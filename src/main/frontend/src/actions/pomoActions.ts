import { createAction } from 'redux-actions';
import { Pomo } from '../model';

export const START_POMO = 'START_POMO';

const startPomo = createAction<Pomo, String>(
    START_POMO,
    (taskId: string) => ({taskId, startTime: new Date()})
);

export { startPomo };