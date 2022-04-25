import { FC } from "react";
import { topSchool } from "../../assets/constants/home";
import s from "./home.module.scss";

export const School: FC = () => {
  return (
    <div className={s.school}>
      <div className="container">
        <div className={s.inner}>
          <h2>Топ школ</h2>
          <div className={s.items}>
            {topSchool.map((v) => (
              <div className={s.item} key={v.id}>
                <img src={v.logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
