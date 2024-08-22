/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";
const names = ["Sam", "Angel", "Oliver", "Lola", "Cookie", "Annie"];
const SidebarChat = ({ messages }) => {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    setSeed(randomName);
  }, []);
  return (
    <div className="sidebarChat">
      <Avatar src={`https://api.dicebear.com/9.x/dylan/svg?seed=${seed}`} />
      <div className="sidebarChat__info">
        <h2>Group chat</h2>
        <p>{messages[messages.length - 1]?.message}</p>
      </div>
    </div>
  );
};
export default SidebarChat;
