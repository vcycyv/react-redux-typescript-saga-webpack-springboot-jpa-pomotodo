import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import TaskField from './components/TaskField';
import TaskList from './components/TaskList';
import { listTask } from './actions/taskActions';
import { Task } from './model';

interface AppProps {
  tasks: Task[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps> {
  componentWillMount() {
    this.props.dispatch(listTask());
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className="container" style={{maxWidth: "800px"}}>
        <TaskField/>
        <TaskList tasks={tasks}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export default connect(mapStateToProps)(App);
