import React, {useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = props => {
  const initialState = {
    credentials: {
      email: "",
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
    axios
      .post("https://intl-school-social-worker.herokuapp.com/api/auth/login", loginInfo.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push("/protected/home");
        console.log(loginInfo.credentials)
      })
      .catch(err => console.log(err));
  };

  return (
      <div className="login-container">
        <div className="form">
            <form onSubmit={handleLogin}>
                <label for="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={loginInfo.credentials.email}
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
