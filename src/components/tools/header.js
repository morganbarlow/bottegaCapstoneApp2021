import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Logo from "../../../static/assets/logo.png"

export default function header() {
    return (
            <div className='header-container'>
                <div className = "logo">
                    <img src = {Logo}/>
                    <h1 className="title">
                        Pure Beauty by A
                    </h1>
                </div>
            </div>
    )
}