import React, { useState } from "react";

const SearchBox = ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="tc v-mid">
      <label className="fs-3 v-mid">Name:</label>
      <input
        type="search"
        onChange={onChangeHandler}
        placeholder="Try to find someone"
        className="m-3 p-1 v-mid"
      />
    </div>
  );
};

export default SearchBox;
