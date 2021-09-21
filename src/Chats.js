import React from 'react';
import Chat from "./Chat";

function Chats() {
    return (
        <div>
            <Chat 
            name="Zuck"
            message="Hello"
            timestamp="55 min ago"
            profilePic="data:image/jpeg;base64,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"/>
            <Chat 
            name="Steve"
            message="Hola"
            timestamp="51 min ago"
            profilePic="data:image/jpeg;base64,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"
            />
        </div>
    );
}

export default Chats;