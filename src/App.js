import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Users">Users</Link>
            <Link to="/StrictAccess">Strict Access</Link>
          <Switch>
            <Route path exact="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Users/:id" render={(props) => <Users {...props}greetingMessage={'Good Morning'}/>} />
            <Route path='/StrictAccess' render={(props) => <StrictAccess {...props} userName={"joão"} password={"1234"} />} />
            <Route path="/Users" component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;