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
        <section className={style.video} id='Video'>
            <div className={`${style.title} ${titleVisible ? style.show : style.hidden}`} ref={titleRef}>影片欣賞</div>
            <div className={style.container}>
                <iframe
                    src="https://www.youtube.com/embed/mi33SvaDfB4"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className={style.videoFrame}
                    ></iframe>
            </div>
        </section>
    )
}

export default Video;