import React from "react";
import s from "./Chat.module.css";
import { NavLink } from "react-router-dom";

function Chat(props) {
  const handleLocal = () => {
    localStorage.setItem("value", props.login);
    props.value(localStorage.getItem("value"));
  };
  const date = new Date();
  const arrDate = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    
      <button onClick={handleLocal} className={s.button}>
        <NavLink
      to={`/dialog/${props.login}`}
      className={(Link) => (Link.isActive ? s.active : null)}
    >
        <div className={`${s.chat_item} ${s.active}`}>
          <div className={s.avatar_wrapper}>
            <img src={props.avatar} alt="" />
          </div>
          <div className={s.user_wrapper}>
            <div>
              <div className={s.username}>{props.login}</div>
              <div className={s.message}>{props.message[props.id - 1]}</div>
            </div>
          </div>
          <div className={s.date}>
            <span>
              {date.toString().slice(4, 7) +
                " " +
                arrDate[props.id < 30 ? props.id : 5] +
                ", " +
                date.getFullYear()}
            </span>
          </div>
        </div>
        </NavLink>
      </button>
  
  );
}

export default Chat;
