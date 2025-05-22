import { useState , useEffect , useRef } from 'react';
import style from '../Css/game.module.css';


const questionList = [
  {
    question: "哪一種是安全的密碼？",
    options: [
      { label: "A. 123456", value: "A" },
      { label: "B. iloveyou", value: "B" },
      { label: "C. Ab@7pQ3$", value: "C" },
      { label: "D. john2000", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    question: "以下哪一個可以阻擋駭客入侵？",
    options: [
      { label: "A. 使用強密碼", value: "A" },
      { label: "B. 不使用防火牆", value: "B" },
      { label: "C. 隨意點擊不明連結", value: "C" },
      { label: "D. 不更新系統", value: "D" },
    ],
    correctAnswer: "A",
  },
  {
    question: "以下哪一個是釣魚網站的特徵？",
    options: [
      { label: "A. 網址正確", value: "A" },
      { label: "B. 網頁設計精美", value: "B" },
      { label: "C. 有明顯的錯字", value: "C" },
      { label: "D. 有聯絡資訊", value: "D" },
    ],
    correctAnswer: "C",
  },
  {
    question: "以下哪一個是社交工程攻擊的手法？",
    options: [
      { label: "A. 網路釣魚", value: "A" },
      { label: "B. 密碼破解", value: "B" },
      { label: "C. 惡意軟體", value: "C" },
      { label: "D. 防火牆", value: "D" },
    ],
    correctAnswer: "A",
  },
];

function getRandomIndex(length: number, exclude?: number) {
  let idx = Math.floor(Math.random() * length);
  // 避免連續同一題
  if (exclude !== undefined && length > 1) {
    while (idx === exclude) {
      idx = Math.floor(Math.random() * length);
    }
  }
  return idx;
}

function Game() {
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(() => getRandomIndex(questionList.length));

  const currentQuestion = questionList[currentIndex];

  const handleSelect = (option: string) => {
    setSelected(option);
    setAnswered(true);
  };

  const handleNext = () => {
    setAnswered(false);
    setSelected(null);
    setCurrentIndex(getRandomIndex(questionList.length, currentIndex));
  };

  
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);
  
  useEffect(() => {
          const observer = new IntersectionObserver(
          ([entry]) => setTitleVisible(entry.isIntersecting),
          { threshold: 0.2 }
          );
          if (titleRef.current) observer.observe(titleRef.current);
          return () => observer.disconnect();
      }, []);

  return (
    <section className={style.game} id='Game'>
      <div className={style.blurBg}></div>
      <div className={`${style.title} ${titleVisible ? style.showItem : style.hidden}`} ref={titleRef}>趣味遊戲</div>
      <div className={style.container}>
        <div>
          <div className={`${style.question} ${style.border}`}>{currentQuestion.question}</div>
          {!answered && (
            <div className={`${style.choise} ${style.border}`}>
              {currentQuestion.options.map(opt => (
                <div key={opt.value} onClick={() => handleSelect(opt.value)}>{opt.label}</div>
              ))}
            </div>
          )}
          {answered && (
            <div className={`${style.explain} ${style.border}`}>
              <div>
                {selected === currentQuestion.correctAnswer ? "恭喜你答對了" : "雖然錯了但是再接再厲就好!"}
              </div>
              <div className={style.explainTitle}>
                正確答案是 {currentQuestion.options.find(o => o.value === currentQuestion.correctAnswer)?.label}
              </div>
              {/* 這裡可根據題目加上不同解釋 */}
              <div className={style.next} onClick={handleNext}>Next</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Game;
