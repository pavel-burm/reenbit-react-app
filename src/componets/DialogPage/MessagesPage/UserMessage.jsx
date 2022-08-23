import React from "react";
import s from "./UserMessage.module.scss";

function UserMessage(props) {
  return (
    <div className={s.message_wrapper}>
      <div className={s.avatar_wrapper}>
        <img src={props.avatar} alt="" />
      </div>
      <p className={s.user_message}>
        {" "}
        {props.message} {props.chuck}{" "}
      </p>
    </div>
  );
}

export default UserMessage;
