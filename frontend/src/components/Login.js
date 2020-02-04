import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = props => {
  const initialState = {
    credentials: {
      username: "",
      password: ""
    }
  }
  const [loginInfo, setLoginInfo] = useState(initialState)

  const handleChange = e => {
    setLoginInfo({
            credentials: {
              ...loginInfo.credentials,
              [e.target.name]: e.target.value   
            }
    });
  };

  const handleLogin = e => {
    e.preventDefault();
    // make a POST requeset to the server
    // the server will authenticate the user based on their credentials
    // if they auth, the server will return a token
    axios
      .post("http://localhost:5000/api/login", loginInfo.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
      <div className="login-container">
        <div className="form">
            <form onSubmit={handleLogin}>
                <label for="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={loginInfo.credentials.username}
                    onChange={handleChange}
                />
                <label for="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={loginInfo.credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
        <div className="register-link">
            <Link to='/register'> Register </Link>
        </div>
      </div>
    );
  }

export default Login;
