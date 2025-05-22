import { useEffect, useState } from 'react';

function Counter({ target = 19, spacing = 1, duration = 1000, delay = 1800 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let intervalId: number;
        let timeoutId: number;

        timeoutId = window.setTimeout(() => {
            const stepTime = Math.max(Math.floor(duration / (target / spacing)), 20);
            intervalId = window.setInterval(() => {
                setCount(prev => {
                    if (prev + spacing < target) return prev + spacing;
                    clearInterval(intervalId);
                    return target;
                });
            }, stepTime);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [target, spacing, duration, delay]);

    return <span>{count}</span>;
}

export default Counter;