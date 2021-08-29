import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  //initialize an constant [state userList_array].
  const [usersList, setUsersList] = useState([]);

  //create a new javascript object function for users
  const AddHandler = (pramUsername, pramAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: pramUsername, age: pramAge, id:Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAdd={AddHandler} />
      <UsersList usersdata={usersList} />
    </div>
  );
}

export default App;
