import React, { useState } from "react";

const SearchBox = ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input type="search" onChange={onChangeHandler} />
    </div>
  );
};

export default SearchBox;
