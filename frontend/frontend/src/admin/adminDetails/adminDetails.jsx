import React from 'react';
import UserContext from 'store/context/UserContext';
import { useContext } from 'react';
import './adminDetails.css';

const AdminDetails = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-profile-card">
    <div className="user-info">
      <h1 className="user-name">Name: {user.name}</h1>
      <h1 className="user-email">Email:{user.email}</h1>
      <h1 className="user-phone"> Role: {user.role}</h1>
    </div>
  </div>
  );
};

export default AdminDetails;
