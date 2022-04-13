import React, { useState } from 'react'
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {Avatar} from "@mui/material";

function Feed() {
    const [posts] = useState([])

    const sendPost = (e) => {
        e.preventDefault();
    };

  return (
    <div className='feed'>
        <div className="feed_inputContainer"> 
            <div className="feed_input">
            <Avatar />
                <CreateIcon />
                <form>
                    <input type = "text" />
                    <button onClick = {sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title = "Photo" color="#70b5f9" />
                <InputOption Icon={SubscriptionsIcon} title = "Video" color="#E7A33E" />
                <InputOption Icon={EventNoteIcon} title = "Event" color="#C0CBCD" />
                <InputOption Icon={CalendarViewDayIcon} title = "Write Article" color="#7FC15E" />
            </div>
        </div>
        {posts.map((post) => (
            <Post />
        ))}
        <Post name = "Dhruvam Thaker" description = "Founder - The SMART Taxi | Self-Motivated | Aspire to Be a TEDx speaker| Featured on ET Now Swadesh " message = "In 2008, After failing in 5 interviews Finally got selected in the 6th one! Expected to get posting in Baroda But posted in Bengaluru. Life is unpredictable :)"/>
        <Post name = "Ritesh Agarwal" description = "Founder & Group CEO-OYO" message = "The fast way to learn is to fail but the fastest way to fail is to not learn at all."/>
        <Post name = "Shreya Nath" description = "Web Dev | Competitive Programmer | Marketing Enthusiast | KIIT'23" message = "Started a new position at Google as a Data Analyst. The people here are amazing and support you so that you excel in your field."/>
    </div>
  );
}

export default Feed