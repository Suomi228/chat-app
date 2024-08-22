/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import "./Chat.css";
import { useStateValue } from "./StateProvider";
const names = ["Sam", "Angel", "Oliver", "Lola", "Cookie", "Annie"];
const Chat = ({ messages }) => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const sendMessage = async (e) => {
    e.preventDefault();
    const newMessage = {
      name: user.displayName,
      message: input,
      timestamp: new Date().toLocaleString(),
      received: true,
    };
    setInput("");
    try {
      await axios.post("/messages/new", newMessage);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setSeed(randomName);
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://api.dicebear.com/9.x/dylan/svg?seed=${seed}`} />
        <div className="chat__headerInfo">
          <h3>Group chat</h3>
          <p>Last seen at {messages[messages.length - 1]?.timestamp}</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          // eslint-disable-next-line react/jsx-key
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};
export default Chat;
