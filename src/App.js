import React, { useState } from "react";

import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  //initialize state hook function to modify data
  //as an constant array [final_state, setAction_ChangeUserList].
  const [usersList, setUsersList] = useState([]);

  //create handler_action to show updated users data
  //receiving user properties arguments & keeping old data
  const AddHandler = (pramUsername, pramAge) => {
    //update usersList
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: pramUsername, age: pramAge, id: Math.random().toString() },
      ];
    });
  };
  //children components...
  //receive updated data with available props used on parent_components
  return (
    <div>
      <AddUser onAdd={AddHandler} />
      <UsersList usersdata={usersList} />
    </div>
  );
}

export default App;
