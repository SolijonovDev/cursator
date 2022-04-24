import React, { FC } from "react";
import s from "./navbar.module.scss";
import { navbarItems } from "./../../assets/constants/navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import  classNames  from 'classnames';

export const Navbar: FC = () => {
  const {pathname} =useLocation()
  const history = useHistory();
  return (
    <div className={s.navbar}>
      <div className="container">
        <div className={s.inner}>
          <div onClick={() => history.push("/")} className={s.logo}>
            <h3>Cursator</h3>
          </div>
          <div className={s.left}>
            <div className={s.all_kurs}>
              <span>Все курсы</span>
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
            <div className={s.items}>
              {navbarItems.map((v) => (
                <Link className={classNames(s.item,pathname===v.path?s.active:null)} to={v.path} key={v.id + v.path}>
                  {v.link}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.menu}>
           <div className={s.menu_inner}>
           <span></span>
           <span></span>
           <span></span>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
