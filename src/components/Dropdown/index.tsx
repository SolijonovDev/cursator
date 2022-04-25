import { FC } from "react";
import s from "./dropdown.module.scss";
import  classNames  from "classnames";

interface DropDownProps {
  open: boolean;
  close: () => void;
}

export const DropDown: FC<DropDownProps> = ({ open, close }) => {
  return (
    <div className={classNames(s.dropdown, open ? s.active : s.hide)}>
      DropDown
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum.</p>
      <p>Lorem, ipsum.</p>
    </div>
  );
};
