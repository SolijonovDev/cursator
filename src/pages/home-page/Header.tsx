import React from "react";
import s from "./home.module.scss";
import { useHistory, Link } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  return (
    <div className={s.header}>
        <div className={s.text}>
          <h1 className={s.title}>Найди подходящий курс</h1>
          <p className={s.desc}>
            Мы — агрегатор-отзовик курсов. Выбирайте курсы по стоимости,
            длительности, дате начала и другим параметрам!
          </p>
          <div className={s.btn_block}>
            <button onClick={() => history.push("/test")}>ПРОЙТИ ТЕСТ</button>
            <p>
              Не уверены, какую <br /> <Link to="/vibor">профессию</Link>{" "}
              выбрать?
            </p>
          </div>
      </div>
    </div>
  );
};
