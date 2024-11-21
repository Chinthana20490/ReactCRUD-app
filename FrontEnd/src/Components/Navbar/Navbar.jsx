import React from 'react';
import './Navbar.css';
import reactLogo from '../../assets/react.svg';
import Menulink from './MenuLink';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <div className='wrapper'>
            <div className='logo'>
                <a href="#"><img src={reactLogo} alt="react logo" /></a>
            </div>
            <div className='content'>                
                <Menulink name="Home" url="/"/>
                <Menulink name="Add Users" url="/adduser"/>
                <Menulink name="User Details" url="/userdetails"/>
            </div>

            <div className='inputfield'>
                <input type="text" />
                <i className='bx bx-search-alt-2'></i>
            </div>

            
        </div>
     
    </div>
  )
}

export default Navbar
