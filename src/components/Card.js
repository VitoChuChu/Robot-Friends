import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="card col p-3 m-3 bg-success bg-gradient bg-opacity-10 shadow grow ">
      <img
        src={`https://robohash.org/${id}?bgset=bg1`}
        alt="Robots"
        width={"250px"}
        height={"250px"}
      ></img>
      <h2 className="fs-5 m-2">{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
