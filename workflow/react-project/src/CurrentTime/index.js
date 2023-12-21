import React, {useEffect, useState} from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateTimeInterval = setInterval(() => setTime(new Date()),1000);

        return () => {clearInterval(updateTimeInterval)};
    },[])

    return <span>{time.toLocaleTimeString()}</span>;
}

export default CurrentTime;