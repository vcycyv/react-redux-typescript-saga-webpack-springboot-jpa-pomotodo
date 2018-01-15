import { createAction } from 'redux-actions';

export const START_POMO = 'START_POMO';
export const STOP_POMO = 'STOP_POMO';
export const FINISH_POMO = 'FINISH_POMO';

const startPomo = createAction<string, string>(
    START_POMO,
    (taskId: string) => (taskId)
);

const stopPomo = createAction<string, string>(
    STOP_POMO,
    (taskId: string) => (taskId)
);

const finishPomo = createAction<string, string>(
    FINISH_POMO,
    (taskId: string) => (taskId)
)

export { startPomo, stopPomo, finishPomo };