import React from "react";
import { Link } from "react-router-dom";
  
  const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <svg width="50px" height="33px" viewBox="0 0 50 33">
            <title>Seibert Industries Logo</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Group-Copy-2" fill="#FFFFFF">
                <circle id="Oval-Copy-3" cx="12" cy="21" r="12"></circle>
                <circle id="Oval-Copy-4" cx="46.5" cy="3.5" r="3.5"></circle>
              </g>
            </g>
          </svg>
        </div>
      </Link>
      <div className="title">
        <h4>Framer Motion & React Auth</h4>
      </div>
    </header>
  );
};

export default Header;
