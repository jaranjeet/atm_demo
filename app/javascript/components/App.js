import React from 'react';

import Login from './Login';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default function App() {

  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
