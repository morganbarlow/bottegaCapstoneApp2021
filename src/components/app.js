import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"


import Header from "./tools/header"
import NavBar from "./tools/navagation-bar"


export default class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <NavBar/>
      </div>
    );
  }
}
