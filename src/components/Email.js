import React, { useState } from "react";
import { Link } from "react-router-dom";
import "materialize-css";
import { motion } from "framer-motion";

const Email = ({ addEmail, user }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        addEmail(email);
        break;
      default:
        break;
    }
  };

  const nextButton =
    email &&
    document.getElementById("email").value.includes("@") &&
    document.getElementById("email").value.includes(".") ? (
      <Link to="/security-setup">
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
        How do we get ahold of you?
      </motion.h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <motion.div
          className="input-field s12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <label htmlFor="email">Email Address</label>
          <input
            autoComplete="off"
            id="email"
            type="email"
            className="validate white-text"
            onChange={(e) => handleChange(e)}
          />
          <motion.span
            className="helper-text white-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.7 }}
          >
            In case you become famous
          </motion.span>
        </motion.div>
        {nextButton}
      </form>
    </div>
  );
};

export default Email;
