import React from "react";
import s from "./Search.module.scss";

function Search(props) {
  return (
    <div className={s.search_wrapper}>
      <div className={s.default_avatart}>
        <img
          src="https://icon-library.com/images/default-user-icon/default-user-icon-7.jpg"
          alt=""
        />
      </div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className={s.input}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default Search;
