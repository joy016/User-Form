import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import UserList from "./UserList";
import ErrorModal from "../UI/ErrorModal.js";

const User = (props) => {
  const [inputUser, setInputUser] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputUser(event.target.value);
  };

  const handleInputAgeChange = (event) => {
    setInputAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!inputUser || !inputAge) {
      setError({
        title: "Invalid input",
        message: "Please fill all the fields",
      });
    }
    if (+inputAge < 0) {
      setError({
        title: "Age invalid",
        message: "Age must be greater than zero",
      });
    }
    props.onAddUser(inputUser, inputAge);

    setInputUser("");
    setInputAge("");
  };
  const modalHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={modalHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label className="input" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            id="username"
            type="text"
            onChange={handleInputChange}
            value={inputUser}
          />
          <label className="input" htmlFor="age">
            Age(Years)
          </label>
          <input
            className="input"
            id="age"
            type="number"
            onChange={handleInputAgeChange}
            value={inputAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default User;
