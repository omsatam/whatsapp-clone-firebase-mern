import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import React, {useEffect, useState} from "react"
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
      axios.get("/messages/sync")
      .then(response => {
        console.log(response.data);
        setMessages(response.data);
      })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('c1e02d80a42c4e584b8a', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessages) {
      // alert(JSON.stringify(newMessages));
      setMessages([...messages,newMessages]);
    });

    return ()=> {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  return (
    <div className="app">
      {/* <h1>Lets build whatsapp clone</h1> */}

      <div className="app__body">
      {/* Sidebar */}
      <Sidebar />

      {/* chat component */}
      <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
