import React from "react";
import s from "./Messages.module.css";
import MyMessage from "./MyMessage";
import UserMessage from "./UserMessage";

function CurrentUser(props) {
  const messagesArray = props.mess.map((item) => (
    <>
      <UserMessage
        id={props.id}
        key={props.id}
        avatar={props.avatar}
       
        chuck={props.chuck}
        mess={item} 
      />
      <MyMessage
        id={props.id}
        key={props.id}
        avatar={props.avatar}
        mess={item}
      />
    </>
  ));

  return (
    <div>
      {messagesArray}
      {/* <UserMessage id={props.id} key={props.id} avatar={props.avatar} messages={props.messages[Math.floor(Math.random()*100)]}/>
      <MyMessage  id={props.id} key={props.id} avatar={props.avatar} messages={props.messages[Math.floor(Math.random()*100)]}/>
      <UserMessage  id={props.id} key={props.id} avatar={props.avatar} messages={props.messages[Math.floor(Math.random()*100)]}/>
      <MyMessage  id={props.id} key={props.id} avatar={props.avatar} messages={props.messages[Math.floor(Math.random()*100)]}/>
      <UserMessage  id={props.id} key={props.id} avatar={props.avatar} messages={props.messages[Math.floor(Math.random()*100)]}/> */}
    </div>
  );
}

export default CurrentUser;
