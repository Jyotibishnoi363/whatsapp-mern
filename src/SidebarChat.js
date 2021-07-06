import React from 'react';
import './SidebarChat.scss';
import { Avatar } from '@material-ui/core';

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>info here</p>
            </div>
        </div>
    )
}

export default SidebarChat;
