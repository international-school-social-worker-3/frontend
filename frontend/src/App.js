import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Nav from './components/Nav';
import Home from './components/Home';

function App() {



  return (
    <Router>
      <div className="App">

        
        <Nav />

        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register}/>>
          <PrivateRoute path='/protected/home' component={Home} />
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
