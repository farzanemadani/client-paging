import React from "react";

const Card = ({ imageUrl, name, skills, mobile, email }) => {
  return (
    <div className="card text-center border-0 shadow-lg">
      <div className="card-body">
        <img
          width="96"
          src={imageUrl}
          className="d-inline-block rounded-circle mb-3"
        />
        <h6>{name}</h6>
        <span className="fs-sm text-muted d-block">{skills}</span>
        <span className="mt-4 mb-0 fs-sm fw-bold d-block">{mobile}</span>
        <span className="mb-4 fs-sm fw-bold d-block">{email}</span>
      </div>
    </div>
  );
};

export default Card;
