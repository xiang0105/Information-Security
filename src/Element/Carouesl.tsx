import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from '../Css/carousel.module.css';

type CarouselProps = {
  item: string[];
};

function Carousel({ item }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const len = item.length;

  const prevBtn = () => setCurrent((prev) => (prev - 1 + len) % len);
  const nextBtn = () => setCurrent((prev) => (prev + 1) % len);

  // 根據 current 決定每張圖的 class
  const getClass = (idx: number) => {
    if (idx === (current - 1 + len) % len) return style.prev;
    if (idx === current) return style.active;
    if (idx === (current + 1) % len) return style.next;
    return ""; // 其他圖片不顯示
  };

  return (
    <div className={style.carousel}>
      <div className={style.btn} onClick={prevBtn}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className={style.carouselBody}>
        {item.map((src, idx) => (
          <img
            key={idx}
            src={src}
            className={getClass(idx)}
            alt={`carousel-${idx}`}
            style={{ display: getClass(idx) ? "block" : "none" }}
          />
        ))}
      </div>
      <div className={style.btn} onClick={nextBtn}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

export default Carousel;