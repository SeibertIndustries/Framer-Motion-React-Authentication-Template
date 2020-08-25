import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";

const Email = ({ addEmail }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    switch (target.id) {
      case "email":
        setEmail(target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
    });
    addEmail(email);
  };

  const nextButton = email ? (
    <Link to="/security-setup">
      <button type="submit" className="border-button">
        Next
      </button>
    </Link>
  ) : (
    <div></div>
  );

  return (
    <div className="container">
      <h4>How do we get ahold of you?</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-field s12">
          <input
            id="email"
            type="email"
            className="validate white-text"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email Address</label>
          <span className="helper-text white-text">
            In case you become famous
          </span>
        </div>
      </form>
      {nextButton}
      <Link to="/name-setup">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default Email;
