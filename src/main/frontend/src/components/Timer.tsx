import * as React from 'react';
import { Pomo } from '../model';
import { Button } from "react-bootstrap";

const defaultMinutesDown = 30;

interface TimerProps {
    pomo: Pomo;
}

interface TimerState {
    time: string;
    stopWatch: string;
}

declare var Notification: any;

let seconds = 0, minutes = 0, hours = 0, timer = 0, secondsDown = 0, hoursDown = 0, timerDown = 0, total = 0;
let minutesDown = defaultMinutesDown;
let startTime = 0;

class Timer extends React.Component<TimerProps, TimerState> {
    constructor(props) {
        super(props);
        this.state = {
            time: "00:00:00",
            stopWatch: "00:00:00",
        }
    }

    componentWillMount() {
        this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
    }

    componentWillReceiveProps(nextprops: TimerProps) {
        if(nextprops.pomo.timer) {
            clearTimeout(timer);
            clearTimeout(timerDown);
            this.timer();
            this.timerDown();
            total = defaultMinutesDown * 60;
            startTime = new Date().getTime();
        }else {
            secondsDown = 0;
            minutesDown = defaultMinutesDown;
            hoursDown = 0;
            this.setState(Object.assign({}, this.state, {
                stopWatch: this.getStopWatch(0, defaultMinutesDown, 0),
                time: this.getTime(0, 0, 0)
            }));
            clearTimeout(timer);
            clearTimeout(timerDown);
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
        var difference = (new Date().getTime() - startTime);
        difference = difference / 1000;
        seconds = Math.floor(difference % 60);
        minutes = Math.floor((difference / 60) % 60);
        hours = Math.floor((difference / 3600) % 60);
        this.setState(Object.assign({}, this.state, {time: this.getTime(hours, minutes, seconds)}));
        this.timer();
    }

    countDown(){
        var difference = new Date().getTime() - startTime;
        difference = difference / 1000;
        var timeLeft = total - difference + 1;
        secondsDown = Math.floor(timeLeft % 60);
        if(secondsDown == 0)
            minutesDown = Math.ceil((timeLeft / 60) % 60);
        else{
            if(minutesDown != 0)
                minutesDown = Math.ceil((timeLeft / 60) % 60) - 1;
            else{
                minutesDown = 59;
                if(hoursDown != 0)
                    hoursDown = Math.ceil((timeLeft / 3600) % 60);
            }
        } 

        if(secondsDown == 0 && minutesDown == 0 && hoursDown == 0) {
            clearTimeout(timerDown);
            this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
            if (Notification.permission !== "granted")
                Notification.requestPermission();
            else {
                    new Notification("Time's up", {
                      body: "Time to take a break!",
                    });
            }
            return;
        }
        this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
        this.timerDown();
    }

    timer(){
        timer = setTimeout(this.add.bind(this), 1000);
    }

    timerDown(){
        timerDown = setTimeout(this.countDown.bind(this), 1000);
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
        if(minutesDown + timeLength >= 60){
            minutesDown = minutesDown + timeLength - 60;
            hoursDown = hoursDown + 1
            this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
        }else {
            minutesDown = minutesDown + timeLength;
            this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
        }
    }

    minusTime(timeLength){
        if(minutesDown - timeLength < 0 && hoursDown === 0)
            return;
        else if(minutesDown - timeLength < 0) {
            minutesDown = minutesDown - timeLength + 60;
            hoursDown = hoursDown - 1;
            this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
        }else {
            minutesDown = minutesDown - timeLength;
            this.setState(Object.assign({}, this.state, {stopWatch: this.getStopWatch(hoursDown, minutesDown, secondsDown)}));
        }
    }
}

export default Timer;