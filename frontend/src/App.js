import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Login from './Components/Login';
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
  console.log(data);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/login"
      )
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log("No data returned", error);
      });
  }, []);
  return (
    <div className="App">
     <NavBar />
     <Login />
     <SingleChild />
     {mapArray.map(e => (
       <div>
       <ChildCard 
        card={e}/>
        </div>
     ))}
     <Footer />
    </div>
  );
}

export default App;
