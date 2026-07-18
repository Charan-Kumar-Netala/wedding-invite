import { useState, useEffect } from "react";

export function useCountDown(targetDate) {
    const [time, setTime] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const isOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
            const diff = new Date(targetDate) - new Date() - isOffset;
            setTime({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                minutes: Math.floor((diff % 3600000) / 60000),
                seconds: Math.floor((diff % 60000) / 1000)
            });
        }, 1000);
        return () => clearInterval(interval)
    }, [targetDate]);

    return time;
}