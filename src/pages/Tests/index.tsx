import React, { FC, useEffect } from "react";
import s from "./tests.module.scss";
import { SwiperCom } from "./Swiper";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export const Tests = () => {
  const [firstD, setFirstD] = React.useState(false);
  const [lastD, setLastD] = React.useState(false);
  useEffect(() => {
    setFirstD(true);
  }, []);

  const handleNextSlide = () => {
    const next: any = document.querySelector(".swiper-button-next");
    next.click();
    const elems = document.querySelectorAll(".swiper-slide");
    if (elems[elems.length - 1].classList.contains("swiper-slide-active")) {
      setLastD(true);
    }
    setFirstD(false);
  };

  const handlePrevSlide = () => {
    const prev: any = document.querySelector(".swiper-button-prev");
    prev.click();
    const elems = document.querySelectorAll(".swiper-slide");
    if (elems[0].classList.contains("swiper-slide-active")) {
      setFirstD(true);
    }
    setLastD(false);
  };

  return (
    <div className={s.tests}>
      <div className={s.head}>
        <div className={classNames("container", s.inner)}>
          <h2 className={s.head_text}>Онлайн-тест на выбор профессии/курса</h2>
          <Link to="#">Ответьте на все вопросы</Link>
        </div>
      </div>
      <div className={s.swiper}>
        <div className={s.swiper_texts}>
          <p>
            Пора найти курс мечты. Ответь на вопросы и узнайб какое направление
            подходит под твои способности и интересы
          </p>
          <div className={s.swiper_btns}>
            <button
              disabled={firstD}
              onClick={handlePrevSlide}
              className={classNames(
                s.swiper_btn,
                s.swiper_prev_btn,
                firstD ? s.disabled : ""
              )}
            >
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
            </button>
            <button
              onClick={handleNextSlide}
              className={classNames(
                s.swiper_btn,
                s.swiper_next_btn,
                lastD ? s.disabled : ""
              )}
            >
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
            </button>
          </div>
        </div>
        <div className={s.swiper_block}>
          <SwiperCom />
          <Button 
          disabled={lastD} 
          onClick={handleNextSlide} 
          variant="contained" 
          color="primary">
            далее
          </Button>
        </div>
      </div>
    </div>
  );
};
