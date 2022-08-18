import React from "react";
import s from "./MyMessage.module.css";

function MyMessage(props) {
  return (
    <div className={s.my_message_wrapper}>
     <p className={s.my_message}> {props.mess} </p>
    </div>
  );
}

export default MyMessage;