import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        


        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>
          {/* <PrivateRoute path='/protected/home' component={Home} /> */}
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
