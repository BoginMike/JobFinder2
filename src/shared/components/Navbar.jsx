import React, { useState } from 'react';
import { Link }  from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
//   const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

//  future stuff for mobile const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  const navigate = useNavigate();

  function logout() {
    if (window.confirm("Are you sure want to logout?")) {
      localStorage.clear();
      navigate("/login");
    }
  }

    return (
        <div className='navbar'>
             <Link
             onMouseLeave={onMouseLeave}
             to={'/home'}>
                <span className='nav-links'>
                    Home Page
                </span>
            </Link>
            <Link 
            onMouseEnter={onMouseEnter}
            to={'/home'}>
                <span className='nav-links'>
                    Rental Equipment
                </span>
            </Link>
             {dropdown && <Dropdown />}
            <Link 
            onMouseLeave={onMouseLeave}
            to={'/locations-served'}>
                <span className='nav-links'>
                    Locations Served
                </span>
            </Link>
              <Link
             onMouseLeave={onMouseLeave}
             to={'/about-us'}>
                <span className='nav-links'>
                    About Us
                </span>
            </Link>
            <Link
            onMouseLeave={onMouseLeave}
            to={'/chat'}>
                <span className='nav-links'>
                    Chat With Us
                </span>
            </Link>
            <Link to={'/add-zip'}>
                <span className='app-link'>
                    Add Zip Code
                </span>
            </Link> 
            <Link
            onMouseLeave={onMouseLeave}
            to={'/login'}>
                <span className='SLnav-links'>
                    Customer: Signup/Login
                </span>
            </Link>
            <span onClick={logout}>
              <LogoutIcon />
            </span>
        </div>
    )
}
