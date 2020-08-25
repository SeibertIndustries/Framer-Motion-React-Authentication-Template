import React from 'react';
import { Link } from 'react-router-dom';

const Org = ({ addOrg, user }) => {
  const orgTypes = [
    "Newspaper",
    "Magazine",
    "Journal",
    "Radio Station",
    "TV Station",
  ];

  return (
    <div className="container">
      <h4>What best describes your organization?</h4>
      <ul>
        {orgTypes.map((orgType) => {
          let spanClass = user.orgType === orgType ? "active" : "";
          return (
            <li key={orgType} onClick={() => addOrg(orgType)}>
              <span className={spanClass}>{ orgType }</span>
            </li>
          );
        })}
      </ul>

      {user.orgType && (
        <div className="next">
          <Link to="/security-setup">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Org;