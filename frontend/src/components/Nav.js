import React from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Nav(){

    const testAPI = e =>{
    e.preventDefault();
    axiosWithAuth()
      .get('/students')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

    return (
        <div>
                <button onClick={testAPI}>Test</button>
                <p><Link to='/login'>Login</Link></p>
                <p><Link to='/register'>Register</Link></p>
                <p><Link to='/protected/home'>Home</Link></p>
        </div>
    )
}