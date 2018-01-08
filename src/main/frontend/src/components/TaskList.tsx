import * as React from 'react';
import { Dispatch } from 'redux';
import { Task } from '../model';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id:string) => Dispatch<string>;
}

class TaskList extends React.Component<TaskListProps> {
    render() {
        const tasks = this.props.tasks || [] as Task[];
        const onDelete = this.props.onDelete;
        return(
            <ul>
                {   
                    tasks.map(task =>
                    <TaskItem task={task} onDelete={onDelete}/>
                )}
            </ul>
        )
    }
}

export default TaskList;