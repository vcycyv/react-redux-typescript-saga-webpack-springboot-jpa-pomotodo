import * as React from 'react';
import { Dispatch } from 'redux';
import { Task, Pomo } from '../model';
import { STATUS_IN_PROGRESS } from '../actions/taskActions'
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id:string) => Dispatch<string>;
    onStartPomo: (id: string) => Dispatch<Pomo>;
    onStopPomo: (id: string) => Dispatch<Pomo>;
    onFinishPomo: (id: string) => Dispatch<Pomo>;
}

class TaskList extends React.Component<TaskListProps> {
    render() {
        const tasks = this.props.tasks || [] as Task[];
        const { onDelete, onStartPomo, onStopPomo, onFinishPomo } = this.props;
        let disableStartAction = tasks.some((task: Task): boolean => {return task.status === STATUS_IN_PROGRESS});

        return(
            <div>
                {   
                    tasks.map(task =>
                    <TaskItem task={task} onDelete={onDelete} onStartPomo={onStartPomo} onStopPomo={onStopPomo} 
                        onFinishPomo={onFinishPomo} key={task.id} disableStartAction={disableStartAction}/>
                )}
            </div>
        )
    }
}

export default TaskList;