import { connect } from 'react-redux';
import { IState } from '../model';
import { deleteTask } from '../actions/taskActions';
import { startPomo, stopPomo, finishPomo } from '../actions/pomoActions';
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
        onFinishPomo: id => {
            dispatch(finishPomo(id));
        }
    }
}

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default TaskListContainer;