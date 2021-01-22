import React from 'react';
import { Link, Redirect } from 'react-router-dom';

  const StrictAccess = ({ userName, password }) => {
    if (userName !== 'joão' || password !== '1234') {
      console.log('Access denied! - Só entra aqui se mudar na props??? (carinha pensativa :))')
      return <Redirect to='/Home' />
    }
    return (
      <div>
        <p> Welcome, João! </p>
        <Link to='/'>Home</Link>
      </div>
    )
  };

  export default StrictAccess;