import { FC, useRef } from "react";
import s from "./dropdown.module.scss";
import classNames from "classnames";
import { categories } from "../../assets/constants/navbar";
import { Link } from "react-router-dom";

interface DropDownProps {
  open: boolean;
  close: () => void;
}

export const DropDown: FC<DropDownProps> = ({ open, close }) => {
  const f = useRef<HTMLDivElement>(null);
  return (
    <div className={classNames(s.dropdown, open ? s.active : s.hide)}>
      <div className={s.inner}>
        <div className={s.first} ref={f}>
          {categories.map((v) => (
            <Link onClick={close} to={v.path} custom-attribute={v.id} key={v.id}>
              {v.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
