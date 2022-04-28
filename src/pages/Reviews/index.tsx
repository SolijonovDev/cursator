import { FC } from "react";
import { Header } from './Header';
import { Items } from "./Items";
import { breadModel } from './../../model/Bread';
import { Bread } from "../../components/Bread";
import s from './reviews.module.scss'

const bread:breadModel[]=[
    {
        id:1,
        path:"/",
        text:"Главная",
    },
    {
        id:2,
        text:"Отзывы от онлайн школах"
    }
]

export const Reviews:FC=()=>{
    return (
        <div className={s.reviews}>
        <Bread items={bread}/>
        <Header/>
        <Items/>
    </div>
    )
}