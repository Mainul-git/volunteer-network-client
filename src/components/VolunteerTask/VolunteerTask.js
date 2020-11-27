import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./VolunteerTask.css";

const VolunteerTask = ({ volunteerTask }) => {
  
  return (
    <div className="col-4 col-md-3">
      <Link to={`/register/${volunteerTask.id}`}>
        <img
          style={{ height:'300px'}}
          src={volunteerTask.pic} />
        <h3>{volunteerTask.name}</h3>
      </Link>
    </div>
  );
};

export default VolunteerTask;
