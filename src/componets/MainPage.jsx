import React, { useEffect, useState } from "react";
import CurrentDialog from "./DialogPage/CurrentDialog";
import s from "./MainPage.module.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Preloader from "./Preloader";
import Sidebar from "./ChatsPage/Sidebar";

function MainPage(props) {
  const [value, setValue] = useState([]);
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState("mojombo");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setValue(data));
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
 
  const friends = users.map((item) => item);
  const body = value.map((item) => item.body);
  const dialog = users.map((item) => (
    <Route
      path={`/dialog/${item.login}`}
      element={
        <CurrentDialog
          id={item.id}
          avatar={item.avatar_url}
          message={body}
          key={item.id}
          login={item.login}
          users={friends}
        />
      }
    />
  ));

  return value.length === 0 && users.length === 0 ? (
    <Preloader />
  ) : (
    <div className={s.main_page}>
      <Sidebar message={body} users={friends} value={setCount} />
      <Routes>
        {dialog}
        <Route path="/" element={<Navigate to={`/dialog/${count}`} />} />
      </Routes>
    </div>
  );
}

export default MainPage;
