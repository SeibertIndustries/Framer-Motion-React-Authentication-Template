import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";


const Names = ({ addNames }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    switch (target.id) {
      case "firstName":
        setFirstName(target.value);
        break;
      case "lastName":
        setLastName(target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
    });
    addNames(firstName, lastName);
  };

  const nextButton =
    firstName && lastName ? (
      <Link to="/email-setup">
        <button type="submit" className="border-button">
          Next
        </button>
      </Link>
    ) : (
      <div></div>
    );

  return (
    <div className="container">
      <h4>What do your people call you?</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <span className="white-text helper-text">What mom calls you.</span>
          </div>

          <div className="input-field col s6">
            <input
              id="lastName"
              type="text"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="lastName">Last Name</label>
            <span className="helper-text white-text">
              What your high school friends call you.
            </span>
          </div>
        </div>
      </form>
      {nextButton}
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Names;
