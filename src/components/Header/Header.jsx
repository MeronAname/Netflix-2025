import React from 'react';
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <nav className='header-left'>
          <ul>
            <li><img src={NetflixLogo} alt='Netflix logo' width="100" /></li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </nav>

        <div className='header-right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;