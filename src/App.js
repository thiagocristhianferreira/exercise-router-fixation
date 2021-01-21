import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Users">Users</Link>
        <Route path exact="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Users" component={Users}/>
      </BrowserRouter>
    );
  }
}

export default App;