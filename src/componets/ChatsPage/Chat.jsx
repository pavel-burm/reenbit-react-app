import React from "react";
import s from "./Chat.module.css";
// import { Link } from "react-router-dom";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function Chat(props) {
  return (
    <>
      <Link to={`/dialog/${props.login}`}>
        <div className={s.chat_item}>
          <div className={s.avatar_wrapper}>
            <img src={props.avatar} alt="" />
          </div>
          <div className={s.user_wrapper}>
            <div className={s.username}>{props.login}</div>
            <div className={s.message}>{props.message[props.id-1]}</div>
          </div>
        </div>
      </Link>
    
    </>
  );
}

export default Chat;
