import style from '../Css/source.module.css';

const sourceList = [
  {
    titel: 'DDoS 攻擊防禦服務介紹 - EASPNet',
    url: 'https://www.easpnet.com/blog/ddos-service/',
  },
  {
    titel: '2024年釣魚攻擊解析 - Leyun Cloud',
    url: 'https://www.leyun.cloud/news-detail/2024Phishing-Attack/',
  },
  {
    titel: '全民反釣魚行動指南 - HKCERT',
    url: 'https://www.hkcert.org/tc/publications/all-out-anti-phishing',
  },
  {
    titel: '如何預防勒索軟體 - Cloudflare 教學',
    url: 'https://www.cloudflare.com/zh-tw/learning/security/ransomware/how-to-prevent-ransomware/',
  },
  {
    titel: '什麼是惡意軟體 - Fortinet',
    url: 'https://www.fortinet.com/tw/resources/cyberglossary/malware',
  },
  {
    titel: '什麼是撞庫攻擊（Credential Stuffing）- Cloudflare',
    url: 'https://www.cloudflare.com/zh-tw/learning/bots/what-is-credential-stuffing/',
  },
  {
    titel: '什麼是撞庫攻擊 - Neway 資安文章',
    url: 'https://www.neway.com.tw/article-detail/what-is-credential-stuffing/',
  },
  {
    titel: '撞庫攻擊說明與防護建議 - Netcore',
    url: 'https://www.netcore.com.tw/edcontent_d.php?lang=tw&tb=2&id=721',
  },
  {
    titel: '撞庫攻擊簡介與案例分析 - TSG 資安部落格',
    url: 'https://www.tsg.com.tw/blog-detail10-354-1-crednetial-stuffing.htm',
  },
  {
    titel: 'CYBERSEC 2021 勒索軟體的預防與解決',
    url: 'https://cybersec.ithome.com.tw/2021/insight-page/30',
  },
  {
    titel: '如何預防勒索軟體的 9 個技巧 - Fortinet',
    url: 'https://www.fortinet.com/tw/resources/cyberglossary/how-to-prevent-ransomware',
  },
];



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
                                <a href={source.url} target="_blank">{source.titel}：{source.url}</a>
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