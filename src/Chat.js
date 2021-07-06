import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from "@material-ui/icons/Mic";
import React, {useState} from 'react'
import "./Chat.scss";
import axios from './axios';

const Chat = ({messages}) => {

    const [input, setInput] = useState("");

const sendMessage =  async (event) => {
    event.preventDefault();
    await axios.post('/api/v1/messages/new', {
        message: input,
        name: "Jyoti Bishnoi",
        timestamp: new Date().toUTCString(),
        received: false
    }); 

    setInput('');
}

    return (
        <div className="chat">
           <div className="chat__header">
        <Avatar/>
        <div className="chat__headerInfo">
         <h3>Room name</h3>
         <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
        </div>
           </div>
           <div className="chat__body">
               {messages.map((message, index) => {
                 return (  <p 
                    key={index}
                 className={`chat__messages ${message.received ? "chat__receiver" : ""}`}>
                    <span className="chat__name">{message.name}</span>
                   {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                    </p>
                    )
               })}          
           </div>
           <div className="chat__footer">
               <InsertEmoticonIcon/>
               <form>
                   <input value={input} 
                   onChange={(e) => setInput(e.target.value)}
                   placeholder="Type a message" type="text"></input>
                   <button onClick={sendMessage} type="submit">Send a message</button>
               </form>
               <MicIcon/>
           </div>
        </div>
    )
}

export default Chat;
