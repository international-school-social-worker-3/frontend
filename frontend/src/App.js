import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Login from './Components/Login';

function App() {
  const [data, setData] = useState([]);
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
     <Login />
    </div>
  );
}

export default App;
