import React from "react";
import Card from "../UI/Card";
import moduClasses from "./UsersList.module.css";

//responsible to return a list of users data out
const UsersList = (props) => {
  return (
    <Card className={moduClasses.users}>
      <ul >
        {props.usersdata.map((userdata) => (
          <li key={userdata.id}>
            {userdata.name} ({userdata.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
