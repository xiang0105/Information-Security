import style from '../Css/source.module.css';

const sourceList = [
    "https://www.neway.com.tw/article-detail/what-is-credential-stuffing/",
    "https://www.netcore.com.tw/edcontent_d.php?lang=tw&tb=2&id=721",
    "https://www.cloudflare.com/zh-tw/learning/bots/what-is-credential-stuffing/",
    "https://www.tsg.com.tw/blog-detail10-354-1-crednetial-stuffing.htm",
]


function Source() {
    return(
        <section className={style.source} id='Source'>
            
            <div className={style.container}>
                <div></div>
                <div>
                    <div className={style.title}>資料來源</div>
                    <ul>
                        {sourceList.map((source, index) => (
                            <li key={index} className={style.sourceItem}>
                                <a href={source} target="_blank" rel="noopener noreferrer">{source}</a>
                            </li>
                        ))}
                    </ul>
                    </div>
                <div></div>
            </div>
        </section>
    )
}

export default Source;