import { connect } from 'react-redux';
import { IState } from '../model';
import Timer from '../components/Timer';

const mapStateToProps = (state:IState) => ({
    pomo: state.pomo
  })

const TimerContainer = connect(
    mapStateToProps
)(Timer);

export default TimerContainer;