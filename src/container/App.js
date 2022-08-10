import React, { useState, useEffect } from "react";
import Cardlist from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

const App = () => {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUser();
    };
    fetchData();
  }, []);

  const fetchUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  };

  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  });

  if (robots.length === 0) {
    return <h1 className="tc">Loading</h1>;
  } else {
    return (
      <div className="container text-center">
        <div>
          <h1>Robot Friends</h1>
          <SearchBox search={search} setSearch={setSearch} />
        </div>
        <div>
          <Scroll>
            <Cardlist robots={filterRobots} />
          </Scroll>
        </div>
      </div>
    );
  }
};

export default App;
