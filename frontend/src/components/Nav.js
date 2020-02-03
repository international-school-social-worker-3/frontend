import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(){
    return (
        <div>
            <ul>
                <li>
                    <Link to='/protected/home' component={Home}>Home</Link>
                </li>
            </ul>
        </div>
    )
}