import React, {useEffect, useState} from "react";

const getDate = () => {
    const currentDate = new Date();

    return `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}


const CurrentTime = () => {
    const [time, setTime] = useState(getDate());

    useEffect(() => {
        const updateTimeInterval = setInterval(() => setTime(getDate()),1000);

        return () => {clearInterval(updateTimeInterval)};
    },[])

    return <p>{time}</p>;
}

export default CurrentTime;