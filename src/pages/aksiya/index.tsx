import { FC } from 'react';

import s from './aksiya.module.scss'
import { Bread } from './Bread';
import { Header } from './Header';
import { Main } from './Main';

export const AksiyaPage:FC=()=>{
    return (
        <div className={s.aksiya}>
            <Bread/>
            <Header/>
            <Main/>
        </div>
    )
}