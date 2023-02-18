import "./index.css";
import User from "./components/user/User";
import UserList from "./components/user/UserList";
import React, { useState } from "react";

let arrayList = [{ id: 1, name: "Joy", age: 26 }];
function App() {
  const [userListInputs, setUserListInputs] = useState(arrayList);

  const addUserHandler = (uName, uAge) => {
    const id = Math.floor(Math.random() * 100);
    setUserListInputs((prevState) => {
      return [{ id: id, name: uName, age: uAge }, ...prevState];
    });
  };

  return (
    <>
      <User onAddUser={addUserHandler} />
      <UserList userList={userListInputs} />
    </>
  );
}

export default App;
