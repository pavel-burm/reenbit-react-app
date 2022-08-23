import React from "react";
import s from "./UserHeader.module.scss";

function UserHeader(props) {
  return (
    <div className={s.user_wrapper}>
      <div className={s.avatar_wrapper}>
        <img src={props.avatar} alt="" />
      </div>
      <div className={s.username}>
        <span>{props.login}</span>
      </div>
    </div>
  );
}

export default UserHeader;
