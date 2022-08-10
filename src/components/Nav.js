import React from "react";
import SearchBox from "./SearchBox";

const Nav = ({ search, setSearch }) => {
  return (
    <div>
      <h1 className="fw-bolder" style={{ fontSize: "4rem" }}>
        Robot Friends
      </h1>
      <SearchBox search={search} setSearch={setSearch} />
    </div>
  );
};

export default Nav;
