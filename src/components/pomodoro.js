import React, {useState, useEffect} from 'react';

function Pomodoro(){
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [paused, setPaused] = useState(false)
    const [displayMessage, setDisplayMessage] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if (paused === false){
                if (seconds === 0){
                    if (minutes !== 0){
                        setSeconds(59);
                        setMinutes(minutes - 1)
                    } else {
                        let minutes = displayMessage ? 24 : 4;
                        let seconds = 59;

                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage)
                    }
                } else {
                    setSeconds(seconds - 1)
                }
            }
        }, 1000)
    }, [seconds, paused])

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return(
        <div className = "pomodoro">
           <div className = "message">
                {displayMessage && <div>Break time!</div>}
           </div>
           <div className = "timer">{timerMinutes}:{timerSeconds}</div>
           <div className = "pause"><button onClick = {()=> {
            if (paused === true){setPaused(false)}
            else if (paused === false){setPaused(true)}}}>pause!</button></div>
        </div>
    )
}

export default Pomodoro;