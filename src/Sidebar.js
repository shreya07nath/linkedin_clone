import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="./bg.jpg" alt="" />
            <Avatar className="sidebar_avatar" />
             <sidebar_avatar avatar = "./shr.jpg" />
            <h2>SHREYA NATH</h2>
            <h4>Web Dev | Competitive Programmer | Marketing Enthusiast | KIIT'23</h4>
        </div>
        
        <div className="sidebar_stats">
            <div className="sidebar_stat" >
            <p>Who viewed your profile</p>
            <p className="sidebar_statNumber">1,672</p>
        </div>
        <div className="sidebar_stat" >
        <p>Connections</p>
            <p className="sidebar_statNumber">1,189</p>
        </div>
    </div>
    <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
        </div>
    </div>
  );
}

export default Sidebar