import { FC, useEffect } from "react";
import s from "./drawer.module.scss";
import classNames from "classnames";
import logo from "../../assets/images/logo.png";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { navbarItems } from "./../../assets/constants/navbar";
import { Link } from "react-router-dom";

interface DrawerProps {
  open: boolean;
  onclose: () => void;
}

export const Drawer: FC<DrawerProps> = ({ open, onclose }) => {
  useEffect(() => {
    const handleClose = () => {
      if (window.innerWidth >= 850) {
        onclose();
      }
    };
    window.addEventListener("resize", handleClose);
    return () => {
      window.removeEventListener("resize", handleClose);
    };
  }, []);

  return (
    <div className={classNames(s.menu, open ? s.active : s.hide)}>
      <div className={s.inner}>
          <div className={s.header}>
            <img src={logo} alt="logo" />
            <Button onClick={onclose}>
              <CloseIcon />
            </Button>
          </div>
          <div className={s.items}>
            {navbarItems.map((v) => (
              <Link onClick={onclose} className={s.item} to={v.path} key={v.id + v.path}>
                {v.link}
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
};
