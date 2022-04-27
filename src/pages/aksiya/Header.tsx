
import s from './aksiya.module.scss'
import { FC } from 'react';


export const Header:FC=()=>{
    return (
        <div className="container">
           <div className={s.text}>
                <h2>Акции онлайн-школ</h2>
                <p>Онлайн-школы и образовательные платформы регулярно предлагают скидки для своих учеников и проводят распродажи курсов. Здесь представлены актуальные акции онлайн-школ, следите за обновлениями данного раздела.</p>
           </div>
        </div>
    )
}