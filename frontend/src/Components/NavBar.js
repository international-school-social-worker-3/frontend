import React from "react";
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth'


function NavBar() {
    function changeBackground(e) {
        e.target.style.background = 'lightblue';
      }

      function revertBackground(e) {
        e.target.style.background = 'gold';
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

                    <button onMouseOver={changeBackground} onMouseLeave={revertBackground}>Sign Out</button>
                    
                </div>
                <button onClick={testAPI}>Test</button>
            </section>
        </div>
    )
}

export default NavBar;