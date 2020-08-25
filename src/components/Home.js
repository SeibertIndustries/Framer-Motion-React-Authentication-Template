import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <h2>
        We are excited to have you join!
      </h2>
      <Link to="/name-setup">
        <button>
          Setup your Account
        </button>
      </Link>
    </div>
  )
}

export default Home;