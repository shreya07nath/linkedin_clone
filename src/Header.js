import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

function Header() {
  return (
    <div className="header">

      <div className ="header_left">
      <img src="./lilogo.png" alt ="" />
      <div className ="header_search">
      <SearchIcon />
      <input type = "text" />
      </div>
      </div>

      <div className ="header_right">
        <HeaderOption Icon ={HomeIcon} title ="Home" />
        <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network" />
        <HeaderOption Icon ={BusinessCenterIcon} title ="Jobs" />
        <HeaderOption Icon ={ChatIcon} title ="Messaging" />
        <HeaderOption Icon ={NotificationsIcon} title ="Notifications" />
        <HeaderOption avatar = "./shr.jpg" title ="Me" />
        <HeaderOption Icon = {AppsOutlinedIcon} title ="Work" />

      </div>
      </div>
  )
}

export default Header;