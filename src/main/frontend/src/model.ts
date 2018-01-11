export type Task = {
    id?: string;
    name: string;
    status: string;
}

export type Pomo = {
    taskId: string;
    time: Date;
}

export type IState = {
    tasks: Task[];
    pomo: Pomo;
}