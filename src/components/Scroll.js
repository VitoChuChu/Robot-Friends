import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        overflow: "hidden",
        border: "1px solid black",
        width: "100%",
        height: "100%",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
