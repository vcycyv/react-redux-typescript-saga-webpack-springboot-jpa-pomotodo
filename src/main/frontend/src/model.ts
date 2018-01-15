export type Task = {
    id?: string;
    name: string;
    status: string;
    cost: number;
    startTime?: Date;
    finishTime?: Date;
}

export type Pomo = {
    taskId: string;
    timer: boolean;
}

export type IState = {
    tasks: Task[];
    pomo: Pomo;
}