import React from 'react'

const Confirmation = ({user}) => {

  return ( 
    <div className="container">
      <h3>We are excited to have you join us, <strong>{user.firstName}</strong>!</h3>
    </div>
   );
}
 
export default Confirmation;