import style from '../Css/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

function Navbar() {
    return (
        <nav>
            <div className={style.icon}><span><FontAwesomeIcon icon={faHome} title="Home" /></span></div>
            <div className={style.content}>
                <a href="#Home">回首頁</a>
                <a href="#About">事件介紹</a>
                <a href="#Video">影片欣賞</a>
                <a href="#Question">知識分享</a>
                <a href="#Game">趣味遊戲</a>
            </div>
            <div className={style.icon}><span><FontAwesomeIcon icon={faYoutube} title="YouTube"/></span></div>
        </nav>
    )
}

export default Navbar