import { FC } from 'react';

import s from './aksiya.module.scss'
import { Header } from './Header';
import { Main } from './Main';
import { breadModel } from './../../model/Bread';
import { Bread } from './../../components/Bread/index';

const bread:breadModel[]=[
    {
        id:1,
        path:"/",
        text:"Главная",
    },
    {
        id:2,
        text:"Акции онлайн школ"
    }
]

export const AksiyaPage:FC=()=>{
    return (
        <div className={s.aksiya}>
            <Bread items={bread}/>
            <Header/>
            <Main/>
        </div>
    )
}