import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        width: "100%",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
