import * as React from 'react';
import { Pomo } from '../model';
import { Label } from "react-bootstrap";

interface TimerProps {
    pomo: Pomo;
}

interface TimerState {
    time: string;
    seconds: number;
    minutes: number;
    hours: number;
    timer: number;
    stopWatch: string;
    secondsDown: number;
    minutesDown: number;
    hoursDown: number;
    timerDown: number;

}

class Timer extends React.Component<TimerProps, TimerState> {
    
    constructor(props) {
        super(props);
        this.state = {
            time: "00:00:00",
            seconds: 0,
            minutes: 0,
            hours: 0,
            timer: 0,
            stopWatch: "00:30:00",
            secondsDown: 0,
            minutesDown: 1,
            hoursDown: 0,
            timerDown: 0
        }
     }

    componentWillReceiveProps(nextprops: TimerProps) {
        this.timer();
        this.timerDown();
    }

    render() {
        //const { pomo } = this.props;

        return(
            <div>
                <Label>{this.state.time}</Label> <br/>
                <Label>{this.state.stopWatch}</Label>
            </div>
        );
    }

    add(){
        this.setState(Object.assign({}, this.state, {seconds: this.state.seconds + 1}));
        if (this.state.seconds >= 60) {
            this.setState(Object.assign({}, this.state, {seconds: 0}));
            this.setState(Object.assign({}, this.state, {minutes: this.state.minutes + 1}));
            if (this.state.minutes >= 60) {
                this.setState(Object.assign({}, this.state, {minutes: 0}));
                this.setState(Object.assign({}, this.state, {hours: this.state.hours + 1}));
            }
        }
        this.setState(Object.assign({}, this.state, {time: (this.state.hours ? (this.state.hours > 9 ? this.state.hours : "0" + this.state.hours) : "00") + ":" +
            (this.state.minutes ? (this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes) : "00") + ":" + 
            (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds)}));
        this.timer();
    }

    countDown(){
        this.setState(Object.assign({}, this.state, {secondsDown: this.state.secondsDown - 1}));
        if (this.state.secondsDown < 0 && (this.state.minutesDown > 0 || this.state.hoursDown > 0)) {
            this.setState(Object.assign({}, this.state, {secondsDown: 59}));
            this.setState(Object.assign({}, this.state, {minutesDown: this.state.minutesDown - 1}));
            if (this.state.minutesDown < 0) {
                this.setState(Object.assign({}, this.state, {minutesDown: 59}));
                this.setState(Object.assign({}, this.state, {hoursDown: this.state.hoursDown - 1}));
            }
        }else if(this.state.secondsDown == 0 && this.state.minutesDown == 0 && this.state.hoursDown == 0) {
            clearTimeout(this.state.timerDown);
            this.setState(Object.assign({}, this.state, {stopWatch: (this.state.hoursDown ? (this.state.hoursDown > 9 ? this.state.hoursDown : "0" + this.state.hoursDown) : "00") + ":" +
                (this.state.minutesDown ? (this.state.minutesDown > 9 ? this.state.minutesDown : "0" + this.state.minutesDown) : "00") + ":" + 
                (this.state.secondsDown > 9 ? this.state.secondsDown : "0" + this.state.secondsDown)}));
            alert('Time up');
            return;
        }
        this.setState(Object.assign({}, this.state, {stopWatch: (this.state.hoursDown ? (this.state.hoursDown > 9 ? this.state.hoursDown : "0" + this.state.hoursDown) : "00") + ":" +
            (this.state.minutesDown ? (this.state.minutesDown > 9 ? this.state.minutesDown : "0" + this.state.minutesDown) : "00") + ":" + 
            (this.state.secondsDown > 9 ? this.state.secondsDown : "0" + this.state.secondsDown)}));
        this.timerDown();
    }

    timer(){
        this.setState(Object.assign({}, this.state, {timer: setTimeout(this.add.bind(this), 1000)}));
    }

    timerDown(){
        this.setState(Object.assign({}, this.state, {timerDown: setTimeout(this.countDown.bind(this), 1000)}));
    }
}

export default Timer;