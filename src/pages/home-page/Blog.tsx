import { FC } from "react";

import s from "./home.module.scss";
import classNames from "classnames";
import { blogs } from "../../assets/constants/home";
import { Link } from "react-router-dom";

export const Blog: FC = () => {
  return (
    <div className={s.blog}>
      <div className={classNames(s.blog_inner, "container")}>
        <div className={s.blog_header}>
          <h2>Блог</h2>
          <div>
            <span>Смотреть все</span>
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
          </div>
        </div>
        <div className={s.blog_items}>
          {blogs.map((v) => (
            <div key={v.id} className={s.blog_items__item}>
              <div className={s.blog_items__item_top}>
                  <img src={v.photo} alt="pho" />
              </div>
              <div className={s.blog_items__item_text}>
                <h4>{v.text}</h4>
                <p>{v.desc}</p>
                <Link to="#">
                  <span>Читать</span>
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
          ))}
        </div>
      </div>
    </div>
  );
};
