import s from "./skillrevi.module.scss";
import classNames from 'classnames';

export const Header = () => {
  return (
    <div className={classNames("container",s.head)}>
      <div className={s.head_text}>
        <h2>Отзывы Skillbox</h2>
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0002 12.6666L3.10186 15.6583L4.43353 10.0749L0.0751953 6.34159L5.79603 5.88325L8.0002 0.583252L10.2044 5.88325L15.926 6.34159L11.5669 10.0749L12.8985 15.6583L8.0002 12.6666Z"
              fill="#FFE381"
            />
          </svg>
          <span>4.9</span>
          <span>(122)</span>
        </div>
      </div>
      <div className={s.head_title}>
        <p>
          Одна из самых масштабных онлайн-школ, большой выбор образовательных
          программ. Преподаватели школы — профессионалы в своей области.
          Заинтересованы в получении актуальных знаний и трудоустройстве
          выпускников.
        </p>
        <span>6 ОТЗЫВОВ</span>
      </div>
      <a href="#" className={s.head_btn}>На сайт школы</a>
    </div>
  );
};
