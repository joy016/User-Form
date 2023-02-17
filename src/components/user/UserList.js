import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card.js";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.userList.map(({ id, name, age }) => {
          return (
            <li key={id}>
              {name} ({age} Years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UserList;
