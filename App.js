import React from 'react';

import "./App.css";
import Shop from "./Shop";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {

    render() {
        return (

            <
            Router >
            <
            div className = "App" >

            <
            Nav / >

            <
            Routes >

            <
            Route path = "/"
            exact component = { Home }
            />

            <
            Route path = "/about"
            component = { About }
            />

            <
            Route path = "/shop"
            component = { Shop }
            />

            <
            /Routes> <
            /div> <
            /Router>

        );
    }
}

React.render( < App / > , document.getElementById('root'));
export default App;