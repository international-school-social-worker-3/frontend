import React, {useState} from "react";
import axios from "axios";

const Register = props => {
  const initialState = {
    credentials:{
        first_name: "",
        last_name: "",
        email:"",
        password: "",
        type:"admin"
    }
  }

  const [regInfo, setRegInfo] = useState(initialState)

  const handleChange = e => {
    setRegInfo({
              credentials: {
                ...regInfo.credentials,
                [e.target.name]: e.target.value  
              }  
            }  
    );
  };

  const handleRegister = e => {
    e.preventDefault();
    axios
      .post("https://intl-school-social-worker.herokuapp.com/api/auth/register", regInfo.credentials)
      .then(res => {
        console.log(res);
        props.history.push(`/protected/home`);
        localStorage.setItem("token", res.data.token);
        console.log(regInfo.credentials)
      })
      .catch(err => console.log(regInfo.credentials));
  };

  return (
      <div className="register-container">
        <div className="form">
            <form onSubmit={handleRegister}>
                <label for="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={regInfo.credentials.email}
                    onChange={handleChange}
                />
                <label for="first_name">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={regInfo.credentials.first_name}
                    onChange={handleChange}
                />
                <label for="last_name">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={regInfo.credentials.last_name}
                    onChange={handleChange}
                />
                <label for="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={regInfo.credentials.password}
                    onChange={handleChange}
                />
                <button>Register</button>
            </form>
        </div>
      </div>
    );
  }

export default Register;
