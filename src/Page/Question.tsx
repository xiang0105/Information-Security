import style from '../Css/question.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState} from 'react';
import React from 'react';


const questionList = [
  {
    question: 'DoS 和 DDoS 攻擊',
    answer: `
    - 建立流量分析與偵測機制，運用 AI/機器學習即時分析異常流量。
    - 部署多層防禦架構，如 WAF 和 IDS 系統。
    - 使用專業 DDoS 防禦服務（如 Cloudflare、Akamai 等）。
    - 採用分散式架構與負載均衡（如 CDN）降低風險。
    - 制定並演練緊急應變計畫以快速回應攻擊。
    `.trim(),
  },
  {
    question: '網路釣魚攻擊',
    answer: `
    - 使用郵件與瀏覽器的反釣魚功能與安全警示。
    - 為重要帳戶啟用多重因素驗證。
    - 不點擊可疑連結或回覆垃圾郵件。
    - 使用可信的網址檢查平台確認連結安全。
    - 定期對員工進行釣魚攻擊識別與防護訓練。
    `.trim(),
  },
  {
    question: '勒索軟體',
    answer: `
    - 使用強密碼與啟用雙重認證（2FA）。
    - 定期更新系統與應用程式修補漏洞。
    - 定期備份重要資料並將備份裝置與主系統隔離。
    - 啟用防火牆並最小化網路埠開放。
    - 部署 EDR/MDR 系統偵測勒索軟體行為。
    - 控制外接裝置與禁用不必要的 Office 巨集。
    `.trim(),
  },
  {
    question: 'SQL 注入攻擊',
    answer: `
    - 使用參數化查詢，避免動態拼接 SQL 指令。
    - 驗證輸入並使用白名單過濾。
    - 過濾輸入中可能隱含的 SQL 指令（如 SELECT、INSERT）。
    `.trim(),
  },
  {
    question: '惡意軟體攻擊',
    answer: `
    - 定期更新作業系統與應用程式修補漏洞。
    - 使用沙箱觀察可疑程式行為並加以隔離。
    - 採用多層次防禦架構結合多種安全技術（防火牆、EDR、IPS 等）。
    - 發現感染設備時立即隔離處理。
    - 控制使用者與程式權限，遵守最小授權原則。
    `.trim(),
  },
  {
    question: '撞庫憑證填充攻擊',
    answer: `
    - 使用複雜密碼（包含大小寫與數字）且無邏輯性。
    - 定期更新密碼，即使外洩也不易遭利用。
    - 若供應商有新版服務，應及時升級。
    - 在登入頁面加入 CAPTCHA 阻擋自動化登入攻擊。
    `.trim(),
  },
];

const protectList = [
  {
    question: '不把密碼或重要資訊存在文字檔',
    answer: '避免被木馬或勒索軟體盜取敏感資訊，並防止其他使用者輕易取得資料。',
  },
  {
    question: '定期系統更新，進行漏洞填補',
    answer: '當系統或軟體發布修補程式時，使用者應主動安裝，以降低設備被攻擊的風險。',
  },
  {
    question: '不點擊未經驗證的連結',
    answer: '懷疑不明連結可能是釣魚攻擊，可使用威脅情資平台檢查連結安全性。',
  },
  {
    question: '使用高強度密碼並啟用多重身份驗證（MFA）',
    answer: '提升帳號安全性，避免帳密被暴力破解或遭社交工程入侵。',
  },
  {
    question: '授予執行檔權限前先驗證來源',
    answer: '確認執行檔來源與開發者資訊，避免執行惡意軟體。',
  },
  {
    question: '企業應進行資安教育訓練',
    answer: '定期培訓員工，有效提升資安意識，降低社交工程攻擊風險。',
  },
  {
    question: '強化密碼管理原則',
    answer: '密碼應具備足夠長度、包含多種字元，並使用密碼管理工具妥善儲存。',
  },
  {
    question: '了解多重驗證方式',
    answer: '多重驗證可分為：知道的資訊（如密碼）、擁有的物品（如手機）、以及個人特徵（如指紋）。',
  },
  {
    question: '定期進行系統資料備份',
    answer: '遵守3-2-1備份原則：3份資料、2種不同媒介、1份異地離線備份，降低勒索軟體風險。',
  },
];


function Question() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const [ansIndex , setAnsIndex ] = useState<number | null>(null);

  return (
    <section className={style.question} id='Question'>
        <div className={`${style.title}`}>常見資安攻擊與對應方法</div>
        <div className={style.container}>
            {questionList.map((item, index) => (
              <React.Fragment key={index}>
                <div className={style.questionList} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <div className={style.item}>{item.question}</div>
                  <div className={style.btn} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <div className={`${style.answer} ${openIndex === index ? style.show : ''}`}>
                  {item.answer.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </React.Fragment>
            ))}
        </div><div className={`${style.title}`}>資訊安全基本守則</div>
        <div className={style.container}>
            {protectList.map((item, ansindex) => (
              <React.Fragment key={ansindex}>
                <div className={style.questionList} onClick={() => setAnsIndex(ansIndex === ansindex ? null : ansindex)}>
                  <div className={style.item}>{item.question}</div>
                  <div className={style.btn} onClick={() => setAnsIndex(ansIndex === ansindex ? null : ansindex)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <div className={`${style.answer} ${ansIndex === ansindex ? style.show : ''}`}>
                  {item.answer}
                </div>
              </React.Fragment>
            ))}
        </div>
    </section>
  );
}

export default Question;