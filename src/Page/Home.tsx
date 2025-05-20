import style from '../Css/Home.module.css'
import { useEffect, useState } from 'react'



function Home(){
    return(
        <div className={style.container} id='Home'>
            <span className={style.webTitle}>駭客與密碼：資訊安全探索之旅</span>
            <div className={style.titleContainer}>
                <span className={style.title} style={{ marginTop: '5rem'}}>駭客是挑戰者</span>
                <span className={style.title}>密碼是守門人</span>
            </div>
            <div className={style.contentContainer}>
                <span className={style.content}>全球近< Counter target={200} spacing={7}/>起資料外洩，< Counter target={19} spacing={1}/> 億組密碼曝光，</span>
                <span className={style.content}>而駭客只需一鍵入侵。</span>
            </div>
        </div>
    )
}


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

    return <span className={style.danger}>{count}</span>;
}

export default Home