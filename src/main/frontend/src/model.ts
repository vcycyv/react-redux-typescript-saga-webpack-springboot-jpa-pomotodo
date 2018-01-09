export type Task = {
    id?: string;
    name: string;
}

export type Pomo = {
    taskId: string;
    startTime: Date;
}

export type IState = {
    tasks: Task[]
}

export type RootTask = Task | Task[];