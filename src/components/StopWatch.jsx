import { useState, useEffect } from "react";

function StopWatch(){
    var [hours,setHours] = useState(0);
    var [minutes,setMinutes] = useState(0);
    var [seconds,setSeconds] = useState(0);
    var [milliSeconds,setMilliSeconds] = useState(0);
    const [startFlag, startFlagUpdate] = useState(false);
    const [stopWatchTime, stopWatchTimeUpdate] = useState(String(hours).padStart(2,'0') + ':' + String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ':' + String(milliSeconds).padStart(2,'0'));
    var clearStopWatch;
    useEffect(() => {
        clearStopWatch = setInterval(()=>{
            stopWatchTimeUpdate(String(hours).padStart(2,'0') + ':' + String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ':' + String(milliSeconds).padStart(2,'0'))
            if(!startFlag) {
                return
            };
            setMilliSeconds(milliSeconds + 1);
            if(milliSeconds == 99){
                setSeconds(seconds + 1);
                setMilliSeconds(1)
            }
            if(seconds == 60){
                setMinutes(minutes + 1);
                setSeconds(0);
            }
            if(minutes == 60){
                hours += 1;
                setHours(hours + 1);
                setMinutes(0);
            }
        },10);
        return () => clearInterval(clearStopWatch);
    },[startFlag,hours,minutes,seconds,milliSeconds])

    const resetTimer = (flag) => {
        setMilliSeconds(0)
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        startFlagUpdate(flag);
    }

    return (
        <>
            <section className={'bg-gray-200 overflow-auto flex flex-col justify-center items-center h-[93%]'}>
                <div className="md:text-[84px] font-mono text-black p-4 text-[50px]">
                    {stopWatchTime}
                </div>
                <div className="flex gap-3">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=> {startFlagUpdate(true)} }>start</button>
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> {resetTimer(false)} }>Reset</button>
                <button className={`${!startFlag && milliSeconds ? 'focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' : 'focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'}`}  onClick={()=> { if(hours != 0 || minutes != 0 || seconds != 0) startFlagUpdate(!startFlag);} }>{ !startFlag && milliSeconds ? 'resume' : 'pause'}</button>
                </div>
            </section>
        </>
    )
}

export default StopWatch