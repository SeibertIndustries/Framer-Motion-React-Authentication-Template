import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container">
      <h2>We are excited to have you join!</h2>
      <Link to="/name-setup">
        <motion.button
          whileHover={{
            scale: 1.005,
            boxShadow: "0px 0px 2px rgb(255,255,255)",
          }}
          whileTap={{
            backgroundColor:"transparent"
          }}
        >
          Setup your Account
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
