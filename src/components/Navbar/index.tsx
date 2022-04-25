import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import s from "./navbar.module.scss";
import { navbarItems } from "./../../assets/constants/navbar";
import { Link, useHistory, useLocation } from "react-router-dom";
import  classNames  from 'classnames';
import { Drawer } from './../Drawer/index';
import { DropDown } from "../Dropdown";

interface NavbarProps{
  drop:boolean;
  changeDrop:()=>void;
}

export const Navbar: FC<NavbarProps> = ({drop,changeDrop}) => {
  
  const [open,setOpen]=useState<boolean>(false);
  console.log('render',drop);

  const f=useRef<HTMLDivElement>(null);
 
 
  useEffect(()=>{
    if (f && f.current) {
      f.current.addEventListener("pointerenter",changeDrop)
      f.current.addEventListener("pointerleave",changeDrop)
      return () => {
        f.current?.removeEventListener("pointerenter",changeDrop)
        f.current?.removeEventListener("pointerleave",changeDrop)
      }
    }
  },[])

  const {pathname} =useLocation();
  const history = useHistory();
  const handleClose=():void=>setOpen(false)
  const handleOpen=():void=>setOpen(true)
  return (
    <div className={s.navbar}>
      <div className="container">
        <div className={s.inner}>
          <div onClick={() => history.push("/")} className={s.logo}>
            <h3>Cursator</h3>
          </div>
          <div className={s.left}>
            <div ref={f} className={s.all_kurs}>
              <span>Все курсы</span>
              <svg
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.94 0L4 3.05333L7.06 0L8 0.94L4 4.94L0 0.94L0.94 0Z"
                  fill="black"
                />
              </svg>
              <DropDown open={drop} close={changeDrop}/>
            </div>
            <div className={s.items}>
              {navbarItems.map((v) => (
                <Link className={classNames(s.item,pathname===v.path?s.active:null)} to={v.path} key={v.id + v.path}>
                  {v.link}
                </Link>
              ))}
            </div>
          </div>
          <div className={s.menu}>
           <div className={s.menu_inner} onClick={handleOpen}>
           <span></span>
           <span></span>
           <span></span>
           </div>
          </div>
        </div>
      </div>
      <Drawer open={open} onclose={handleClose}/>
    </div>
  );
};
