import React, { FC, useEffect, useRef, useState } from "react";
import s from "./navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { Link, useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Drawer } from "./../Drawer/index";
import { DropDown } from "../Dropdown";
import { navbarItems } from "./../../assets/constants/navbar";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

interface NavbarProps {
  drop: boolean;
  close: () => void;
  open: () => void;
}

export const Navbar: FC<NavbarProps> = ({
  drop,
  close: handleDragClose,
  open: handleDragOpen,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const f = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (f && f.current) {
      f.current.addEventListener("mouseenter", handleDragOpen);
      f.current.addEventListener("mouseleave", handleDragClose);
      return () => {
        f.current?.removeEventListener("mouseenter", handleDragOpen);
        f.current?.removeEventListener("mouseleave", handleDragClose);
      };
    }
  }, []);

  const { pathname } = useLocation();
  const history = useHistory();
  const handleClose = (): void => setOpen(false);
  const handleOpen = (): void => setOpen(true);
  return (
    <div className={s.navbar}>
      <div className="container">
        <div className={s.inner}>
          <div onClick={() => history.push("/")} className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.left}>
            <div ref={f} className={s.all_kurs}>
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
              <DropDown open={drop} close={handleDragClose} />
            </div>
            <div className={s.items}>
              {navbarItems.map((v) => (
                <Link
                  className={classNames(
                    s.item,
                    pathname === v.path ? s.active : null
                  )}
                  to={v.path}
                  key={v.id + v.path}
                >
                  {v.link}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.menu}>
              <IconButton size="medium" onClick={handleOpen} color="primary">
                <MenuIcon />
              </IconButton>
          </div>
        </div>
      </div>
      <Drawer open={open} onclose={handleClose} />
    </div>
  );
};
