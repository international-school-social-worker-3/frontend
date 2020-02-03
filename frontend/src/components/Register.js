import React, {useState} from "react";
import axios from "axios";

const Register = props => {
  const initialState = {
    credentials: {
        username:"",
        firstName: "",
        lastName: "",
        password: ""
    }
  }
  const [regInfo, setRegInfo] = useState(initialState)

  const handleChange = e => {
    setRegInfo({
            credentials: {
              ...regInfo.credentials,
              [e.target.name]: e.target.value   
            }           
    });
  };

  const handleRegister = e => {
    e.preventDefault();
    // make a POST requeset to the server
    // the server will authenticate the user based on their credentials
    // if they auth, the server will return a token
    axios
      .post("http://localhost:5000/api/register", regInfo.credentials)
      .then(res => {
        console.log(res);
        props.history.push("/protected/onboarding");
      })
      .catch(err => console.log(err));
  };

  return (
      <div>
        <div>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    name="username"
                    value={regInfo.credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="firstName"
                    value={regInfo.credentials.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    value={regInfo.credentials.lastName}
                    onChange={handleChange}
                />
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
