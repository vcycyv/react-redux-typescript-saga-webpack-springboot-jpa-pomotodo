import * as React from 'react';
import { Dispatch } from 'redux';
import { Task, Pomo } from '../model';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id:string) => Dispatch<string>;
    onStartPomo: (id: string) => Dispatch<Pomo>;
}

class TaskList extends React.Component<TaskListProps> {
    render() {
        const tasks = this.props.tasks || [] as Task[];
        const { onDelete, onStartPomo } = this.props;
        return(
            <ul>
                {   
                    tasks.map(task =>
                    <TaskItem task={task} onDelete={onDelete} onStartPomo={onStartPomo} key={task.id}/>
                )}
            </ul>
        )
    }
}

export default TaskList;