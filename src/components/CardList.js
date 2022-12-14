import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <React.Fragment>
      <div className="row row-cols-auto justify-content-center">
        {robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default CardList;
