import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";

const Names = ({ addPassword, user }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "password":
        setPassword(e.target.value);
        addPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        addPassword(null, e.target.value);
        break;
      default:
        break;
    }
  };

  const nextButton =
    password && confirmPassword && password === confirmPassword ? (
      <Link to="/account-confirmation">
        <button type="submit" className="next-button">
          Next
        </button>
      </Link>
    ) : (
      <div></div>
    );

  return (
    <div className="container">
      <h4>What do your people call you?</h4>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <span
              className="white-text helper-text"
            >
              Shhhh
            </span>
          </div>
          <div className="input-field col s6">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="validate white-text"
              onChange={(e) => handleChange(e)}

            />
            <span
              className="white-text helper-text"
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
