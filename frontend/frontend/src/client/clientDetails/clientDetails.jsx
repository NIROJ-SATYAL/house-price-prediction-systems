import React from "react";
import UserContext from "store/context/UserContext";
import { useContext } from "react";
import "./clientDetails.css";
import { Navigate } from "react-router-dom";

const ClientDetails = () => {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <div className="user-profile-card">
        <div className="user-info">
          <h1 className="user-name">Name: {user.name}</h1>
          <h1 className="user-email">Email:{user.email}</h1>
          <h1 className="user-phone"> Role: {user.role}</h1>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default ClientDetails;
