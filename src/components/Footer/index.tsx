import React, { FC } from "react";
import { useHistory, Link } from "react-router-dom";
import s from "./footer.module.scss";
import { footerItems, networks } from "./../../assets/constants/footer";
import logo from '../../assets/images/logo.png'

export const Footer: FC = () => {
  const handleScrollTop=()=>{
      window.scrollTo(0,0)
  }
  const history = useHistory();
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.networks}>
          <div onClick={() => history.push("/")}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.networks__items}>
            {networks.map((v) => (
              <a
                className={s.networks__item}
                target="_blank"
                href={v.path}
                key={v.id + v.path}
              >
                <img src={v.logo} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className={s.items}>
          <div className={s.left}>
            {footerItems.map((v) => (
              <Link to={v.path} key={v.id + v.path}>
                {v.text}
              </Link>
            ))}
          </div>
          <div className={s.right} onClick={handleScrollTop}>
            <span>В начало</span>
            <div className={s.circle}>
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
        </div>
        <div className={s.bottom}>
          <div className={s.copyright}>© 2021 coursator.online</div>
          <div className={s.links}>
            <Link to="/politicy">Политика конфиденциальности</Link>
            <Link to="/kontrakt">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
