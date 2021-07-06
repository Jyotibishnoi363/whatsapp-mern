import React from 'react';
import "./Sidebar.scss";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from '@material-ui/core';
import  MoreVertIcon  from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from "./SidebarChat"; 

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQEp6MhS8Zs54Q/profile-displayphoto-shrink_800_800/0/1517461267105?e=1631145600&v=beta&t=r4BbyxxYuVgIlPppAWCujVr3OO6hCQYTDpJ7girqRyw"/>
      <div className="sidebar__headerRight">
                    <IconButton>
               <DonutLargeIcon/>
               </IconButton>
               <IconButton>
                   <ChatIcon/>
                </IconButton>
               <IconButton>
                   <MoreVertIcon/>
               </IconButton>
                
        </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start new chat" type = "text"/>
                </div>
            </div>

            <div className="sidebar__chats"> 
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>
        </div>
    )
}


export default Sidebar;

