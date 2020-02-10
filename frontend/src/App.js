import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import axios from "axios";
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import SingleChild from "./Components/SingleChild";
import ChildCard from './Components/ChildCard';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import * as Yup from "yup";

function App() {
  const [data, setData] = useState([]);
  const mapArray = [{
    name: "Daniel",
    image: "image.jpeg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "12/2020",
    status: "Visitor"
}, {
    name: "Daniel",
    image: "image.jpeg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "12/2020",
    status: "Visitor"
}, {
    name: "Daniel",
    image: "image.jpeg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "12/2020",
    status: "Visitor"
}]

  return (
    <div className="App">

    <Router>
         <NavBar />
         {/* <SingleChild />
         {mapArray.map(e => (
           <div>
           <ChildCard 
            card={e}/>
            </div>
         ))} */}
          <Switch>
             <Route path='/login' component={Login} />
                <Route path='/register' component={Register}/>>
                <PrivateRoute path='/protected/home' component={Home} />
                <Route component={Login}/>
            </Switch>

         <Footer />
         
    </Router>
       
       
    </div>

  );
}

export default App;
