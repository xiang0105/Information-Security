import style from '../Css/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons';
// import img from '../assets/react.svg';
import { useState } from 'react';
import  img  from "../assets/log.png";

function Navbar() {
  const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className={style.icon}><span><FontAwesomeIcon icon={faHome} title="Home" /></span></div>
            <div className={style.mobile}>
                <div className={`${style.mobileIcon} ${style.icontop} `}><img src={img} alt="" /></div>
                <div className={style.mobileIcon} onClick={() => {setOpen(open === true ? false : true)}}><FontAwesomeIcon icon={faList} title='list'></FontAwesomeIcon></div>
            </div>
            <div className={`${style.content} ${open === true ? style.show : style.mobileMenuHidden}`}>
                <a href="#Home" onClick={() => setOpen(false)}>回首頁</a>
                <a href="#About" onClick={() => setOpen(false)}>事件介紹</a>
                <a href="#Video" onClick={() => setOpen(false)}>影片欣賞</a>
                <a href="#Question" onClick={() => setOpen(false)}>知識分享</a>
                <a href="#Game" onClick={() => setOpen(false)}>趣味遊戲</a>
                <a href="#Source" onClick={() => setOpen(false)}>資料來源</a>
            </div>
            <div className={style.icon}><span><FontAwesomeIcon icon={faYoutube} title="YouTube"/></span></div>
        </nav>
    )
}

export default Navbar