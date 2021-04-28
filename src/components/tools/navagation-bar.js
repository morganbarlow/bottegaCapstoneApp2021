import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";

import About from "../pages/about";
import Home from '../pages/home';
import Pricing from '../pages/pricing';
import Scheduling from '../pages/scheduling';



export default function navBar() {
    return (
        <BrowserRouter>
            <div className = "nav-bar-container">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/pricing">Pricing</Link>
                <Link to ="/scheduling">Scheduling</Link>
            </div>

            <Switch>
                <Route exact path= "/" component = {Home}/>

                <Route path= "/about" component = {About}/>

                <Route path= "/pricing" component = {Pricing}/>

                <Route path= "/scheduling" component = {Scheduling}/>
        
            </Switch>
        </BrowserRouter>
    )
}