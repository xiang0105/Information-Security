import style from '../Css/about.module.css';
import Carousel from '../Element/Carouesl.tsx';
import {useRef , useEffect , useState} from 'react';

import img1 from '../assets/002.png';
import img2 from '../assets/003.png';
import img3 from '../assets/004.png';

const images = [img1, img2, img3];

function About(){
    // 各自的 ref 和狀態
    const titleRef = useRef(null);
    const contentBodyRef = useRef(null);
    const contentRef = useRef(null);

    const [titleVisible, setTitleVisible] = useState(false);
    const [bodyVisible, setBodyVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    // 觀察 title
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => setTitleVisible(entry.isIntersecting),
        { threshold: 0.5 }
        );
        if (titleRef.current) observer.observe(titleRef.current);
        return () => observer.disconnect();
    }, []);

    // 觀察 contentBody
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => setBodyVisible(entry.isIntersecting),
        { threshold: 0 }
        );
        if (contentBodyRef.current) observer.observe(contentBodyRef.current);
        return () => observer.disconnect();
    }, []);

    // 觀察 content
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => setContentVisible(entry.isIntersecting),
        { threshold: 0 }
        );
        if (contentRef.current) observer.observe(contentRef.current);
        return () => observer.disconnect();
    }, []);

    return(
        <div className={style.container} id="About">
           <div className={`${style.title} ${titleVisible ? style.show : style.Tophidden}`} ref={titleRef}>事件介紹</div>
           <div className={`${style.contentBody} ${bodyVisible ? style.show : style.Lefthidden}`} ref={contentBodyRef}>
                    <Carousel item={images} />
                <div className={`${style.content} ${contentVisible ? style.show : style.Righthidden} `} ref={contentRef}>
                    <div className={style.contentTitle}>Yahoo 資料外洩事件（2013–2014）</div>
                    <div className={style.contentSubtitle}>史上最大規模帳密外洩事件，影響超過30億帳號</div>
                    <div className={style.contentText}>
                        在 2013 年至 2014 年間，Yahoo 遭駭客入侵，最初披露時聲稱僅有 10 億筆帳號受影響，然而在 2017 年重新調查後，Yahoo 證實共有 超過 30 億個使用者帳號 資料外洩，成為歷史上最大規模的帳密外洩事件之一。外洩資訊包括姓名、電子郵件、電話號碼、生日、密碼（加密）、甚至部分安全問題與答案。這些資訊可能被用於釣魚攻擊、身份冒用，甚至滲透其他網站，因為許多使用者習慣使用相同密碼。此事件對 Yahoo 名聲造成嚴重衝擊，也間接影響了其與 Verizon 的併購交易金額，最終收購價降低了 3.5 億美元。
                    </div>
                    <div className={style.tipsTitle}>Tips：你可以學到什麼？</div>
                    <div className={style.tipsText}>
                        <div>避免重複使用密碼：不同網站應使用不同密碼，防止一處外洩導致全面失守。</div>
                        <div>使用密碼管理器：幫你安全記錄與產生強密碼。</div>
                        <div>啟用雙重驗證（2FA）：即使密碼外洩，駭客仍難以登入帳號。</div>
                        <div>定期檢查帳號是否外洩：可使用 Have I Been Pwned 查詢電子信箱是否遭洩漏。</div>
                    </div>
                </div>
           </div>
        </div>
    )
}


export default About