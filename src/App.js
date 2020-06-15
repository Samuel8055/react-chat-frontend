import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact component={Join} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
