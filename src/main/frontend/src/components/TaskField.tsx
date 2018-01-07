import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { Task } from '../model';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

interface TaskFieldProps {
  dispatch: Dispatch<Task>;
  text?: string;
}

interface TaskFieldState {
  text: string;
}

class TaskField extends React.Component<TaskFieldProps, TaskFieldState> {
  constructor(props: TaskFieldProps, context: {}) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const text: string = this.state.text;
    if (text.length !== 0) {
      this.props.dispatch(addTask(text));
    }
    this.setState({text: ''});
  }

  handleChange(e: any) {
    this.setState({ text: e.target.value });
  }

  render() {
    return(
      <div>
          <InputGroup>
            <FormControl type="text" value={this.state.text} onChange={this.handleChange}/>
            <InputGroup.Button>
              <Button onClick={this.handleSubmit}>Add</Button>
            </InputGroup.Button>
          </InputGroup>
      </div>
    );
  }
}

export default connect()(TaskField);