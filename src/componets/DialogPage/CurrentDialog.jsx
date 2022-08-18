import React, {  useState } from "react";
import s from "./CurrentDialog.module.css";
import Messages from "./MessagesPage/Messages";


function CurrentDialog(props) {
  // const currentUser =  props.value.slice(0,10).map((item) => (
  //   <CurrentUser id={item.id} body={item.body} key={item.id} avatar={props.users[item.id].avatar_url}/>
  // ));
  let newPostElement = React.createRef()
  const [value, setValue] = useState('');
  let messMassive= props.messages.slice(0,2).map(item=> item)
  const [value1, setValue1] = useState(messMassive);
  
  const handleChange =()=> setValue(newPostElement.current.value)
 const handlePush =()=>  messMassive.push(value)
 
  return (
    <div className={s.currentdialog_wrapper}>
     <Messages id={props.id} key={props.key} avatar={props.avatar} mess={value1}  chuck={props.chuck}/>
      <div className={s.message_field}>
        <label onClick={handlePush} >
          <img src='https://cdn-icons-png.flaticon.com/512/60/60525.png' alt='' className={s.arrow}/><button style={{ display: "none" }}></button>
        </label >
        <textarea ref={newPostElement} placeholder="Type your message" onChange={handleChange}></textarea>
      </div>
    </div>
  );
}

export default CurrentDialog;
