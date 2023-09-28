import React from 'react';
import { Link } from 'react-router-dom';
import './Complaints.css';

const ComplaintList = ({ comps, title }) => {
  return (
    <div className="complaint-list">
      <h1>{title}</h1>
      <div className="card-list">
        {comps.map((comp) => (
          <div className="card" key={comp.id}>
            <Link to={`/comps/${comp.id}`} className="card-link">
              <h2>{comp.name}</h2>
              <p>Room: {comp.room_no}</p>
              <p>Block: {comp.block}</p>
              <p>Date: {comp.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintList;
