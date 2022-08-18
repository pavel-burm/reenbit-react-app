import React from 'react';
import s from "./StartPage.module.css"


function  StartPage(props) {
    return ( 
    <div className={s.start_wrapper}>
  <h2 className={s.start_message}>Select a chat to start messaging</h2>
    </div>
    )
  }
  
  export default StartPage;