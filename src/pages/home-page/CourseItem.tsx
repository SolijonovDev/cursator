import { FC } from 'react';

import s from './home.module.scss'
import { useHistory } from 'react-router-dom';

interface CourseItemProps{
    item:{
        id:number;
        logo:any;
        text:string| undefined;
        title:string | undefined;
        path:string;
    };
}

export const CourseItem:FC<CourseItemProps>=({item})=>{
    const history=useHistory()
    return (
        <div className={s.item} onClick={()=>history.push(item.path)}>
            <div className={s.texts}>
                <div>
                    <span>{item.title}</span>
                </div>
                <h4>{item.text}</h4>
            </div>
            <div className={s.logo}>
                <img src={item.logo} alt="logo"/>
            </div>
        </div>
    )
}