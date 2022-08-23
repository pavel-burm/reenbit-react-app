import React from "react";
import Chat from "./Chat";
import s from "./Chats.module.scss";

function Chats(props) {
  const Users = props.users.map((item) => (
    <Chat
      id={item.id}
      login={item.login}
      avatar={item.avatar_url}
      message={props.message}
      key={item.id}
      value={props.value}
    />
  ));
  return (
    <>
      <h2 className={s.chats_header}>Chats</h2>
      <div className={s.chats_wrapper}>{Users}</div>
    </>
  );
}

export default Chats;
