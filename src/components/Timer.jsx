import { useEffect, useState, useRef } from "react";

function Timer(){
    const [ hoursInput, setHoursInput ] = useState(0);
    const [ minutesInput, setMinutesInput ] = useState(0);
    const [ secondsInput, setSecondsInput ] = useState(0);
    const hours = useRef(0);
    const minutes = useRef(0);
    const seconds = useRef(0);
    const milliSeconds = useRef(0);
    const [ startTimer, setStartTimer ] = useState(false);
    const [ timerShow, setTimerShow ] = useState(false);
    const [ showTimer, setShowTimer ] = useState(String(hours.current).padStart(2,0) +':'+ String(minutes.current).padStart(2,0) +':'+ String(seconds.current).padStart(2,0));

    const setTimer = () => {
        if(secondsInput == 0 && minutesInput == 0 && hoursInput == 0) return;
        seconds.current = 0;
        minutes.current = 0;
        hours.current = 0;
        if(secondsInput >= 60){
            seconds.current += (secondsInput - 60);
            minutes.current += 1;
        }else{
            seconds.current = secondsInput;
        }
        if(minutesInput > 60){
            minutes.current += (minutesInput - 60);
            hours.current += 1;
        }else if(minutesInput < 60){
            minutes.current += minutesInput;
        }else if(minutesInput == 60){
            hours.current += 1;
        }
        hours.current += hoursInput;
        setStartTimer(true);
        setTimerShow(true);
        console.log(hours.current, minutes.current , seconds.current);
        setShowTimer(String(hours.current).padStart(2,0) +':'+ String(minutes.current).padStart(2,0) +':'+ String(seconds.current).padStart(2,0));
        setHoursInput(0);
        setMinutesInput(0);
        setSecondsInput(0);
    }
    var clearStopWatch;
    useEffect(()=>{
        clearStopWatch = setInterval(() => {
            if(!startTimer) return;
            milliSeconds.current += 1;
            if(milliSeconds.current > 99){
                if(hours.current != 0 || minutes.current != 0 || seconds.current != 0) milliSeconds.current = 0
                seconds.current -= 1;
                if(seconds.current < 0) seconds.current = 0;
            }
            if(seconds.current == 0){
                if(hours.current != 0 || minutes.current != 0) seconds.current = 59
                minutes.current -= 1;
                if(minutes.current < 0) minutes.current = 0;
            }
            if(minutes.current == 0){
                if(hours.current != 0) minutes.current = 59
                hours.current -= 1;
                if(hours.current < 0) hours.current = 0;
            }
            console.log(hours.current,minutes.current,seconds.current);
            setShowTimer(String(hours.current).padStart(2,0) +':'+ String(minutes.current).padStart(2,0) +':'+ String(seconds.current).padStart(2,0));
            if(hours.current == 0 && minutes.current == 0 && seconds.current == 0){
                setStartTimer(false);
                milliSeconds.current = 0;
                setTimerShow(false);
            }
        }, 10);
        return () => clearInterval(clearStopWatch);
    },[showTimer,startTimer])

    const handleToggle = () => {
        setStartTimer(startTimer => !startTimer); // Toggles true/false
    };

    const stopTimer = () => {
        setStartTimer(false);
        milliSeconds.current = 0;
        setTimerShow(false);
        seconds.current = 0;
        minutes.current = 0;
        hours.current = 0;
    };

    return (<>
    <section className={'bg-gray-200 overflow-auto flex flex-col justify-center items-center h-[93%]'}>
        <h1 className={`text-[24px] mb-2 ${timerShow ? 'hidden' : 'flex'}`}>Add Time</h1>
        <div className={`gap-2 items-center timerInput ${timerShow ? 'hidden' : 'flex'}`}>
            <input type="number" value={hoursInput} className="w-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" max="99" onChange={(e)=>{setHoursInput(Number(e.target.value))}}/>
            <input type="number" className="w-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" max="99" value={minutesInput} onChange={(e)=>{setMinutesInput(Number(e.target.value))}}/>
            <input type="number" value={secondsInput} className="w-15 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" min="0" max="99" onChange={(e)=>{setSecondsInput(Number(e.target.value))}}/>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{setTimer()}}>Add</button>
        </div>
        <div className={`md:text-[84px] font-mono text-black p-4 text-[50px] ${!timerShow ? 'hidden' : 'flex'}`}>{showTimer}</div>
        <div className={`flex gap-3 ${!timerShow ? 'hidden' : 'flex'}`}>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> {stopTimer()} }>Stop</button>
            <button className={`${!startTimer ? 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' : 'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'}`}  onClick={()=> { handleToggle();} }>{ !startTimer ? 'resume' : 'pause'}</button>
        </div>
    </section>
        </>)
}

export default Timer;