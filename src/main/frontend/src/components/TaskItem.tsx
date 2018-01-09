import * as React from 'react';
import { Task } from '../model';
import { Dispatch } from 'redux';
import { Label, Button } from "react-bootstrap";

interface TaskItemProps {
    task: Task;
    onDelete: (id:string) => Dispatch<string>;
}

class TaskItem extends React.Component<TaskItemProps> {
    render() {
        const { task, onDelete } = this.props;
        return(
            <div key={task.id+"_div"} style={{overflow: "hidden"}}>
                <div style={{float: "left"}}>
                    <Label key={task.id}>{task.name}</Label> {''}
                </div>
                <div style={{float: "right"}}>
                    <Button onClick={() => onDelete(task.id)} bsStyle="primary" key={task.id+"_delete"}>delete</Button>
                </div>
            </div>
        );
    }
}

export default TaskItem;