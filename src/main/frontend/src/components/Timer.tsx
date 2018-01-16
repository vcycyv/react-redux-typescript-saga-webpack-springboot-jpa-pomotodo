import * as React from 'react';
import { Pomo } from '../model';
import { Button } from "react-bootstrap";

const defaultMinutesDown = 30;

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

declare var Notification: any;

class Timer extends React.Component<TimerProps, TimerState> {
    constructor(props) {
        super(props);
        this.state = {
            time: "00:00:00",
            seconds: 0,
            minutes: 0,
            hours: 0,
            timer: 0,
            secondsDown: 0,
            minutesDown: defaultMinutesDown,
            hoursDown: 0,
            timerDown: 0,
            stopWatch: "00:00:00",
        }
    }

    componentWillMount() {
        this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(this.state.hoursDown, this.state.minutesDown, this.state.secondsDown)}));
    }

    componentWillReceiveProps(nextprops: TimerProps) {
        if(nextprops.pomo.timer) {
            clearTimeout(this.state.timer);
            clearTimeout(this.state.timerDown);
            this.timer();
            this.timerDown();
        }else {
            this.setState(Object.assign({}, this.state, {secondsDown: 0, 
                minutesDown: defaultMinutesDown, 
                hoursDown: 0, 
                stopWatch: this.getStopWatch(0, defaultMinutesDown, 0),
                seconds: 0,
                minutes: 0,
                hours: 0,
                time: this.getTime(0, 0, 0)
            }));
            clearTimeout(this.state.timer);
            clearTimeout(this.state.timerDown);
        }        
    }

    render() {
        //const { pomo } = this.props;

        return(
            <div style={{textAlign: "center"}}>
                <h1 style={{display: "inline-block"}}><time>{this.state.stopWatch}</time>{' '}
                    <Button onClick={this.addTime.bind(this, 10)}> +10 </Button>{' '}
                    <Button style={{marginRight: "150px"}} onClick={this.minusTime.bind(this, 5)}> -5 </Button>
                </h1> 
                <h3 style={{display: "inline-block", paddingLeft: "20px" }}><time>{this.state.time}</time></h3><br/>
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
        this.setState(Object.assign({}, this.state, {time: this.getTime(this.state.hours, this.state.minutes, this.state.seconds)}));
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
            this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(this.state.hoursDown, this.state.minutesDown, this.state.secondsDown)}));
            if (Notification.permission !== "granted")
                Notification.requestPermission();
            else {
                    new Notification("Time's up", {
                      body: "Time to take a break!",
                    });
            }
            return;
        }
        this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(this.state.hoursDown, this.state.minutesDown, this.state.secondsDown)}));
        this.timerDown();
    }

    timer(){
        this.setState(Object.assign({}, this.state, {timer: setTimeout(this.add.bind(this), 1000)}));
    }

    timerDown(){
        this.setState(Object.assign({}, this.state, {timerDown: setTimeout(this.countDown.bind(this), 1000)}));
    }

    getStopWatch(hoursDown: number, minutesDown: number, secondsDown: number): string {
        return (hoursDown ? (hoursDown > 9 ? hoursDown : "0" + hoursDown) : "00") + ":" +
                (minutesDown ? (minutesDown > 9 ? minutesDown : "0" + minutesDown) : "00") + ":" + 
                (secondsDown > 9 ? secondsDown : "0" + secondsDown);
    }

    getTime(hours: number, minutes: number, seconds: number): string {
        return (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
                (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
                (seconds > 9 ? seconds : "0" + seconds);
    }

    addTime(timeLength){
        if(this.state.minutesDown + timeLength >= 60){
            this.setState(Object.assign({}, this.state, {minutesDown: this.state.minutesDown + timeLength - 60,
                hoursDown: this.state.hoursDown + 1, stopWatch: this.getStopWatch(this.state.hoursDown + 1, this.state.minutesDown + timeLength - 60, this.state.secondsDown)}));
        }else {
            this.setState(Object.assign({}, this.state, {minutesDown: this.state.minutesDown + timeLength, stopWatch: this.getStopWatch(this.state.hoursDown, this.state.minutesDown + timeLength, this.state.secondsDown)}));
        }
    }

    minusTime(timeLength){
        if(this.state.minutesDown - timeLength < 0 && this.state.hoursDown === 0)
            return;
        else if(this.state.minutesDown - timeLength < 0) {
            this.setState(Object.assign({}, this.state, {minutesDown: this.state.minutesDown - timeLength + 60,
                hoursDown: this.state.hoursDown - 1, stopWatch: this.getStopWatch(this.state.hoursDown - 1, this.state.minutesDown - timeLength + 60, this.state.secondsDown)}));
        }else {
            this.setState(Object.assign({}, this.state, {minutesDown: this.state.minutesDown - timeLength, stopWatch: this.getStopWatch(this.state.hoursDown, this.state.minutesDown - timeLength, this.state.secondsDown)}));
        }
    }
}

export default Timer;