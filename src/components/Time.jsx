import { useState, useEffect } from 'react';

function Time() {
  const getCurrentTime = () => {
    const date = new Date();
    return date.getHours().toString().padStart(2, '0') + ':' +
           date.getMinutes().toString().padStart(2, '0') + ':' +
           date.getSeconds().toString().padStart(2, '0');
  };

  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);


  return (
    <div className="md:text-[84px] font-mono text-black p-4 text-[50px]">
      {time}
    </div>
  );
}

export default Time;
