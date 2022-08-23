import React, { useEffect, useState } from "react";
import s from "./Messages.module.scss";
import MyMessage from "./MyMessage";
import UserMessage from "./UserMessage";

function CurrentUser(props) {
  const defaultArray = props.message.slice(98).map((item) => (
    <>
      <UserMessage
        id={props.id}
        key={props.key}
        avatar={props.avatar}
        message={item}
      />
      <MyMessage id={props.id} key={props.key} message={item} />
    </>
  ));

  const myMessage = (
    <MyMessage
      id={props.id}
      key={props.key}
      mymessage={
        props.value
          ? props.value
          : localStorage.getItem(`message${props.count}`)
      }
    />
  );

  const [chuck, setChuck] = useState("");
  useEffect(() => {
    localStorage.length >0 ? setTimeout(() => {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => setChuck(data));
    }, 15000) : console.log('')
  }, [localStorage.length]);
  const chuckMessage0 = chuck.value;
  const chuckMessage = (
    <UserMessage
      id={props.id}
      key={props.key}
      avatar={props.avatar}
      chuck={chuckMessage0}
    />
  );
  return (
    <div className={s.messages_wrapper}>
      {defaultArray}
      {localStorage.length !== 0 ? myMessage : null}
      {localStorage.length > 0 && chuckMessage0 ? chuckMessage : null}
    </div>
  );
}

export default CurrentUser;
