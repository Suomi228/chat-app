import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const pusher = new Pusher("e245126193b0cceba073", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setMessages([...messages, data]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
export default App;
