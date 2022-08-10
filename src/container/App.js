import React, { useState, useEffect } from "react";
import Cardlist from "../components/CardList";
import Nav from "../components/Nav";
import Scroll from "../components/Scroll";

const App = () => {
  const [search, setSearch] = useState("");
  const [robots, setRobots] = useState([]);

  // userEffect area
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
    return <h1 className="tc v-mid">Loading</h1>;
  } else {
    try {
      return (
        <div className="container.xl text-center">
          <Nav search={search} setSearch={setSearch} />
          <div>
            <Scroll>
              <Cardlist robots={filterRobots} />
            </Scroll>
          </div>
        </div>
      );
    } catch (e) {
      console.log(e);
      return <h1>Oops, something happened.</h1>;
    }
  }
};

export default App;
