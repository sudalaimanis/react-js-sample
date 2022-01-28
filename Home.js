import React from 'react';
import "./App.css";

class Home extends React.Component {
    render() {
        return <h1 > This is Home Page < /h1>
    }
}

React.render( < Home / > , document.getElementById('root'));

export default Home;