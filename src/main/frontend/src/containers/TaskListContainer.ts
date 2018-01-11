import { connect } from 'react-redux';
import { IState } from '../model';
import { deleteTask } from '../actions/taskActions';
import { startPomo, stopPomo } from '../actions/pomoActions';
import TaskList from '../components/TaskList';

const mapStateToProps = (state:IState) => ({
    tasks: state.tasks
  })

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteTask(id));
        }, 
        onStartPomo: id => {
            dispatch(startPomo(id));
        },
        onStopPomo: id => {
            dispatch(stopPomo(id));
        },
    }
}

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default TaskListContainer;