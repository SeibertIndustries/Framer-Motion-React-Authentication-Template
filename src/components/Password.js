import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";
import { motion } from "framer-motion"; 

const Password = ({ addPassword, user }) => {
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
        Setup your password
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <motion.span
              className="white-text helper-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.7 }}
            >
              Shhhh... Its a secret. Don't tell anyone.
            </motion.span>
          </motion.div>
          <motion.div
            className="input-field col s6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              className="validate white-text"
              onChange={(e) => handleChange(e)}
            />
            <motion.span
              className="white-text helper-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.7 }}
            >
              Well... actually tell us one more time.
            </motion.span>
          </motion.div>
        </div>
        {nextButton}
      </form>
    </div>
  );
};

export default Password;
