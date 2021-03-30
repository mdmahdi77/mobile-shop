import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navSection">
            <div className="logo">
            <h1>Mobile <span>Shop</span></h1>
            </div>
            <div className="navList">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/addProduct">Add-Product</Link></li>
                    <li><Link to="/checkOut">CheckOuts</Link></li>
                    <li><Link to="/inventory">Inventory</Link></li>
                    <li className="btn btn-danger"><Link to="/logIn">Log In</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;