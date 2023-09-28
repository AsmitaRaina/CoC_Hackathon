import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './ComplaintDetails.css'; // Import your CSS file

const ComplaintDetails = () => {
  const { id } = useParams();
  const { data: comp, error, isPending } = useFetch(
    "http://localhost:8000/comps/" + id
  );
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/comps/" + comp.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/viewcomplaint");
    });
  };

  return (
    <div className="blog-deets">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {comp && (
        <article className="cardo">
          
          <div className="img">
            <img src='https://res.cloudinary.com/dyxnmjtrg/image/upload/v1692366990/2_wfgtq3.png' className="img11"></img>
          </div>
          <span>Name: {comp.name}</span>
          <p className="job">Block No: {comp.block}</p>
          <p className="job">Room No: {comp.room_no}</p>
          <p className="job">Issue Type: {comp.issuetype}</p>
          <p className="job">Complaint Details: {comp.complaint}</p>
          <p className="job">Date of Complaint: {comp.date}</p>
          <button onClick={handleClick}>Resolved</button>
        </article>
      )}
    </div>
  );
};

export default ComplaintDetails;
