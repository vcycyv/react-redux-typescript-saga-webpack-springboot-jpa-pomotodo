import * as React from 'react';
import { Task } from '../model';

interface TaskItemProps {
    task: Task;
}

class TaskItem extends React.Component<TaskItemProps> {
    render() {
        const { task } = this.props;
        return(
            <li>
                {task.name}
            </li>
        )
    }
}

export default TaskItem;