import React from 'react';

import "./App.css";

class About extends React.Component {
    render() {
        return <h1 > This is About Page < /h1>
    }
}

React.render( < About / > , document.getElementById('root'));
export default About;