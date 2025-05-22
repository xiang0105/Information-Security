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

  const getClass = (idx: number) => {
    if (idx === (current - 1 + len) % len) return style.prev;
    if (idx === current) return style.active;
    if (idx === (current + 1) % len) return style.next;
    return undefined;
  };

  return (
    <>
      <div className={style.btn}>
        <span onClick={prevBtn} aria-label="上一張"><FontAwesomeIcon icon={faArrowLeft} /></span>
      </div>
      <div className={style.carouselBody}>
        {item.map((src, idx) => {
          const className = getClass(idx);
          return (
            <img
              key={idx}
              src={src}
              className={className}
              onClick={
                className === style.prev
                  ? prevBtn
                  : className === style.next
                  ? nextBtn
                  : undefined
              }
              style={{ cursor: className === style.prev || className === style.next ? "pointer" : "default" }}
              alt={`carousel-${idx}`}
            />
          );
        })}
      </div>
      <div className={style.btn}>
        <span onClick={nextBtn} aria-label="下一張"><FontAwesomeIcon icon={faArrowRight} /></span>
      </div>
    </>
  );
}

export default Carousel;