import style from '../Css/Video.module.css';
import {useRef , useEffect , useState} from 'react';

function Video(){
    const titleRef = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
            const observer = new IntersectionObserver(
            ([entry]) => setTitleVisible(entry.isIntersecting),
            { threshold: 0.5 }
            );
            if (titleRef.current) observer.observe(titleRef.current);
            return () => observer.disconnect();
        }, []);
    return(
        <div className={style.container} id='Video'>
            <div className={`${style.title} ${titleVisible ? style.show : style.hidden}`} ref={titleRef}>影片欣賞</div>
            <div className={style.videoBody}>
                <iframe
                    width="60%"
                    height="80%"
                    src="https://www.youtube.com/embed/mi33SvaDfB4"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    ></iframe>
            </div>
        </div>
    )
}

export default Video;