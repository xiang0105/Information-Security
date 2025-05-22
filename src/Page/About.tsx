import style from '../Css/about.module.css';
import Carousel from '../Element/Carousel.tsx';
import { useRef, useEffect, useState } from 'react';

import img1 from '../assets/002.png';
import img2 from '../assets/003.png';
import img3 from '../assets/004.png';

const images = [img1, img2, img3];
const Event = {
    title: "Yahoo 資料外洩事件（2013–2014）",
    subtitle: "史上最大規模帳密外洩事件，影響超過30億帳號",
    content: '在 2013 年至 2014 年間，Yahoo 遭駭客入侵，最初披露時聲稱僅有 10 億筆帳號受影響，然而在 2017 年重新調查後，Yahoo 證實共有 超過 30 億個使用者帳號 資料外洩，成為歷史上最大規模的帳密外洩事件之一。外洩資訊包括姓名、電子郵件、電話號碼、生日、密碼（加密）、甚至部分安全問題與答案。這些資訊可能被用於釣魚攻擊、身份冒用，甚至滲透其他網站，因為許多使用者習慣使用相同密碼。此事件對 Yahoo 名聲造成嚴重衝擊，也間接影響了其與 Verizon 的併購交易金額，最終收購價降低了 3.5 億美元。'
};
const tips = [
    "避免重複使用密碼：不同網站應使用不同密碼，防止一處外洩導致全面失守。",
    "使用密碼管理器：幫你安全記錄與產生強密碼。",
    "啟用雙重驗證（2FA）：即使密碼外洩，駭客仍難以登入帳號。",
    "定期檢查帳號是否外洩：可使用 Have I Been Pwned 查詢電子信箱是否遭洩漏。"
];

function About() {
    const title = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);

    // 只觀察 title
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setTitleVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        if (title.current) observer.observe(title.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={style.about} id="About">
            <div className={`${style.title} ${titleVisible ? style.show : style.Tophidden}`} ref={title}>
                事件介紹
            </div>
            <div className={style.container}>
                <div className={`${style.carousel} ${titleVisible ? style.show : style.Lefthidden}`}>
                    <Carousel item={images} />
                </div>
                <div className={`${style.information} ${titleVisible ? style.show : style.Righthidden}`}>
                    <div className={style.headline}>{Event.title}</div>
                    <div className={style.subtitle}>{Event.subtitle}</div>
                    <div className={style.content}>
                        {Event.content}
                    </div>
                    <div className={style.subtitle}>Tips：你可以學到什麼？</div>
                    <div className={style.tips}>
                        {tips.map((tip, index) => (
                            <div className={style.text} key={index}>{index + 1}{tip}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;