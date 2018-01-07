import * as React from 'react';
import { Task } from '../model';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
}

class TaskList extends React.Component<TaskListProps> {
    render() {
        const tasks = this.props.tasks || [] as Task[];
        return(
            <ul>
                {   
                    tasks.map(task =>
                    <TaskItem task={task}/>
                )}
            </ul>
        )
    }
}

export default TaskList;