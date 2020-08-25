import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";

const Names = ({ addNames }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    switch (target.id) {
      case "password":
        setPassword(target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      password,
      confirmPassword,
    });
    addNames(password, confirmPassword);
  };

  const nextButton =
    password && confirmPassword && password === confirmPassword ? (
      <Link to="/email-setup">
        <button type="submit">Next</button>
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
            <label htmlFor="firstName">Password</label>
            <input
              id="firstName"
              type="password"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <span
              className="white-text helper-text"
              data-error="wrong"
              data-success="right"
            >
              Shhhh
            </span>
          </div>
          <div className="input-field col s6">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="validate white-text"
              onChange={(e) => handleChange(e)}

            />
            <span
              className="white-text helper-text"
              data-error="wrong"
              data-success="right"
            >
              What your high school friends call you.
            </span>
          </div>
        </div>
        {nextButton}
      </form>
    </div>
  );
};

export default Names;
