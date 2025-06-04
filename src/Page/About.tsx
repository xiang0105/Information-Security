import style from '../Css/about.module.css';
import Carousel from '../Element/Carousel.tsx';
import { useRef, useEffect, useState } from 'react';

import img1 from '../assets/002.png';
import img2 from '../assets/003.png';
import img3 from '../assets/004.png';

const images = [img1, img2, img3];

const EventList = [
  {
    title: '小祥的夢魘：一場釣魚網站的陷阱',
    content: `小祥是一位熱愛玩遊戲的高中生，尤其喜歡在課餘時間沉浸在Steam上的各種遊戲世界中。某天下午，他正在瀏覽社群網站，突然看到一則貼文吸引了他的目光——「限時免費領取《XXX》Steam遊戲，只送今天！」下方還附了一個看起來非常正常的連結，以及幾張遊戲畫面截圖和留言區一堆「太讚了！真的領到了！」的回應。
                他心動了，心想：「這款遊戲之前還要錢，現在免費就太划算了！」於是他點進了連結，進入了一個看似與Steam官方幾乎一模一樣的登入頁面。沒有多想的小祥，輸入了自己的帳號和密碼，甚至還開啟了Steam行動驗證器來輸入認證碼。
                進入之後，他看到一個畫面寫著「領取成功，請稍候自動加入庫存」，但幾分鐘過去，他的Steam庫存卻沒有任何變化。他開始覺得奇怪，便打開真正的Steam應用程式，卻發現竟然登不進去了。
                他慌了，怎麼試都無法登入，甚至發現他的帳號已經被更改綁定的電子郵件。他這才驚覺——自己中了釣魚網站的陷阱。帳號被盜走、裡面好幾年累積的遊戲全數失去，小祥懊悔不已。`,

  },{
    title: '芭樂的勒索危機：金錢換不回的教訓',
    content: `芭樂是一位大學生，平時最常使用手機處理生活大小事，不論是聯絡同學、繳交作業，甚至是雲端備份照片與影片，幾乎都靠一支 Android 手機搞定。

某天，他在通勤途中收到一封標題為「包裹異常，請即刻查收」的簡訊。芭樂前陣子剛網購過幾樣東西，沒多想就點開了連結。進入的頁面要求他下載一個「包裹追蹤App」，他按了安裝、授權存取權限後，畫面一片黑……接著手機彈出一個畫面：

「你的手機已被鎖定，所有資料已加密。若想解鎖，請於72小時內支付500比特幣，否則你的個人資料將被公開並永久刪除。」

芭樂愣住了，手機完全無法操作，就連開機畫面都被攔截。他嘗試重開、進入安全模式，但都被病毒攔住。這時，他腦中閃過昨天剛拍完的一堆重要報告影片，還有多年來累積的照片與聊天紀錄，全部都在手機裡。`,

  },{
    title: '企鵝的一封通知信：揭開的盜用事件',
    content: `企鵝是一位喜歡分享日常生活的社群重度使用者，IG 上記錄了她的穿搭、旅遊、美食，還有許多與好友的點滴。某天下午，她正準備打開 YouTube 看影片放鬆一下，突然手機跳出一封 Email 通知：

「你的 Instagram 電子郵件地址已被變更，如果這不是你本人操作，請立即點擊此處還原變更。」

她瞬間愣住了，因為她根本沒有動過 IG 帳號的設定。驚慌之下，她立刻打開 Instagram App，卻發現自己已經登不進帳號了。所有熟悉的相片、限時動態、追蹤者全都不見，只剩下冰冷的「帳號不存在」畫面。

她試著透過「忘記密碼」功能找回帳號，但駭客已經更改了綁定的 Email 和電話號碼。這讓她意識到，自己的 IG 已被完全接管。

回想起幾天前，她曾經點過一個 IG 私訊連結，內容寫著「你被標記在這個影片裡」，她出於好奇點了進去並輸入過帳密。那時候看起來什麼事也沒發生，沒想到現在帳號竟然被盜了。

企鵝非常懊惱，因為那個帳號累積了多年心血。不僅如此，駭客還假冒她身分對朋友進行詐騙，讓她倍感羞愧。她後來透過 IG 客服申訴程序、驗證身份，經過幾天才艱難地拿回帳號。`,

  },
];


function About() {
    const title = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);

    const [showIndex, setShowIndex] = useState(0);

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
                    <Carousel item={images} showIndex={showIndex} setShowIndex={setShowIndex} />
                </div>
                <div className={`${style.information} ${titleVisible ? style.show : style.Righthidden}`}>
                    <div className={style.headline}>{EventList[showIndex].title}</div>
                    <div className={style.content}>{EventList[showIndex].content}</div>
                </div>
            </div>
        </section>
    );
}

export default About;