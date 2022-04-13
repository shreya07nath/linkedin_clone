import React from 'react'
import "./Rightbar.css";
import InfoIcon from '@mui/icons-material/Info';


function Rightbar() {
  return (
    <div className="rightbar">
        
        <div className="rightbar_top">
        <div className = "rightbar_header">
        <h3>LinkedIn News</h3>
        <InfoIcon />
        </div>
        <div className="rightbar_news">
        <p className = "rightbar_headline">• The top 25 companies in India</p>
        <p className = "rightbar_time">Top news - 57,832 readers</p>
        <p className = "rightbar_headline">• Indigo's passenger volume flies high</p>
        <p className = "rightbar_time">23 hrs ago - 5,836 readers</p>
        <p className = "rightbar_headline">• Unacademy fires 1000 employees</p>
        <p className = "rightbar_time">1 day ago - 8,293 readers</p>
        <p className = "rightbar_headline">• Flipkart launches healthcare app</p>
        <p className = "rightbar_time">3 days ago - 1,667 readers</p>
        <p className = "rightbar_headline">• Coronavirus: India Updates</p>
        <p className = "rightbar_time">4 days ago - 3,096 readers</p>
        </div>
        </div>
        
        <div className = "rightbar_bottom">
          <div className = "rightbar_ad">
          <p> Stay up-to-date with the latest industry trends! </p>
          </div>
          
          <div className="rightbar_logo">
            <p className="logo_one"> SCALAR </p>
            <p className="logo_two"> ACADEMY </p>
          </div>
           
              <p classname="rightbar_stat">SHREYA, you might like to follow Scaler Academy</p>
            </div>
        </div>
    
  );
}

export default Rightbar