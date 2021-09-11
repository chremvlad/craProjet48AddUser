import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import moclasse from "./AddUser.module.css";

//Parent component to out put form input to users
const AddUser = (props) => {
  //define hook function to track input data on form
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  //HANDLE FORM SUBMIT & DATA VALIDATION
  const submitFormHandler = (event) => {
    event.preventDefault();

    //LOGIC STATEMENT FORM DATA VALIDATION
    //Validate data setError before forwarding input data:
    if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age(non-empty value)",
      });
      return; //break the AddUser_handler_function
    }
    //ERROR: additional condition on age and to force string to +be a number
    if (+enteredAge <= 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(greater than 1)",
      });

      return; //force string to be a number & break the AddUser_handler_function
    }
    //test using console.log() to visualize input entered_data
    //console.log(enteredUsername, enteredAge);

    //SEND UPDATED DATA to child through available props
    props.onAdd(enteredUsername, enteredAge);

    //RESET INPUT data fields
    setEnteredUsername("");
    setEnteredAge("");
  };

  //HANDLE INPUT USER NAME
  //listen & trigger for change_keyStroke on input USER NAME
  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  //HANDLE INPUT USER AGE
  //listen trigger for change_keyStroke on input USER AGE
  const userAgeChangeHandler = (event) => {
    //update data input onChange event
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  //Propagate Main form for user data_input & child ERROR MODAL data_props
  return (
    <div>
      
      <Card className={moclasse.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
            value={enteredAge}
          />
          <Button type="submit"> Add User</Button>
        </form>
      </Card>

      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}

    
    </div>
  );
};

export default AddUser;
