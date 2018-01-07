export type Task = {
    id?: string;
    name: string;
}

export type IState = {
    tasks: Task[]
}

export type RootTask = Task | Task[];