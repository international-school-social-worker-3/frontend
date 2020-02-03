import React, { useState } from "react";

const Login = props => {

    const [inputValue, setInput] = useState({username:"", password: ""});

    const changeHandler = event => {
        setInput({...inputValue, [event.target.name]: event.target.value});
        console.log(inputValue);
    };

    return(
        <div className="login">
            
            <form>
                <label for="username">
                Username
                </label>
                <input 
                    type="text"
                    name="username"
                    value={inputValue.username}
                    onChange={changeHandler} 
                />
            </form>
            <form>
                <label for="password">
                Password
                </label>
                <input 
                    type="text"
                    name="password"
                    value={inputValue.password}
                    onChange={changeHandler} 
                />
            </form>
            <div>
                <button className="register">
                    Register
                </button>
            </div>

        </div>
    )
}

export default Login;