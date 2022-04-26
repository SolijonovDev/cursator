import s from "./home.module.scss";
import { FC } from "react";

export const Subscribe: FC = () => {
  return (
    <div className={s.subs}>
      <div className={s.inner}>
        <div className={s.subs_abs}>
          <div className={s.subs_left}>
            <p className={s.subs_title}>Получайте все новости</p>
            <h2 className={s.subs_text}>Подпишитесь на email рассылку</h2>
            <div className={s.subs_email}>
              <input type="text" placeholder="Ваш email" />
              <button>Подписаться</button>
            </div>
          </div>
        </div>
        <div className={s.subs_clippath}></div>
      </div>
    </div>
  );
};
