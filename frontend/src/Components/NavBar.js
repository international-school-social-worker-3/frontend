import React from "react";
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'

function NavBar () {

    const testAPI = e =>{
    e.preventDefault();
    axiosWithAuth()
      .get('/auth/register')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

    return (
        <div className="nav-container">
            <section className="nav">
                <div className="home">
                    <button><Link to='/login'>Login</Link></button>
                </div>
                <div className="sign-out">
                    <button><Link to='/protected/home'>Home</Link></button>
                </div>
                <div className="sign-out">
                    <button><Link to='/register'>Register</Link></button>
                </div>
                <button onClick={testAPI}>Test</button>
            </section>
        </div>
    )
}

export default NavBar;