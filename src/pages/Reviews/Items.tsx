import { FC } from "react";
import s from "./reviews.module.scss";
import { skillboxs } from "./../../assets/constants/reviews";
import { Link } from 'react-router-dom';
import { routerNames } from "../../routers";

export const Items: FC = () => {
  return (
    <div className="container">
      <div className={s.items}>
        {skillboxs.map((v) => (
          <div key={v.id+v.name} className={s.items_item}>
            <div
              className={s.items_item__top}
              style={{ backgroundImage: `url(${v.logo})` }}
            ></div>
            <div className={s.items_item__main}>
              <div className={s.items_item__main_top}>
                <div>
                  <h4>{v.name}</h4>
                  <span>{v.kurss} курсов</span>
                </div>
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
                  <span>{v.rating}</span>
                  <span>({v.rating_count})</span>
                </div>
              </div>
              <p className={s.items_item__main_bottom}>{v.title}</p>
            </div>
            <Link to={routerNames.reviews+"/:"+v.id} className={s.items_item__bottom}>{v.count} ОТЗЫВОВ</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
