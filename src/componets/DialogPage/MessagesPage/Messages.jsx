import React from "react";
import s from "./Messages.module.css";
import MyMessage from "./MyMessage";
import UserMessage from "./UserMessage";

function CurrentUser(props) {
  const defaultArray = props.message.slice(98).map((item) => (
    <>
      <UserMessage
        id={props.id}
        key={props.key}
        avatar={props.avatar}
        chuck={props.chuck}
        message={item}
      />
      <MyMessage id={props.id} key={props.key} message={item} />
    </>
  ));
  const myMessage = props.users
    .slice(0,1)
    .map((item) => (
      <MyMessage
        id={item.id}
        key={item.key}
        mymessage={props.value ? props.value : localStorage.getItem(`message${props.count}`) }
      />
    ));
  return (
    <div className={s.messages_wrapper}>
      {defaultArray}
     {  myMessage }
    </div>
  );
}

export default CurrentUser;
