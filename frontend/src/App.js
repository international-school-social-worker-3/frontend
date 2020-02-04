import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Onboarding from './components/Onboarding'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/protected/onboarding' component={Onboarding}/>
          {/* <PrivateRoute path='/protected/home' component={Home} /> */}
          {/* <PrivateRoute path='/protected/onboarding' component={Onboarding} /> */}
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
