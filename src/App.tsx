import React, { useState } from "react";

import "./App.scss";
import { Route, Switch } from "react-router-dom";
import { routers } from "./routers";
import { NotFound } from './pages/NotFound/index';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [dropdown,setDropDown]=useState<boolean>(false)
  const handleCloseDropDown=()=>setDropDown(false)
  const handleOpenDropDown=()=>setDropDown(true)
  
  return (
    <div className="app">
      <Navbar drop={dropdown} open={handleOpenDropDown} close={handleCloseDropDown}/>
      <Switch>
        {
          routers.map(v=>(
            <Route  key={v.id} path={v.path} exact={v.exact} component={v.com}/>
          ))
        }
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
