import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./Chat.css";
import {Link} from "react-router-dom";
function Chat({name, timestamp, profilePic, message}) {
    return (
        <Link to={`/chat/${name}`} >
        <div className="chat">
            <Avatar className="profilePic" src={profilePic} />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <div className="timestamp">
                <p>{timestamp}</p>
            </div>
        </div>
        </Link>
    );
}

export default Chat;