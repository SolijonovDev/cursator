import React from "react";
import { FC } from "react";
import s from "./home.module.scss";
import classNames from "classnames";
import { Header } from "./Header";

export const HomePage: FC = () => {
  return (
    <div className={classNames(s.home)}>
        <Header />
    </div>
  );
};
