import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import "./Chat.css";
const names = ["Sam", "Angel", "Oliver", "Lola", "Cookie", "Annie"];
const Chat = () => {
    const [seed, setSeed] = useState("");
    useEffect(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setSeed(randomName);
    }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://api.dicebear.com/9.x/dylan/svg?seed=${seed}`}/>
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
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
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
};
export default Chat;
