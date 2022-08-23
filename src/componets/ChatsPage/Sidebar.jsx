import React, { useState } from "react";
import Chats from "./Chats";
import Search from "./Search";
import s from "./Sidebar.module.css";

function Sidebar(props) {
  const [elem, setElem] = useState("");
  const handleNameChange = (e) => {
    setElem(e.target.value);
  };
  const search = props.users.filter((item) =>
    elem ? item.login.includes(elem) : item.login
  );
  return (
    <div className={s.sidebar}>
      <Search onChange={handleNameChange} users={props.users} />
      <Chats message={props.message} users={search} value={props.value} />
    </div>
  );
}

export default Sidebar;
