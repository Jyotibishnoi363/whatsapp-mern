import React, {useEffect, useState} from "react"
import './App.scss';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';

const App = () => {

  const [messages, setMessages] =  useState([]);

  useEffect(() => {
   axios.get("/api/v1/messages/sync").then((response) => {
      setMessages(response.data);
   })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('9be8967a90bb2deacd1e', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      setMessages([...messages, newMessages]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);
  return (
    <div className="app">
    <div className="app__body">
    <Sidebar/>
      <Chat messages={messages}/>
    </div>
    </div>
  );
}

export default App;
