import "./App.css";
import { Link } from "react-router-dom";
import React from "react";



class Nav extends React.Component {
    render() {
        const navStyle = {
            color: "white",
        };
        return ( <
            nav >
            <
            h3 > Logo < /h3> <
            ul className = "nav-links" >
            <
            Link style = { navStyle }
            to = "/" >
            <
            li > Home < /li> <
            /Link> <
            Link style = { navStyle }
            to = "/about" >
            <
            li > About < /li> <
            /Link> <
            Link style = { navStyle }
            to = "/shop" >
            <
            li > Shop < /li> <
            /Link> <
            /ul> <
            /nav>
        )
    }
}

React.render( < Nav / > , document.getElementById('root'));
export default Nav;