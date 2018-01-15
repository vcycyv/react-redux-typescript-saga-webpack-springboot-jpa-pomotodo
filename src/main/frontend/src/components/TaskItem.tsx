import * as React from 'react';
import { Task} from '../model';
import { Dispatch } from 'redux';
import { Label, Button } from 'react-bootstrap';
import { STATUS_STOPPED, STATUS_FINISHED, STATUS_IN_PROGRESS }  from '../actions/taskActions';

interface TaskItemProps {
    task: Task;
    onDelete: (id:string) => Dispatch<string>;
    onStartPomo: (id: string) => Dispatch<string>;
    onStopPomo: (id: String) => Dispatch<string>;
    onFinishPomo: (id: String) => Dispatch<string>;
    disableStartAction: boolean;
}

class TaskItem extends React.Component<TaskItemProps> {
    render() {
        const { task, onDelete, onStartPomo, onStopPomo, onFinishPomo, disableStartAction } = this.props;
        let startStopButton = null;
        if (task.status === STATUS_IN_PROGRESS)
            startStopButton = <Button onClick={() => onStopPomo(task.id)} bsStyle="primary" key={task.id+"_stop"}>stop</Button>
        else
            startStopButton = <Button onClick={() => onStartPomo(task.id)} bsStyle="primary" key={task.id+"_start"} 
                disabled={(disableStartAction && task.status === STATUS_STOPPED) || task.status === STATUS_FINISHED}>start</Button>
        
        let taskNameLabel = null;
        if (task.status === STATUS_FINISHED)
            taskNameLabel = <Label key={task.id} style={{"textDecoration": "line-through"}}>{task.name}</Label>
        else
            taskNameLabel = <Label key={task.id}>{task.name}</Label>
        return(
            <div key={task.id+"_div"} style={{overflow: "hidden", paddingBottom: "3px"}}>
                <div style={{float: "left"}}>
                     {taskNameLabel} {' '}  {' '} <Label key={task.id+"_cost"} bsStyle="warning">{Math.floor(task.cost/60)}</Label> {' '}
                </div>
                <div style={{float: "right"}}>
                    {startStopButton} {''}
                    <Button onClick={() => onFinishPomo(task.id)} bsStyle="primary" key={task.id+"_finish"} disabled={task.status === STATUS_FINISHED}>finish</Button>{' '}
                    <Button onClick={() => onDelete(task.id)} bsStyle="primary" key={task.id+"_delete"} disabled={(disableStartAction)}>delete</Button>
                </div>
            </div>
        );
    }
}

export default TaskItem;