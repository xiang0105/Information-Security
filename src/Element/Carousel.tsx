import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from '../Css/carousel.module.css';



type CarouselProps = {
  item: string[];
  showIndex: number;
  setShowIndex: (idx: number) => void;
};

function Carousel({ item, showIndex, setShowIndex }: CarouselProps) {
  const len = item.length;

  const prevBtn = () => setShowIndex((showIndex - 1 + len) % len);
  const nextBtn = () => setShowIndex((showIndex + 1) % len);

  const getClass = (idx: number) => {
    if (idx === (showIndex - 1 + len) % len) return style.prev;
    if (idx === showIndex) return style.active;
    if (idx === (showIndex + 1) % len) return style.next;
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
              key={src} // 若 src 唯一，否則用 key={idx}
              src={src}
              className={className}
              onClick={() => {
                if (className === style.prev) prevBtn();
                else if (className === style.next) nextBtn();
                setShowIndex(idx);
              }}
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