import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";
import { motion } from "framer-motion";

const Names = ({ addNames, user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        addNames(e.target.value, null);
        break;
      case "lastName":
        setLastName(e.target.value);
        addNames(null, e.target.value);
        break;
      default:
        break;
    }
  };

  const nextButton =
    firstName && lastName ? (
      <Link to="/email-setup">
        <motion.button
          type="submit"
          className="next-button"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 5, type: "spring", stiffness: 60 }}
          whileHover={{
            scale: 1.005,
            boxShadow: "0px 0px 2px rgb(255,255,255)",
          }}
          whileTap={{
            backgroundColor: "transparent",
          }}
        >
          Next
        </motion.button>
      </Link>
    ) : (
      <div></div>
    );

  return (
    <div className="container">
      <motion.h4
        initial={{ x: "150vw" }}
        animate={{ x: 0 }}
        transition={{
          type: "spring",
          delay: 0.2,
          duration: 0.3,
          stiffness: 60,
        }}
      >
        What do your people call you?
      </motion.h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="row">
          <motion.div
            className="input-field col s6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <label htmlFor="firstName">First Name</label>
            <input
              autoComplete="off"
              id="firstName"
              type="text"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <motion.span
              className="white-text helper-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              What your mom calls you.
            </motion.span>
          </motion.div>
          <motion.div
            className="input-field col s6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <label htmlFor="lastName">Last Name</label>
            <input
              autoComplete="off"
              id="lastName"
              type="text"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <motion.span
              className="white-text helper-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.7 }}
            >
              What your high school friends call you.
            </motion.span>
          </motion.div>
        </div>
        {nextButton}
      </form>
    </div>
  );
};

export default Names;
