import style from '../Css/Video.module.css';

function Video(){

    return(
        <section className={style.video} id='Video'>
            <div className={style.title}><div>影片欣賞</div></div>
            <div className={`${style.container}`}>
                <iframe
                    src="https://www.youtube.com/embed/rhcs8yasdGU?si=TbM9T7cqAxmcOkvH"
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