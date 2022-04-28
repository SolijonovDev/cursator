import s from './skillrevi.module.scss'
import { breadModel } from './../../model/Bread';
import { Bread } from '../../components/Bread';
import { Header } from './Header';
import { Items } from './Items';
import { Forms } from './Forms';
import { useEffect } from 'react';

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

export const SkillboxReviews=()=>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    
    return (
        <div className={s.skill}>
            <Bread items={bread}/>
            <Header/>
            <Items/>
            <Forms/>
        </div>
    )
}