import * as React from 'react';
import { Task, Pomo } from '../model';
import { Dispatch } from 'redux';
import { Label, Button } from 'react-bootstrap';
import { STATUS_STOPPED, STATUS_FINISHED, STATUS_IN_PROGRESS }  from '../actions/taskActions';

interface TaskItemProps {
    task: Task;
    onDelete: (id:string) => Dispatch<string>;
    onStartPomo: (id: string) => Dispatch<Pomo>;
    onStopPomo: (id: String) => Dispatch<string>;
    disableStartAction: boolean;
}

class TaskItem extends React.Component<TaskItemProps> {
    render() {
        const { task, onDelete, onStartPomo, onStopPomo, disableStartAction } = this.props;
        let startStopButton = null;
        if (task.status === STATUS_IN_PROGRESS)
            startStopButton = <Button onClick={() => onStopPomo(task.id)} bsStyle="primary" key={task.id+"_stop"}>stop</Button>
        else
            startStopButton = <Button onClick={() => onStartPomo(task.id)} bsStyle="primary" key={task.id+"_start"} 
                disabled={(disableStartAction && task.status === STATUS_STOPPED) || task.status === STATUS_FINISHED}>start</Button>
        return(
            <div key={task.id+"_div"} style={{overflow: "hidden"}}>
                <div style={{float: "left"}}>
                    <Label key={task.id}>{task.name}</Label> {''}
                </div>
                <div style={{float: "right"}}>
                    {startStopButton}
                    <Button onClick={() => onDelete(task.id)} bsStyle="primary" key={task.id+"_delete"}>delete</Button>
                </div>
            </div>
        );
    }
}

export default TaskItem;