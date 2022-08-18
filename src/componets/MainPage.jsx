import React, { useEffect, useState } from "react";
import Chats from "./ChatsPage/Chats";
import CurrentDialog from "./DialogPage/CurrentDialog";
import s from "./MainPage.module.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Preloader from "./Preloader";

function MainPage(props) {
  const [value, setValue] = useState([]);
  const [users, setUsers] = useState([]);
  const [chuck, setChuck] = useState("");
  const [count, setCount] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setValue(data));
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setChuck(data));
  }, []);
  const chuckMessage = chuck.value;
  const friends = users.map((item) => item);
  const body = value.slice(0, 10).map((item) => item.body);
  const dialog = users.map((item) => ( 
    <Route
      path={`/dialog/${item.login}`}
      element={
        <CurrentDialog
          id={item.id}
          avatar={item.avatar_url}
          messages={body}
          key={item.id}
          chuck={chuckMessage}
        />
      }
    />
  ));
  return value.length === 0 && users.length === 0 ? (
    <Preloader />
  ) : (
    <div className={s.main_page}>
      <Chats message={body} users={friends} />
      <Routes>
        {dialog}
      </Routes>
    </div>
  );
}

export default MainPage;
