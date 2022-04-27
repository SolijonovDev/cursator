import React from "react";
import { FC } from "react";
import s from "./home.module.scss";
import classNames from "classnames";
import { Header } from "./Header";
import { CourseDirection } from './CourseDirection';
import { School } from './School';
import { Kurss } from "./Kurss";
import { Subscribe } from "./Subscribe";
import { Blog } from './Blog';

export const HomePage: FC = () => {
  return (
    <div className={classNames(s.home)}>
        <Header />
        <CourseDirection/>
        <School/>
        <Kurss/>
        <Subscribe/>
        <Blog/>
    </div>
  );
};
