import { FC } from "react";

import s from "./aksiya.module.scss";
import { Link } from "react-router-dom";

export const Main: FC = () => {
  return (
    <div className={s.aksiya_main}>
      <div className={s.aksiya_main__left}>
        <h4>Skillbox</h4>
        <p>Акция действует c 01 по 08 апреля</p>
        <div className={s.aksiya_main__left__bottom}>
          <p>Скидки 50% на курсы</p>
          <button>Распродажа от Skillbox. </button>
        </div>
      </div>
      <div className={s.aksiya_main__right}></div>
      <div className={s.aksiya_main__link}>
        <Link to="#">
          <span>Акция на skillbox.ru</span>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.94 0L4 3.05333L7.06 0L8 0.94L4 4.94L0 0.94L0.94 0Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
