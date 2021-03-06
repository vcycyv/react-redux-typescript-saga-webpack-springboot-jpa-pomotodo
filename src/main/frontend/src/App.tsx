import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import TaskField from './components/TaskField';
import TaskListContainer from './containers/TaskListContainer';
import TimerContainer from './containers/TimerContainer';
import { listTask } from './actions/taskActions';

interface AppProps {
  dispatch: Dispatch<{}>;
}

declare var Notification: any;

class App extends React.Component<AppProps> {
  componentWillMount() {
    this.props.dispatch(listTask());
  }

  render() {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
    return (
      <div className="container" style={{maxWidth: "800px"}}>
        <TimerContainer/>
        <TaskField/>
        <TaskListContainer/>
      </div>
    );
  }
}

export default connect()(App);
