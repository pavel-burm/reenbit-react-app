import React from "react";
import s from "./MyMessage.module.scss";

function MyMessage(props) {
  return (
    <div className={s.my_message_wrapper}>
      <p className={s.my_message}>
        {" "}
        {props.message} {props.mymessage}{" "}
      </p>
    </div>
  );
}

export default MyMessage;
