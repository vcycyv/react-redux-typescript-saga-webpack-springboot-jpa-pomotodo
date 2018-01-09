import * as React from 'react';
import { Task, Pomo } from '../model';
import { Dispatch } from 'redux';
import { Label, Button } from "react-bootstrap";

interface TaskItemProps {
    task: Task;
    onDelete: (id:string) => Dispatch<string>;
    onStartPomo: (id: string) => Dispatch<Pomo>;
}

class TaskItem extends React.Component<TaskItemProps> {
    render() {
        const { task, onDelete, onStartPomo } = this.props;
        return(
            <div key={task.id+"_div"} style={{overflow: "hidden"}}>
                <div style={{float: "left"}}>
                    <Label key={task.id}>{task.name}</Label> {''}
                </div>
                <div style={{float: "right"}}>
                    <Button onClick={() => onStartPomo(task.id)} bsStyle="primary" key={task.id+"_start"}>start</Button>
                    <Button onClick={() => onDelete(task.id)} bsStyle="primary" key={task.id+"_delete"}>delete</Button>
                </div>
            </div>
        );
    }
}

export default TaskItem;