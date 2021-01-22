import React from 'react';

//this.props.match.params.id
//{ match: {parms: {id}}
const Users = ({ greetingMessage = 'Hi There', match: {params: {id}}}) => (
  <div>
    <h2> Users </h2>
    <p> {greetingMessage}, this is my awesome Users component </p>
    <h4>{id}</h4>
  </div>
);

export default Users;