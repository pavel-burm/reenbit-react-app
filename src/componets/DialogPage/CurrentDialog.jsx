import React, { useState, useEffect } from "react";
import s from "./CurrentDialog.module.css";
import Messages from "./MessagesPage/Messages";
// import { Route, Routes, Navigate } from "react-router-dom";
import UserHeader from "./MessagesPage/UserHeader";

function CurrentDialog(props) {
  let newMessageElement = React.createRef();
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [count, setCount] = useState(1);
  const handleChange = () => {setValue(newMessageElement.current.value);}
  const handleValue = () => {setCount(count+1);localStorage.setItem(`message${count}`, value);newMessageElement.current.value='';setValue2(localStorage.getItem(`message${count}`)) }
  console.log(count)
  return (
    <div className={s.currentdialog_wrapper}>
      <UserHeader avatar={props.avatar} login={props.login}/>
      <Messages
        id={props.id}
        key={props.key}
        avatar={props.avatar}
        message={props.message}
        chuck={props.chuck}
        render={props.render}
        users={props.users} 
         count={count}
         value={value2}
         
      />
      <div className={s.message_field}>
        <label onClick={value ? handleValue : null}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/60/60525.png"
            alt=""
            className={s.arrow}
          />
          <button style={{ display: "none" }} ></button>
        </label>
        <textarea
          ref={newMessageElement}
          placeholder="Type your message"
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
}

export default CurrentDialog;
