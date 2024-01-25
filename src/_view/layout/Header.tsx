import React from 'react';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';


const Header = () => {
    return (
        <div>
            <center><h1>Login</h1></center>
            <button><Link to="http://localhost:3000/categoryDashboard">Dashboard</Link></button>
        </div>

    );
};

export default Header;