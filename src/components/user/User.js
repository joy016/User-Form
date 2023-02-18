import React, { useState, useRef } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import ErrorModal from "../UI/ErrorModal.js";
import Wrapper from "../helpers/Wrapper";

const User = (props) => {
  const inputUserRef = useRef();
  const inputAgeRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUser = inputUserRef.current.value;
    const enteredAge = inputAgeRef.current.value;
    const age = Number(enteredAge);
    if (!enteredUser || !enteredAge) {
      setError({
        title: "Invalid input",
        message: "Please fill all the fields",
      });
      return;
    }
    if (isNaN(age) || age <= 0) {
      setError({
        title: "Age invalid",
        message: "Age must be greater than zero",
      });
      return;
    }
    props.onAddUser(enteredUser, enteredAge);
    inputUserRef.current.value = "";
    inputAgeRef.current.value = "";
  };
  const modalHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={modalHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={inputUserRef} />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={inputAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default User;
