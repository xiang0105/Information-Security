import style from '../Css/Video.module.css';
import {useRef , useEffect , useState} from 'react';

function Video(){
    const titleRef = useRef(null);
    const frameRef = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);
    const [frameVisible, setFrameVisible] = useState(false);

    useEffect(() => {
            const observer = new IntersectionObserver(
            ([entry]) => setTitleVisible(entry.isIntersecting),
            { threshold: 0.5 }
            );
            if (titleRef.current) observer.observe(titleRef.current);
            return () => observer.disconnect();
        }, []);

    useEffect(() => {
            const observer = new IntersectionObserver(
            ([entry]) => setFrameVisible(entry.isIntersecting),
            { threshold: 0 }
            );
            if (frameRef.current) observer.observe(frameRef.current);
            return () => observer.disconnect();
        }, []);

    return(
        <section className={style.video} id='Video'>
            <div className={`${style.title} ${titleVisible ? style.show : style.hidden}`} ref={titleRef}>影片欣賞</div>
            <div className={`${style.container} ${frameVisible ? style.show : style.hiddenvideo}`} ref={frameRef}>
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