import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import moclasse from "./AddUser.module.css";


//Handle submit form & Handle input data change
const AddUser = (props) => {
  //track any specified input_states array called
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    //apply conditional statement to step data forward:
    if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age(non-empty value)",
      });
      return; //break the AddUser_handler_function
    }
    if (+enteredAge <= 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(greater than 1)",
      });

      return; //force string to be a number & break the AddUser_handler_function
    }
    //test using console.log() to visualize input entered_data
    //console.log(enteredUsername, enteredAge);

    //calling call props.onAdd to show on the list below the Add user component
    props.onAdd(enteredUsername, enteredAge);

    //reset input data fields and store entered_data into props_value
    setEnteredUsername("");
    setEnteredAge("");
  };
  //function that will listen & trigger for specified change_keyStroke input
  const usernameChangeHandler = (event) => {
    //call specified input_state tracked with the array function
    //to apply change from event target value.
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    //repeat for onChange event
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  //first of all, create a form for user data
  return (
    <div>
       {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={moclasse.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
