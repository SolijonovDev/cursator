import React, {FC} from 'react'
import s from './notfound.module.scss'

export const NotFound:FC=()=>{
    return (
        <div className={s.notfound}>
            <h1>Not found</h1>
        </div>
    )
}