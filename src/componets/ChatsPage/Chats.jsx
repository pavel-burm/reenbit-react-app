import React from "react";
import Chat from "./Chat";
import s from "./Chats.module.css";

function Chats(props) {
  const Users = props.users.map((item) => (
    <Chat
      id={item.id}
      login={item.login}
      avatar={item.avatar_url}
      message={props.message}
      key={item.id}
    />
  ));
  return (
    <div className={s.chats_wrapper}>
      <h2>Chats</h2>
      {Users}
    </div>
  );
}

export default Chats;
