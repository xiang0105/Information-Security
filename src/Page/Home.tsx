import style from '../Css/Home.module.css'
import Counter from '../Element/Counter.tsx'

function Home(){
    return(
        <section className={style.home} id="Home">
            <span className={style.title}>駭客與密碼：資訊安全探索之旅</span>
            <div className={style.container}>
                <span className={style.slogan} style={{ marginTop: '5rem'}}>駭客是挑戰者</span>
                <span className={style.slogan}>密碼是守門人</span>
            </div>
            <div className={style.container} style={{ flexDirection: 'column'}}>
                <span className={style.content}>全球近<span className={style.danger}>< Counter target={200} spacing={7}/></span>起資料外洩，<span className={style.danger}>< Counter target={19} spacing={1}/> </span>億組密碼曝光，</span>
                <span className={style.content}>而駭客只需一鍵入侵。</span>
            </div>
        </section>
    )
}

export default Home