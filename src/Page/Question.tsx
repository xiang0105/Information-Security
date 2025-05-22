import style from '../Css/question.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState , useRef , useEffect } from 'react';


const questionList = [
  {
    question: 'Yahoo 資料外洩事件中，總共多少帳號受到影響？',
    answer: '超過 30 億個帳號，是歷史上最大規模的帳密外洩事件之一。',
  },
  {
    question: '什麼是密碼重用？為何危險？',
    answer: '密碼重用是指在多個網站使用相同密碼，若其中一個網站被駭，其他帳號也會跟著失守。',
  },
  {
    question: '什麼是雙重驗證（2FA）？',
    answer: '雙重驗證是一種安全機制，登入除了密碼外，還需要一次性驗證碼或生物辨識。',
  },
  {
    question: 'RockYou2024 是什麼事件？',
    answer: 'RockYou2024 是一次大規模密碼外洩事件，駭客公布了將近 100 億組密碼。',
  },
  {
    question: '如何知道我的帳號是否被外洩？',
    answer: '你可以使用「Have I Been Pwned」網站查詢你的 email 是否曾出現在資料外洩事件中。',
  },
  {
    question: '如何知道我的帳號是否被外洩？',
    answer: '你可以使用「Have I Been Pwned」網站查詢你的 email 是否曾出現在資料外洩事件中。',
  },
];


function Question() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  
  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) setTitleVisible(true);
          },
          { threshold: 0.5 }
      );
      if (titleRef.current) observer.observe(titleRef.current);
      return () => observer.disconnect();
  }, []);

  return (
    <section className={style.question} id='Question'>
        <div className={`${style.title} ${titleVisible ? style.showItem : style.hidden}`} ref={titleRef}>知識分享</div>
        <div className={style.container}>
            {questionList.map((item, index) => (
                <>
                <div className={style.questionList}>
                    <div className={style.item} key={index}>{item.question}</div>
                    <div className={style.btn} onClick={() => setOpenIndex(openIndex === index ? null : index)}><FontAwesomeIcon icon={faPlus} /></div>
                    {/* 按下去後會展開 */}
                </div>
                <div className={`${style.answer} ${openIndex === index ? style.show : ''}`} key={index}>{item.answer}</div>
                </>
            ))}
        </div>
    </section>
  );
}

export default Question;