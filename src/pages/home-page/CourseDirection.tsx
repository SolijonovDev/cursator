import { FC } from 'react';
import s from './home.module.scss'
import { courseDirections } from './../../assets/constants/home';
import { CourseItem } from './CourseItem';
import  classNames  from 'classnames';

export const CourseDirection:FC=()=>{
    return (
        <div className={s.course_direction}>
           <div className={classNames(s.inner,'container')}>
                   <h3 className={s.title}>Направления курсов</h3>
                   <div className={s.items}>
                 {
                     courseDirections.map(v=>(
                         <CourseItem key={v.id+v.path} item={v}/>
                     ))
                 }
               </div>
           </div>
        </div>
    )
}